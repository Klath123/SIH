import { generatePassportMetadata } from '../services/metadataService.js';
import { uploadJSONToIPFS, uploadImageToIPFS } from '../services/pinataService.js';
import { db } from '../services/firebase.js';

export const uploadPassportToIPFS = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      dob,
      docType,
      docNumber,
      issueDate,
      expiryDate,
      nationality,
      gender,
      email,
      issuingAuthority,
      placeOfBirth,
      imageData // Base64 encoded image or buffer
    } = req.body;

    // Validate required fields
    if (!userId || !fullName || !docNumber) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1. Upload image to IPFS if provided
    let imageIpfsUri = null;
    if (imageData) {
      let imageBuffer;
      
      if (imageData.startsWith('data:image')) {
        // Handle base64 image
        const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
        imageBuffer = Buffer.from(base64Data, 'base64');
      } else {
        // Assume it's already a buffer or needs different handling
        imageBuffer = Buffer.from(imageData);
      }

      imageIpfsUri = await uploadImageToIPFS(imageBuffer, `passport-image-${userId}.png`);
    }

    // 2. Generate metadata
    const userData = {
      userId,
      fullName,
      dob,
      docType,
      docNumber,
      issueDate,
      expiryDate,
      nationality,
      gender,
      email,
      issuingAuthority,
      placeOfBirth
    };

    const metadata = generatePassportMetadata(userData, imageIpfsUri);

    // 3. Upload metadata to IPFS
    const tokenURI = await uploadJSONToIPFS(metadata);

    res.json({
      success: true,
      tokenURI,
      metadata,
      imageIpfsUri
    });

     // 4. Store in Firebase
    const ipfsDataRef = db.collection('ipfs-data').doc(userId);
    await ipfsDataRef.set({
      userId,
      tokenURI,
      imageIpfsUri,
      metadata,
      createdAt: new Date()
    });

    const metadataRef = db.collection('metadata').doc(userId);
    await metadataRef.set({
      userId,
      ...metadata,
      createdAt: new Date()
    });
    
  } catch (error) {
    console.error('IPFS upload error:', error);
    res.status(500).json({ error: error.message });
  }
};

export const testIPFSConnection = async (req, res) => {
  try {
    const { testPinataConnection } = await import('../services/pinataService.js');
    const result = await testPinataConnection();
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
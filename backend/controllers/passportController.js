// backend/controllers/passportController.js
import QRCode from "qrcode";
import { getStorage } from "firebase-admin/storage";
import { v4 as uuidv4 } from "uuid";
import { mintPassportOnChain } from "../services/blockchain.js";
import { ethers } from "ethers";
import { generatePassportMetadata } from "../services/metadataService.js";
import { uploadJSONToIPFS, uploadImageToIPFS } from "../services/pinataService.js";
import { db } from "../services/firebase.js";
// import { generateHashedMetadata } from "../services/metadataService.js";

// Complete minting flow: IPFS upload + Blockchain mint + QR generation
export const mintPassport = async (req, res) => {
  try {
    const { 
      userId, 
      userWallet, 
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
      // imageData // Base64 encoded image
    } = req.body;

    if (!userId || !userWallet) {
      return res.status(400).json({ error: "userId and userWallet are required" });
    }

    // 1. Upload image to IPFS if provided  - (not in use for now)
    let imageIpfsUri = null;
    if (imageData) {
      let imageBuffer;
      
      if (imageData.startsWith('data:image')) {
        // Handle base64 image
        const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
        imageBuffer = Buffer.from(base64Data, 'base64');
      } else {
        imageBuffer = Buffer.from(imageData, 'base64');
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

    // In your mintPassport function:
    // const metadata = generateHashedMetadata(userData); // Uses hashes for sensitive data

    // const metadata = generatePassportMetadata(userData, imageIpfsUri);
    const metadata = generatePassportMetadata(userData);

    // 3. Upload metadata to IPFS to get tokenURI
    const tokenURI = await uploadJSONToIPFS(metadata);

    // 4. Mint on blockchain using the generated tokenURI
    const result = await mintPassportOnChain(userWallet, tokenURI);

    // 5. Secure payload for QR code
    const expiry = Date.now() + 1000 * 60 * 60 * 24 * 30; // valid 30 days
    const payload = { tokenId: result.tokenId, userId, expiry };

    // 6. Sign payload (backend's private key)
    const privateKey = process.env.PRIVATE_KEY;
    const signer = new ethers.Wallet(privateKey);
    const message = JSON.stringify(payload);
    const signature = await signer.signMessage(message);

    const securePayload = { ...payload, signature };

    // 7. Generate QR
    const qrData = JSON.stringify(securePayload);
    const qrImageBuffer = await QRCode.toBuffer(qrData);

    // 8. Upload QR to Firebase Storage
    const bucket = getStorage().bucket(process.env.FIREBASE_STORAGE_BUCKET);
    const fileName = `qrcodes/${userId}_${result.tokenId}_${uuidv4()}.png`;
    const file = bucket.file(fileName);

    await file.save(qrImageBuffer, {
      metadata: {
        contentType: "image/png",
        metadata: { firebaseStorageDownloadTokens: uuidv4() },
      },
    });

    const qrUrl = `https://firebasestorage.googleapis.com/v0/b/${
      process.env.FIREBASE_STORAGE_BUCKET
    }/o/${encodeURIComponent(fileName)}?alt=media`;

    // 9. Respond with complete information
    res.json({
      success: true,
      txHash: result.txHash,
      tokenId: result.tokenId,
      tokenURI,
      qrUrl,
      ipfsHash: tokenURI.replace('ipfs://', ''),
      metadata,
      payload: securePayload
    });

  } catch (err) {
    console.error("Mint error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// Alternative: If you want to keep the original function that accepts tokenURI directly
// export const mintPassportWithExistingURI = async (req, res) => {
//   try {
//     const { userId, userWallet, tokenURI } = req.body;

//     if (!userId || !userWallet || !tokenURI) {
//       return res.status(400).json({ error: "userId, userWallet, and tokenURI are required" });
//     }

//     // 1. Mint on blockchain
//     const result = await mintPassportOnChain(userWallet, tokenURI);

//     // 2. Secure payload
//     const expiry = Date.now() + 1000 * 60 * 60 * 24 * 30; // valid 30 days
//     const payload = { tokenId: result.tokenId, userId, expiry };

//     // 3. Sign payload (backend's private key)
//     const privateKey = process.env.PRIVATE_KEY;
//     const signer = new ethers.Wallet(privateKey);
//     const message = JSON.stringify(payload);
//     const signature = await signer.signMessage(message);

//     const securePayload = { ...payload, signature };

//     // 4. Generate QR
//     const qrData = JSON.stringify(securePayload);
//     const qrImageBuffer = await QRCode.toBuffer(qrData);

//     // 5. Upload QR to Firebase Storage
//     const bucket = getStorage().bucket(process.env.FIREBASE_STORAGE_BUCKET);
//     const fileName = `qrcodes/${userId}_${result.tokenId}_${uuidv4()}.png`;
//     const file = bucket.file(fileName);

//     await file.save(qrImageBuffer, {
//       metadata: {
//         contentType: "image/png",
//         metadata: { firebaseStorageDownloadTokens: uuidv4() },
//       },
//     });

//     const qrUrl = `https://firebasestorage.googleapis.com/v0/b/${
//       process.env.FIREBASE_STORAGE_BUCKET
//     }/o/${encodeURIComponent(fileName)}?alt=media`;

//     // 6. Respond
//     res.json({
//       success: true,
//       txHash: result.txHash,
//       tokenId: result.tokenId,
//       qrUrl,
//       payload: securePayload,
//     });
//   } catch (err) {
//     console.error("Mint error:", err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// };
export const mintPassportWithExistingURI = async (req, res) => {
  try {
    const { userId, userWallet, tokenURI } = req.body;

    if (!userId || !userWallet || !tokenURI) {
      return res.status(400).json({ error: "userId, userWallet, and tokenURI are required" });
    }

    // 1. Mint on blockchain
    const result = await mintPassportOnChain(userWallet, tokenURI);

    // 2. Secure payload
    const expiry = Date.now() + 1000 * 60 * 60 * 24 * 30; // valid 30 days
    const payload = { tokenId: result.tokenId, userId, expiry };

    // 3. Sign payload (backend's private key)
    const privateKey = process.env.PRIVATE_KEY;
    const signer = new ethers.Wallet(privateKey);
    const message = JSON.stringify(payload);
    const signature = await signer.signMessage(message);

    const securePayload = { ...payload, signature };

    // 4. Generate QR
    const qrData = JSON.stringify(securePayload);
    const qrImageBuffer = await QRCode.toBuffer(qrData);
    
    // 5. Convert QR buffer to base64 data URL (instead of uploading to Firebase)
    const qrBase64 = qrImageBuffer.toString('base64');
    const qrDataUrl = `data:image/png;base64,${qrBase64}`;

    /// 6. Prepare response object
    const responseData = {
      success: true,
      txHash: result.txHash,
      tokenId: result.tokenId,
      tokenURI,
      qrUrl: qrDataUrl,
      payload: securePayload,
      createdAt: new Date(),
    };

     // 7. Save response to Firestore under collection `NFT-minting-data`
    await db.collection("NFT-minting-data").add(responseData);

    // 8. Send response back
    res.json(responseData);
    
  } catch (err) {
    console.error("Mint error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};
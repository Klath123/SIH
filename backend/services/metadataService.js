import { createHash } from 'crypto';

export const generatePassportMetadata = (userData, imageIpfsUri = null) => {
  // Use predefined image if no custom image provided
  const imageUri = imageIpfsUri || `ipfs://${process.env.PASSPORT_IMAGE_CID}`;
  
  const baseMetadata = {
    name: `${userData.fullName} - Government Digital ID`,
    description: "Government Verified Digital Identity Passport",
    image: imageUri,
    external_url: "https://government-passport.example.com",
    attributes: []
  };

  // Add identity attributes
  const attributes = [
    { trait_type: "Full Name", value: userData.fullName },
    { trait_type: "Date of Birth", value: userData.dob },
    { trait_type: "Document Type", value: userData.docType || "Passport" },
    { trait_type: "Document Number", value: userData.docNumber },
    { trait_type: "Issue Date", value: userData.issueDate },
    { trait_type: "Expiry Date", value: userData.expiryDate },
    { trait_type: "Nationality", value: userData.nationality },
    { trait_type: "Gender", value: userData.gender },
    { trait_type: "Issuing Authority", value: userData.issuingAuthority || "Government" },
    { trait_type: "Verification Status", value: "Verified" },
    { trait_type: "Verification Level", value: "Level 3" }
  ];

  // Add optional fields if they exist
  if (userData.email) {
    attributes.push({ trait_type: "Email", value: userData.email });
  }

  if (userData.placeOfBirth) {
    attributes.push({ trait_type: "Place of Birth", value: userData.placeOfBirth });
  }

  baseMetadata.attributes = attributes;

  return baseMetadata;
};


// For sensitive data, create a hash-based metadata
export const generateHashedMetadata = (userData, imageIpfsUri) => {
  // Create hashes of sensitive data instead of storing plain text
  const hashData = (data) => createHash('sha256').update(data).digest('hex');

  return {
    name: "Government Digital Identity Passport",
    description: "Secure government-issued digital identity",
    image: imageIpfsUri,
    external_url: "https://government-passport.example.com",
    attributes: [
      { trait_type: "Name Hash", value: hashData(userData.fullName) },
      { trait_type: "DOB Hash", value: hashData(userData.dob) },
      { trait_type: "Document Hash", value: hashData(userData.docNumber) },
      { trait_type: "Verification Status", value: "Verified" },
      { trait_type: "Issuing Authority", value: userData.issuingAuthority || "Government" },
      { trait_type: "User ID", value: userData.userId }
    ]
  };
};

// Optional: Async version if you need to handle async operations
export const generatePassportMetadataAsync = async (userData, imageIpfsUri) => {
  return generatePassportMetadata(userData, imageIpfsUri);
};

export const generateHashedMetadataAsync = async (userData, imageIpfsUri) => {
  return generateHashedMetadata(userData, imageIpfsUri);
};
import pinataSDK from '@pinata/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pinata = new pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_SECRET_API_KEY
);

export const uploadJSONToIPFS = async (metadata) => {
  try {
    const options = {
      pinataMetadata: {
        name: `passport-metadata-${Date.now()}`,
      },
      pinataOptions: {
        cidVersion: 0
      }
    };

    const result = await pinata.pinJSONToIPFS(metadata, options);
    return `ipfs://${result.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading to Pinata:', error);
    throw error;
  }
};

export const uploadImageToIPFS = async (imageBuffer, fileName) => {
  try {
    const tempFilePath = path.join(__dirname, `temp-${fileName}`);
    fs.writeFileSync(tempFilePath, imageBuffer);

    const options = {
      pinataMetadata: {
        name: fileName,
      },
      pinataOptions: {
        cidVersion: 0
      }
    };

    const readableStream = fs.createReadStream(tempFilePath);
    const result = await pinata.pinFileToIPFS(readableStream, options);
    
    // Clean up temp file
    fs.unlinkSync(tempFilePath);
    
    return `ipfs://${result.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading image to Pinata:', error);
    throw error;
  }
};

export const testPinataConnection = async () => {
  try {
    const result = await pinata.testAuthentication();
    console.log('Pinata connection successful:', result);
    return result;
  } catch (error) {
    console.error('Pinata connection failed:', error);
    throw error;
  }
};
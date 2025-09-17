// backend/controllers/passportController.js
import QRCode from "qrcode";
import { getStorage } from "firebase-admin/storage";
import { v4 as uuidv4 } from "uuid";
import { mintPassportOnChain } from "../services/blockchain.js";
import { ethers } from "ethers";

// Mint + Generate Secure QR + Upload
export const mintPassport = async (req, res) => {
  try {
    const { userId, userWallet, tokenURI } = req.body;

    // 1. Mint on blockchain
    const result = await mintPassportOnChain(userWallet, tokenURI);

    // 2. Secure payload
    const expiry = Date.now() + 1000 * 60 * 60 * 24 * 30; // valid 30 days
    const payload = { tokenId: result.tokenId, userId, expiry };

    // 3. Sign payload (backend’s private key)
    const privateKey = process.env.PRIVATE_KEY;
    const signer = new ethers.Wallet(privateKey);
    const message = JSON.stringify(payload);
    const signature = await signer.signMessage(message);

    const securePayload = { ...payload, signature };

    // 4. Generate QR
    const qrData = JSON.stringify(securePayload);
    const qrImageBuffer = await QRCode.toBuffer(qrData);

    // 5. Upload QR to Firebase Storage
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

    // 6. Respond
    res.json({
      success: true,
      txHash: result.txHash,
      tokenId: result.tokenId,
      qrUrl,
      payload: securePayload, // useful for debugging
    });
  } catch (err) {
    console.error("Mint error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

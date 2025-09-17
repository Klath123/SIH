// backend/controllers/qrController.js
import { ethers } from "ethers";

export const verifyQr = async (req, res) => {
  try {
    const { tokenId, userId, expiry, signature } = req.body;

    if (Date.now() > expiry) {
      return res.status(400).json({ valid: false, reason: "QR expired" });
    }

    // Recreate original payload
    const message = JSON.stringify({ tokenId, userId, expiry });

    // Verify signature
    const backendAddress = new ethers.Wallet(process.env.PRIVATE_KEY).address;
    const recoveredAddress = ethers.verifyMessage(message, signature);

    if (recoveredAddress.toLowerCase() !== backendAddress.toLowerCase()) {
      return res.status(400).json({ valid: false, reason: "Invalid signature" });
    }

    // Optionally: also check blockchain ownerOf(tokenId) & Firestore validation here

    res.json({ valid: true, tokenId, userId });
  } catch (err) {
    console.error("Verify QR error:", err);
    res.status(500).json({ valid: false, error: err.message });
  }
};

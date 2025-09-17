import express from "express";
import { mintPassportOnChain } from "../services/blockchain.js"; // Changed import

const router = express.Router();

// Mint Passport
router.post("/mint", async (req, res) => {
  try {
    const { userWallet, tokenURI } = req.body;
    if (!userWallet) {
      return res.status(400).json({ error: "userWallet is required" });
    }

    const result = await mintPassportOnChain(userWallet, tokenURI); // Use the new function
    res.json(result);
  } catch (err) {
    console.error("mint error:", err);
    res.status(500).json({ error: err.message || String(err) });
  }
});

export default router;
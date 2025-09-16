const express = require("express");
const router = express.Router();
const { getDb, getBucket } = require("../services/firebase");

// POST /api/kyc
router.post("/", async (req, res) => {
  try {
    const { name, email, contact, docType, docUrl } = req.body;
    if (!name || !email || !contact || !docType || !docUrl) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const db = getDb();
    const userRef = db.collection("users").doc(email);
    await userRef.set({
      name, email, contact, docType, docUrl,
      isVerified: true,
      createdAt: new Date()
    });

    res.json({ success: true, isVerified: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;

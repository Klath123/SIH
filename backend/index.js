// backend/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ethers } = require("ethers");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- simple config / sanity checks ---
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY; // server key that will call mintPassport
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

if (!RPC_URL || !PRIVATE_KEY || !CONTRACT_ADDRESS) {
  console.warn("⚠️ Missing env vars. Make sure RPC_URL, PRIVATE_KEY and CONTRACT_ADDRESS are set in .env");
}

// --- Minimal ABI (human-readable) ---
const abi = [
  "function mintPassport(address to, string tokenURI) external returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event VisitRecorded(uint256 indexed tokenId, string place, uint256 timestamp)"
];

let contract;
try {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);
} catch (err) {
  console.error("Error creating contract instance:", err.message || err);
}

// health
app.get("/", (req, res) => {
  res.send({ ok: true, message: "Passport backend running" });
});

/**
 * POST /api/passport/mint
 * body: { userId?: string, userWallet: "0x...", tokenURI?: "ipfs://..." }
 * Returns: { success, tokenId, txHash }
 */
app.post("/api/passport/mint", async (req, res) => {
  try {
    if (!contract) return res.status(500).json({ error: "Contract not initialized on server" });

    const { userId, userWallet, tokenURI } = req.body;
    if (!userWallet) return res.status(400).json({ error: "userWallet is required" });

    // OPTIONAL: here you'd validate that the user passed KYC in your DB.
    // e.g. if (!isKycDone(userId)) return res.status(403).json({ error: "KYC required" });

    // send mint tx
    const tx = await contract.mintPassport(userWallet, tokenURI || "");
    // wait for inclusion
    const receipt = await tx.wait();

    // parse logs to find Transfer (mint) event and tokenId
    let tokenId = null;
    for (const log of receipt.logs) {
      try {
        const parsed = contract.interface.parseLog(log);
        if (parsed && parsed.name === "Transfer") {
          // Transfer(from, to, tokenId)
          const from = parsed.args[0];
          const to = parsed.args[1];
          const tid = parsed.args[2];
          // minted tokens have from == zero address
          if (String(from).toLowerCase() === "0x0000000000000000000000000000000000000000") {
            tokenId = tid.toString();
            break;
          }
        }
      } catch (e) {
        // ignore logs that aren't from this contract interface
      }
    }

    // respond
    return res.json({
      success: true,
      txHash: receipt.transactionHash || tx.hash,
      tokenId: tokenId,
      rawReceipt: {
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed?.toString?.() || receipt.gasUsed
      }
    });
  } catch (err) {
    console.error("mint error:", err);
    return res.status(500).json({ error: err.message || String(err) });
  }
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));

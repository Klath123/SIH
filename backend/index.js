import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passportRoutes from "./routes/passportRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// health check
app.get("/", (req, res) => {
  res.send({ ok: true, message: "Passport backend running" });
});

// routes
app.use("/api/passport", passportRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));


/**
 check nft making
bash:

 curl -X POST http://localhost:5000/api/passport/mint \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "demoUser1",
    "userWallet": "0xab8483f64d9c6d1ecf9b849ae677dd3315835cb2",
    "tokenURI": "ipfs://QmYwAPJzv5CZsnAzt8auV2VZ9d8dZ3M4T7Cj5tP4gF2kQp"
  }'


  output:

  {
  "success": true,
  "txHash": "0x2822e41d1369415f74873c6d0b7c095732a164472e36bc9c001fc48008d13750",
  "tokenId": "3",
  "rawReceipt": {
    "blockNumber": 9217172,
    "gasUsed": "146854"
  }
}

 */
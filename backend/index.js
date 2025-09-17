import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passportRoutes from "./routes/passportRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import qrRoutes from "./routes/qrRoutes.js";
import passportQRRoutes from "./routes/passportQRRoutes.js";
import ipfsRoutes from "./routes/ipfsRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// health check
app.get("/", (req, res) => {
  res.send({ ok: true, message: "Passport backend running" });
});

// routes
app.use("/api/passport", passportRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/qr", qrRoutes);
app.use("/api/passport", passportQRRoutes);
app.use("/api/ipfs", ipfsRoutes);



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
    "tokenURI": "ipfs://bafkreiga5uml4r5bdgttk2sdx6qqnucmdxqe6kbsleczhd7cuwtm57z54q"
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








check register:
curl -X POST http://localhost:5000/api/auth/register \
 -H "Content-Type: application/json" \
 -d '{"userId":"demoUser1"}'

 output:
 {"success":true,"userId":"demoUser1","walletAddress":"0x9eBD6734e31a46A6feDBC336a9E85F17469cbA9c","isValidated":true} 


 check login:
 curl -X POST http://localhost:5000/api/auth/login \
 -H "Content-Type: application/json" \
 -d '{"userId":"demoUser1"}'

 output:
 {"success":true,"userId":"demoUser1","walletAddress":"0x9eBD6734e31a46A6feDBC336a9E85

 */
import express from "express";
import { mintPassport, mintPassportWithExistingURI } from "../controllers/passportController.js";

const router = express.Router();

// Mint Passport + QR + Firebase
router.post("/mint-qr", mintPassport);

// Alternative: Mint with existing IPFS URI
router.post("/mint-qr-existing", mintPassportWithExistingURI);

export default router;

import express from "express";
import { mintPassport } from "../controllers/passportController.js";

const router = express.Router();

// Mint Passport + QR + Firebase
router.post("/mint-qr", mintPassport);

export default router;

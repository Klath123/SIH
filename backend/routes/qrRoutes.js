// backend/routes/qrRoutes.js
import express from "express";
import { verifyQr } from "../controllers/qrController.js";

const router = express.Router();

router.post("/verify", verifyQr);

export default router;

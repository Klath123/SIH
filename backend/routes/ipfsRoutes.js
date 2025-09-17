import express from 'express';
import { uploadPassportToIPFS, testIPFSConnection } from '../controllers/ipfsController.js';

const router = express.Router();

router.post('/upload-metadata', uploadPassportToIPFS);
router.get('/test-connection', testIPFSConnection);

export default router;
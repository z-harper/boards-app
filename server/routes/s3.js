import express from 'express';
import {uploadToS3} from '../controllers/s3.js';

const router = express.Router();

router.get('/get-url', uploadToS3);

export default router;
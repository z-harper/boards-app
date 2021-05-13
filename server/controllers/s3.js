import express from 'express';
import {generateUploadUrl} from '../bin/s3-config.js';

const router = express.Router();

export const uploadToS3 = async (req, res) => {
  const s3Url = await generateUploadUrl();  // generate s3 url
  res.send({s3Url});
}


export default router;

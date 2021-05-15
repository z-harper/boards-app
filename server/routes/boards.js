import express from 'express';
import { createBoard, getBoard, createPost } from '../controllers/boards.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create', auth, createBoard);
router.get('/get-board', auth, getBoard);
router.post('/post', auth, createPost);

export default router;
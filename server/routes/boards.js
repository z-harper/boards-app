import express from 'express';
import { createBoard, getBoard } from '../controllers/boards.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create', auth, createBoard);
router.get('/get-board', auth, getBoard);

export default router;
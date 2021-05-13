import express from 'express';
import { createBoard } from '../controllers/boards.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create', auth, createBoard);

export default router;
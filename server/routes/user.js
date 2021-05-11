import express from 'express';
import { getUser, searchEmail } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/get-user', auth, getUser);
router.get('/search-email', auth, searchEmail);

export default router;
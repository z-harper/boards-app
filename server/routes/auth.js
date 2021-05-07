import express from 'express';
import { register, signIn, logout } from '../controllers/auth.js';

const router = express.Router();

router.post('/sign-in', signIn);
router.post('/register', register);
router.get('/logout', logout);

export default router;
import express from 'express';
import { addFriend, getUser, searchEmail } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/get-user', auth, getUser);
router.get('/search-email', auth, searchEmail);
router.post('/add-friend', auth, addFriend);

export default router;
import express from 'express';
import User from '../models/user.js';

const router = express.Router();

export const getUser = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    res.json({
      firstName: user.firstName, 
      lastName: user.lastName,
      email: user.email
    })
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

export default router;
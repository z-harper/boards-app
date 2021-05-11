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

export const searchEmail = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) 
      return res.status(400).json({ errorMessage: 'Please enter an email address to be searched.' });
    const searchResult = await User.findOne({ email });
    if (!searchResult)
      return res.json({ errorMessage: 'Email not found.' });
    res.json({
      firstName: searchResult.firstName, 
      lastName: searchResult.lastName,
      email: searchResult.email
    })
  } catch (err) {
    console.err(err);
    res.status(500).send();
  }
}

export default router;
import express from 'express';
import User from '../models/user.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validate } from '../bin/pw-validate.js';

const router = express.Router();

export const register = async (req, res) => {
  try {
    const {firstName, lastName, email, password, passwordVerify} = req.body;
    // Validation
    if (!firstName || !lastName || !email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields.' });
    if (!validate(password))
      return res
          .status(400)
          .json({ errorMessage: 'Please enter a password that meets all requirements.' });
    if (password !== passwordVerify)
    return res
      .status(400)
      .json({ errorMessage: 'Please enter the same password twice.' });
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ errorMessage: 'An account with this email already exists.' });
    // If validation passes
    // Hash password
    const salt = await bcryptjs.genSalt();
    const passwordHash = await bcryptjs.hash(password, salt);
    // Save new user account to DB
    const newUser = new User({ firstName, lastName, email, passwordHash });
    const savedUser = await newUser.save();
    // Log user in with their created credentials 
    // Create token
    const token = jwt.sign({ user: savedUser._id }, process.env.JWT_SECRET)
    // Send token as http-only cookie
    res.cookie('token', token, { httpOnly: true, }).send()
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

export const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    // Validation
    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields.' });
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res
        .status(401)
        .json({ errorMessage: 'Incorrect email or password entered.' });
    const passwordCorrect = await bcryptjs.compare(password, existingUser.passwordHash);
    if (!passwordCorrect)
      return res
        .status(401)
        .json({ errorMessage: 'Incorrect email or password entered.' });
    // If validation passes, log user in with their created credentials 
    // Create token
    const token = jwt.sign({ user: existingUser._id }, process.env.JWT_SECRET)
    // Send token as http-only cookie
    res.cookie('token', token, { httpOnly: true, }).send()
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}
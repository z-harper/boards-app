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
      email: user.email,
      friends: user?.friends,
      boards: user?.boards,
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
    console.log(err);
    res.status(500).send();
  }
}

export const addFriend = async (req, res) => {
  try {
    const {user, friend} = req.body;
    // Get user info from db with password
    const userInfo = await User.findOne({ email: user });
    // check if email already in friends list 
    if (userInfo.friends.some(currentFriend => currentFriend.email === friend.email))
      return res.json({ errorMessage: 'Email already in friends list.' });
    // make a copy of user's friends array and add new entry
    let currentFriends = [...userInfo.friends, friend];
    // update the user's friends list with the new email
    const updatedUser = await User.findOneAndUpdate(
      { email: user }, 
      {friends: currentFriends},
      {
        new: true,
        upsert: true // Make this update into an upsert);
      }
    )
    // send back updated friends list
    res.json(updatedUser.friends);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
}

export default router;
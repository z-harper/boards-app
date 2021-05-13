import express from 'express';
import Board from '../models/board.js';

const router = express.Router();

export const createBoard = async (req, res) => {
  try {
    const {name, textDesc, imgUpload, addToProjects, inviteFriends, inviteGroups, creator} = req.body;
    if (!name)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter a name for the Board.' });
    const newBoard = new Board({ 
      name, 
      creator,
      textDesc,
      imgUrl: imgUpload,
      members: [...inviteFriends.map(friend => friend.email), creator],
      projects: addToProjects,
      groups: inviteGroups,
    });
    res.json(newBoard);
    // Save new board to DB
    const savedBoard = await newBoard.save();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

export default router;

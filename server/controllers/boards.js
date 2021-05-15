import express from 'express';
import Board from '../models/board.js';
import User from '../models/user.js';

const router = express.Router();

export const createBoard = async (req, res) => {
  try {
    const {name, textDesc, imgUpload, addToProjects, inviteFriends, inviteGroups, creator} = req.body;
    if (!name)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter a name for the Board.' });
    // combine creator and friends emails into one array
    const members = [...inviteFriends.map(friend => friend.email), creator];
    const newBoard = new Board({ 
      name, 
      creator,
      textDesc,
      imgUrl: imgUpload,
      members,
      projects: addToProjects,
      groups: inviteGroups,
    });
    // Save new board to DB
    const savedBoard = await newBoard.save();
    // save a reference to board in each member document
    for (const memberEmail of members) {
      const member = await User.findOne({ email: memberEmail });
      let currentBoards = [
        ...member.boards, 
        {
          boardName: savedBoard.name, 
          lastActive: savedBoard.lastActive,
          boardId: savedBoard._id,
          isCreator: memberEmail === creator,
        }
      ];
      // update the user's boards list with the new board
      await User.findOneAndUpdate(
        { email: memberEmail }, 
        {boards: currentBoards},
        {
          new: true,
          upsert: true // Make this update into an upsert);
        }
      );
    }
    // return the new board 
    res.json(savedBoard);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

export const getBoard = async (req, res) => {
  try {
    const { boardId } = req.query;
    const board = await Board.findOne({ _id: boardId });
    if (!board)
      return res.json({ errorMessage: 'Board not found.' });
    res.json(board);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

export const createPost = async (req, res) => {
  try {
    const {boardId, author, textDesc, imgUrl} = req.body;
    const board = await Board.findOne({ _id: boardId });
    if (!board)
      return res.json({ errorMessage: 'Board not found.' });
  let currentPosts = [...board.posts, {
    author,
    textDesc,
    imgUrl,
    createdAt: new Date(),
  }]
  const updatedBoard = await Board.findOneAndUpdate(
    { _id: boardId }, 
    {posts: currentPosts},
    {
      new: true,
      upsert: true // Make this update into an upsert);
    }
  )
  res.json(updatedBoard.posts);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

export default router;

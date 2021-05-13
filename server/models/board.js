import mongoose from 'mongoose';

const boardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  textDesc: {
    type: String
  },
  imgUrl: {
    type: String
  },
  members: {
    type: Array,
    default: []
  },
  projects: {
    type: Array,
    default: []
  },
  groups: {
    type: Array,
    default: []
  },
  posts: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  lastActive: {
    type: Date,
    default: new Date()
  }
})

const Board = mongoose.model('board', boardSchema);

export default Board;
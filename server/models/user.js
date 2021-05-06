import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  lastActive: {
    type: Date,
    default: new Date()
  },
  boards: {
    type: Array,
    default: []
  },
  groups: {
    type: Array,
    default: []
  }
})

const User = mongoose.model('user', userSchema);

export default User;
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import s3Routes from './routes/s3.js';
import boardsRoutes from './routes/boards.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MDB_CONNECT_URL = process.env.MDB_CONNECT_URL;

// Middleware
app.use(express.json()); 
app.use(cookieParser()); 
app.use(cors({
  origin: ["http://localhost:3000"], 
  credentials: true  
}));

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// Connect to Mongo. If successful, connect to server
mongoose.connect(MDB_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Connected to DB. Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// Routes 
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/s3', s3Routes);
app.use('/boards', boardsRoutes);
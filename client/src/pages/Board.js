import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import BoardPgContent from '../components/BoardPgContent';
import BoardPgPosts from '../components/BoardPgPosts';

const Board = (props) => {
  const [currentBoard, setCurrentBoard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBoard = async () => {
      setIsLoading(true);
      try {
        const board = await axios.get('http://localhost:8080/boards/get-board', {
          params: {boardId: props.match.params.id}
        });
        setCurrentBoard(board.data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        window.alert(err?.response?.data?.errorMessage);
      }
    }
    getBoard();
  }, [])

  if (isLoading) {
    return (
      <div>loading</div>
    )
  }
  
  return (
    <div>
      <Navbar fromLoc={'home-page'} />
      <BoardPgContent currentBoard={currentBoard} />
      <BoardPgPosts currentPosts={currentBoard.posts} />
    </div>
  )
}

export default Board

import Navbar from '../components/Navbar';
import HomeNav from '../components/HomeNav';
import CreateBoardForm from '../components/CreateBoardForm';

const CreateBoard = () => {
  return (
    <>
      <Navbar fromLoc={'home-page'} />
      <HomeNav />
      <CreateBoardForm />
    </>
  )
}

export default CreateBoard

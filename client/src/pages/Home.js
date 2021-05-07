import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Home = () => {
  const currentUser = useSelector(state => state.auth);

  return (
    <>
      <Navbar fromLoc={'home-page'} />
      hello in home
      <h3>{currentUser.firstName}</h3>
    </>
  )
}

export default Home

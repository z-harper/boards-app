import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentUser } from '../redux/ducks/user';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loggedInStatus = useSelector(state => state.auth);
  const currentUser = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const user = await axios.get('http://localhost:8080/user/get-user', {
          params: {
            email: loggedInStatus.email
          }
        });
        dispatch(setCurrentUser(user.data));
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        window.alert(err?.response?.data?.errorMessage);
      }
    }
    getUser();
  }, [])

  if (isLoading) {
    return (
      <div>loading</div>
    )
  }

  if (!loggedInStatus.loggedIn) {
    history.push('/auth');
  }

  return (
    <div>
      <Navbar fromLoc={'home-page'} />
      hello in home
      <h3>{currentUser.firstName}</h3>
      <h3>{currentUser.lastName}</h3>
      <h3>{currentUser.email}</h3>
    </div>
  )
}

export default Home

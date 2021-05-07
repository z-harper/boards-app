import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/ducks/user';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loggedInEmail = useSelector(state => state.auth);
  const currentUser = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        console.log('this is loggedInEmail', loggedInEmail);
        const user = await axios.get('http://localhost:8080/user/get-user', {
          params: {
            email: loggedInEmail.email
          }
        });
        dispatch(getCurrentUser(user.data));
        setIsLoading(false);
        console.log('this is user: ', currentUser);
      } catch (err) {
        console.error(err);
        window.alert(err?.response?.data?.errorMessage);
      }
    }
    getUser();
  }, [currentUser.email, dispatch])

  if (isLoading) {
    return (
      <div>loading</div>
    )
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

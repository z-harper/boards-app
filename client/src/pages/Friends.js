import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import HomeNav from '../components/HomeNav';

const Friends = () => {
  const user = useSelector(state => state.user);

  return (
    <div>
      <Navbar fromLoc={'home-page'} />
      <HomeNav />
      <h1>hello from friends</h1>
      {user.friends.map(friend => {
        return (
          <div key={friend.email}>
            <p>{friend.firstName}</p>
            <p>{friend.lastName}</p>
            <p>{friend.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Friends

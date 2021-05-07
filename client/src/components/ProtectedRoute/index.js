import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, ...rest }) => {
  const currentUser = useSelector(state => state.auth);

  return (
    <Route {...rest} render={() => {
      return currentUser.loggedIn === true 
        ? children 
        : <Redirect to='/auth' />
    }} />
  )
}

export default ProtectedRoute

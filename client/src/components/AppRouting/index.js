import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import ProtectedRoute from '../ProtectedRoute';
import Auth from '../../pages/Auth';
import Home from '../../pages/Home';

const AppRouting = () => {
  return (
    <Router>
      <Switch>          
        <Route path='/' exact component={LandingPage} />
        <Route path='/auth' component={Auth} />
        <ProtectedRoute path='/home'><Home /></ProtectedRoute>
        {/* <Route path='/home' component={Home} /> */}
      </Switch>
    </Router>
  )
}

export default AppRouting

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import Auth from '../../pages/Auth';

const AppRouting = () => {
  return (
    <Router>
      <Switch>          
        <Route path='/' exact component={LandingPage} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </Router>
  )
}

export default AppRouting

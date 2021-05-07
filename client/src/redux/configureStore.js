import { combineReducers, createStore } from 'redux';
import authReducer from './ducks/auth';
import userReducer from './ducks/user';

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer
})

const store = createStore(reducer);

export default store;
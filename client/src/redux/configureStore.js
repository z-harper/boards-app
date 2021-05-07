import { combineReducers, createStore } from 'redux';
import authReducer from './ducks/auth';

const reducer = combineReducers({
  auth: authReducer
})

const store = createStore(reducer);

export default store;
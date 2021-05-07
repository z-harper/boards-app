// Actions
const SIGN_IN_USER = 'signInUser';
const LOGOUT_USER = 'logoutUser';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  loggedIn: false
}

// Reducer
export default function authReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state, 
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        loggedIn: true
      };
    case LOGOUT_USER:
      return {...state, INITIAL_STATE};
    default:
      return state;
  }
}

// Action creators
export const signInUser = (data) => ({
  type: SIGN_IN_USER,
  payload: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email
  }
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {}
});
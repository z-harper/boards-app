// Actions
const SIGN_IN_USER = 'signInUser';
const LOGOUT_USER = 'logoutUser';

const INITIAL_STATE = {
  email: '',
  loggedIn: false
}

// Reducer
export default function authReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        email: action.payload.email,
        loggedIn: true
      };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Action creators
export const signInUser = (email) => ({
    type: SIGN_IN_USER,
    payload: {
      email
    }
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {}
});
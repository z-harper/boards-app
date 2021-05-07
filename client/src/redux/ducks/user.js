// Actions
const GET_CURRENT_USER = 'getCurrentUser';
const CLEAR_CURRENT_USER = 'clearCurrentUser';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
}

// Reducer
export default function userReducer(state={}, action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email
      };
    case CLEAR_CURRENT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Action Creators
export const getCurrentUser = (data) => ({
  type: GET_CURRENT_USER,
  payload: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email
  }
});

export const clearCurrentUser  = () => ({
  type: CLEAR_CURRENT_USER,
  payload: {}
})
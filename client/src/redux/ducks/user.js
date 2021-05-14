// Actions
const SET_CURRENT_USER = 'setCurrentUser';
const CLEAR_CURRENT_USER = 'clearCurrentUser';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  friends: [],
  boards: [],
}

// Reducer
export default function userReducer(state={}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        friends: action.payload.friends,
        boards: action.payload.boards,
      };
    case CLEAR_CURRENT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Action Creators
export const setCurrentUser = (data) => ({
  type: SET_CURRENT_USER,
  payload: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    friends: data?.friends,
    boards: data?.boards,
  }
});

export const clearCurrentUser  = () => ({
  type: CLEAR_CURRENT_USER,
  payload: {}
})
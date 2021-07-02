import {
  FETCH_SESSIONS,
  CREATE_SESSION,
  DELETE_SESSION,
} from "../constants/actionTypes";

export const sessionReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      return action.payload;
    case CREATE_SESSION:
      return [...state, action.payload];
    case DELETE_SESSION:
      return state.filter((session) => session._id !== action.payload);
    default:
      return state;
  }
};

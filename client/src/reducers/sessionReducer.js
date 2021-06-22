export const sessionReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SESSIONS":
      return action.payload;
    case "CREATE_SESSION":
      return [...state, action.payload];
    default:
      return state;
  }
};

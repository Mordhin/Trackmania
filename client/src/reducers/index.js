import { combineReducers } from "redux";

import { sessionReducer } from "./sessionReducer";
import { authReducer } from "./authReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  sessions: sessionReducer,
  auth: authReducer,
  form: formReducer,
});

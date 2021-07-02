import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

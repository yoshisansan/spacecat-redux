import React from "react";
import { render } from "react-dom";
import './index.css';

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

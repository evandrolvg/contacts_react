import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import contactReducer from "./reducers/contactReducer";
import { Provider } from "react-redux";

let initialState = [];

if (localStorage.getItem("contacts") === null)
  localStorage.setItem("contacts", JSON.stringify(initialState));
else initialState = JSON.parse(localStorage.getItem("contacts"));

const store = createStore(contactReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

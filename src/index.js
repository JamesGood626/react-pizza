import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { fetchCsrfToken } from "./utils";
import "./base.css";

axios.defaults.withCredentials = true;
fetchCsrfToken();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

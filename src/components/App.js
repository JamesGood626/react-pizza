import React, { useEffect } from "react";
import axios from "axios";
import S from "../utils";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Pizzas from "./pages/pizza";
import Toppings from "./pages/toppings";
import Nav from "./shared/nav";

// axios.defaults.withCredentials = true;

function App(props) {
  //   useEffect(() => {
  //     async function fetchCsrfToken() {
  //       const {
  //         data: { csrf_token }
  //       } = await axios.get("http://localhost:4000/api/csrf");
  //       console.log("Got the csrf token: ", csrf_token);
  //       axios.defaults.headers.common["X-CSRF-TOKEN"] = csrf_token;
  //     }
  //     fetchCsrfToken();
  //   }, []);

  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/pizzas" component={Pizzas} />
      <Route path="/toppings" component={Toppings} />
    </Router>
  );
}

export default App;

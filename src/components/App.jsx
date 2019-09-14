import React, { useEffect } from "react";
import axios from "axios";
import S from "../utils";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/home";
// import Signup from "./pages/signup";
// import Login from "./pages/login";
// import Pizzas from "./pages/pizza";
// import Toppings from "./pages/toppings";
import Nav from "./shared/nav";
import Routes from "./shared/routes";

// TODO:
// - Create some higher order function components to
//   control whether the user should be redirected to a different
//   page. (in the event that they navigate manually)
// - Create a function component which contains all the routes/logic
//   for determining which routes to display. (in /components/shared)

function App(props) {
  return (
    <Router>
      <Nav />
      <Routes />
      {/* <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/pizzas" component={Pizzas} />
      <Route path="/toppings" component={Toppings} /> */}
    </Router>
  );
}

export default App;

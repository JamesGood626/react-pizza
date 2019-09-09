import React from "react";
import S from "../utils";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Pizzas from "./pages/pizza";
import Toppings from "./pages/toppings";
import Nav from "./shared/nav";

function App(props) {
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

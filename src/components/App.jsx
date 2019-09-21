import React, { useEffect } from "react";
import axios from "axios";
import S from "../utils";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/home";
// import Signup from "./pages/signup";
// import Login from "./pages/login";
// import Pizzas from "./pages/pizza";
// import Toppings from "./pages/toppings";
import { useAuth } from "../hooks/queries/useAuth";
import Nav from "./shared/nav";
import Routes from "./shared/routes";

// TODO:
// - Create some higher order function components to
//   control whether the user should be redirected to a different
//   page. (in the event that they navigate manually)
// - Create a function component which contains all the routes/logic
//   for determining which routes to display. (in /components/shared)

function App(props) {
  const { authenticated, currentUser, userPermission } = useAuth();
  return (
    <Router>
      <Nav currentUser={currentUser} />
      <Routes authenticated={authenticated} userPermission={userPermission} />
    </Router>
  );
}

export default App;

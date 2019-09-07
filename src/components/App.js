import React from "react";
import S from "../utils";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Pizzas from "./pages/pizza";
import Toppings from "./pages/toppings";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/pizzas">Pizzas</Link>
            </li>
            <li>
              <Link to="/toppings">Toppings</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/pizzas" component={Pizzas} />
        <Route path="/toppings" component={Toppings} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Pizza from "../pages/pizza";
import Toppings from "../pages/toppings";
import { useAuth } from "../../hooks/queries/useAuth";

const authRules = {
  PIZZA_APPLICATION_MAKER: ["/pizza", "/toppings"],
  PIZZA_OPERATION_MANAGER: ["/toppings"],
  PIZZA_CHEF: ["/pizza"]
};

const routes = {
  "/pizza": <Route path="/pizza" component={Pizza} />,
  "/toppings": <Route path="/toppings" component={Toppings} />
};

// as per:
// @permissions %{
//   @create_pizza => [@pizza_application_maker, @pizza_chef],
//   @add_toppings => [@pizza_application_maker, @pizza_chef],
//   @list_pizzas => [@pizza_application_maker, @pizza_chef],
//   @delete_pizza => [@pizza_application_maker, @pizza_chef],
//   @create_topping => [@pizza_application_maker, @pizza_operation_manager],
//   @list_toppings => [@pizza_application_maker, @pizza_operation_manager],
//   @delete_topping => [@pizza_application_maker, @pizza_operation_manager]
// }

export default function Routes() {
  const { authenticated, currentUser, userPermission } = useAuth();

  if (!authenticated) {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </>
    );
  }

  if (authenticated) {
    return <>{authRules[userPermission].map(route => routes[route])}</>;
  }
}

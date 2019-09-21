import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import Home from "../pages/home";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Pizza from "../pages/pizza";
import Toppings from "../pages/toppings";

const PIZZA_ROUTE = "/pizza";
const TOPPINGS_ROUTE = "/toppings";

const authRules = {
  PIZZA_APPLICATION_MAKER: [PIZZA_ROUTE, TOPPINGS_ROUTE],
  PIZZA_OPERATION_MANAGER: [TOPPINGS_ROUTE],
  PIZZA_CHEF: [PIZZA_ROUTE]
};

const routes = {
  [PIZZA_ROUTE]: <Route path={PIZZA_ROUTE} component={Pizza} />,
  [TOPPINGS_ROUTE]: <Route path={TOPPINGS_ROUTE} component={Toppings} />
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

// TODO:
// AFTER signup/login is a success.
// Redirect to the default homepage for whatever
// the particular user permission/role permits.
// You can access state.auth.userPermission to check for which
// route to direct to via the rules below.
// Default redirect route after signup/login per permission:
// PIZZA_APPLICATION_MAKER -> /pizza
// PIZZA_CHEF -> /pizza
// PIZZA_OPERATION_MANAGER -> /toppings
// Using authRules and just picking off the first permitted route for that
// user in order to choose the default route. As seen in handleRedirect.

const handleRedirect = ({ pathname }, userPermission) =>
  pathname === "/signup" || pathname === "/login" ? (
    <Redirect to={authRules[userPermission][0]} />
  ) : null;

function Routes({ authenticated, userPermission, location }) {
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
    // If user is authenticated and the current path is /signup or /login,
    // then redirect to their default page.
    return (
      <>
        {handleRedirect(location, userPermission)}
        {authRules[userPermission].map(route => routes[route])}
      </>
    );
  }
}

export default withRouter(Routes);

import { SET_USER, LOGOUT_USER, SET_SIGNUP_ERROR } from "../actions/auth";
// import {helperFunction} from '../helpers'

// User Permissions
// @pizza_application_maker "PIZZA_APPLICATION_MAKER"
// @pizza_operations_manager "PIZZA_OPERATION_MANAGER"
// @pizza_chef "PIZZA_CHEF"
// @permissions %{
//   @create_pizza => [@pizza_application_maker, @pizza_chef],
//   @add_toppings => [@pizza_application_maker, @pizza_chef],
//   @list_pizzas => [@pizza_application_maker, @pizza_chef],
//   @delete_pizza => [@pizza_application_maker, @pizza_chef],
//   @create_topping => [@pizza_application_maker, @pizza_operation_manager],
//   @list_toppings => [@pizza_application_maker, @pizza_operation_manager],
//   @delete_topping => [@pizza_application_maker, @pizza_operation_manager]
// }
// Need to add user's permission to the authState...

const initialState = {
  authenticated: false,
  currentUser: null,
  userPermission: null,
  signupError: null
};

export default function authReducer(
  authState = initialState,
  { type, payload }
) {
  console.log(`authReducer -> type: ${type} AND payload: ${payload}`);
  if (type === SET_USER)
    return {
      ...authState,
      currentUser: payload.username,
      authenticated: true,
      userPermission: payload.permission
    };
  if (type === LOGOUT_USER) return initialState;
  if (type === SET_SIGNUP_ERROR)
    return { ...authState, signupError: payload.error };
  return authState;
}

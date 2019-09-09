import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import authReducer from "./authReducer";
import toppingsReducer from "./toppingsReducer";
import pizzaReducer from "./pizzaReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  toppings: toppingsReducer,
  pizza: pizzaReducer
});

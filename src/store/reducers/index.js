import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { toppingsReducer } from "./toppingsReducer";
import { pizzaReducer } from "./pizzaReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  toppings: toppingsReducer,
  pizza: pizzaReducer
});

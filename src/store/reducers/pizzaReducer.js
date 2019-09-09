import { SET_PIZZA } from "../actions/pizza";
// import {helperFunction} from '../helpers'

const initialState = {
  pizzas: []
};

export default function pizzaReducer(
  pizzaState = initialState,
  { type, payload }
) {
  if (type === SET_PIZZA) return { ...pizzaState, pizzas: payload.pizza };
  return pizzaState;
}

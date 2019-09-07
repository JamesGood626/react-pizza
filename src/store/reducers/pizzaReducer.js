import { LIST_PIZZA, SET_PIZZA } from "../actions/pizza";
// import {helperFunction} from '../helpers'

const initialState = {
  pizzas: []
};

export default function pizzaReducer(
  pizzaState = initialState,
  { type, payload }
) {
  if (type === LIST_PIZZA) return pizzaState;
  if (type === SET_PIZZA) return { ...pizzaState, pizzas: payload.pizza };
  return pizzaState;
}

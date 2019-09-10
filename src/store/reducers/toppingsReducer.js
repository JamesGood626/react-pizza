import { SET_TOPPINGS } from "../actions/toppings";
import { reduceToObj, mapIds } from "../helpers";

const initialState = {
  toppings: {},
  toppingIds: []
};

export default function toppingsReducer(
  toppingsState = initialState,
  { type, payload }
) {
  if (type === SET_TOPPINGS) return toppingsState;
  return toppingsState;
}

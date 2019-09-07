import { LIST_TOPPINGS } from "../actions/toppings";
// import {helperFunction} from '../helpers'

const initialState = {
  toppings: []
};

export default function toppingsReducer(
  toppingsState = initialState,
  { type, payload }
) {
  if (type === LIST_TOPPINGS) return toppingsState;
  return toppingsState;
}

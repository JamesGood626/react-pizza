import { SET_PIZZA, DELETE_PIZZA } from "../actions/pizza";
import { reduceToObj, mapIds, removeFromState } from "../helpers";

const initialState = {
  pizza: {},
  pizzaIds: []
};

const removeFromPizzaState = removeFromState("pizza", "pizzaIds");

export default function pizzaReducer(
  pizzaState = initialState,
  { type, payload }
) {
  if (type === SET_PIZZA)
    return {
      ...pizzaState,
      pizza: reduceToObj(payload.pizza),
      pizzaIds: mapIds(payload.pizza)
    };
  if (type === DELETE_PIZZA)
    return removeFromPizzaState(pizzaState, { id: payload.id });
  return pizzaState;
}

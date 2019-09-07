export const SET_TOPPINGS = "SET_TOPPINGS";

export const setToppings = ({ toppings }) => ({
  type: SET_TOPPINGS,
  payload: {
    toppings
  },
  meta: {
    trigger:
      "List of toppingss are set on the state after successful API request to GET /toppings"
  }
});

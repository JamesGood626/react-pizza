export const SET_PIZZA = "SET_PIZZA";
export const DELETE_PIZZA = "DELETE_PIZZA";

export const setPizza = ({ pizza }) => ({
  type: SET_PIZZA,
  payload: {
    pizza
  },
  meta: {
    trigger:
      "List of pizza are set on the state after successful API request to GET /pizza"
  }
});

export const deletePizza = ({ id }) => ({
  type: DELETE_PIZZA,
  payload: {
    id
  },
  meta: {
    trigger: "Pizza selected by user to be deleted from the backend"
  }
});

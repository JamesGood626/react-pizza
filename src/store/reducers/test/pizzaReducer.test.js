import pizzaReducer from "../pizzaReducer";
import { setPizza, deletePizza } from "../../actions/pizza";

const pizza = [
  { id: 1, name: "Pepperoni Pineapple" },
  { id: 2, name: "Cheese Olive" }
];

const initialState = {
  pizza: {},
  pizzaIds: []
};

const setPizzaState = {
  pizza: {
    1: { id: 1, name: "Pepperoni Pineapple" },
    2: { id: 2, name: "Cheese Olive" }
  },
  pizzaIds: [1, 2]
};

const deletedPizzaState = {
  pizza: {
    2: { id: 2, name: "Cheese Olive" }
  },
  pizzaIds: [2]
};

describe("pizzaReducer", () => {
  it("should return the initial state", () => {
    expect(pizzaReducer(undefined, {})).toEqual(initialState);
  });

  it("should set the pizza array on setPizza", () => {
    expect(pizzaReducer(undefined, setPizza({ pizza }))).toEqual(setPizzaState);
  });

  it("should clear the pizza from state on deletePizza", () => {
    expect(pizzaReducer(setPizzaState, deletePizza({ id: 1 }))).toEqual(
      deletedPizzaState
    );
  });
});

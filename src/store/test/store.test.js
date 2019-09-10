import axios from "axios";
import configureStore from "redux-mock-store";
import { rootReducer } from "../reducers";
import { apiMiddleware } from "../middleware/api";
import { signupPizzaChef } from "../../hooks/commands/useAuthActions";

const middlewares = [apiMiddleware];
const mockStore = configureStore(middlewares);

// import { render } from "react-testing-library";
// import { successfulDepositResponse } from "test_fixture_data"

// this adds custom jest matchers from jest-dom
// import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

jest.mock("axios");

const signupParams = { username: "bob", password: "testpassword" };

const signupAction = {
  type: "SET_USER",
  payload: { username: "bob" },
  meta: {
    trigger:
      "List of pizza are set on the state after successful API request to POST\n" +
      "      /api/signup_pizza_chef or /api/signup_pizza_ops_manager"
  }
};

test("Store receives SET_USER action type when signing up user", done => {
  const store = mockStore(rootReducer);
  signupPizzaChef(store.dispatch)(signupParams);
  setTimeout(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(signupAction);
    done();
  }, 0);
});

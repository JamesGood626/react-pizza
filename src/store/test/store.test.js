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

const loaderTrueAction = {
  type: "TOGGLE_LOADER",
  payload: { loaderVisible: true },
  meta: {
    trigger: "POST /signup_pizza_chef"
  }
};

const loaderFalseAction = {
  type: "TOGGLE_LOADER",
  payload: { loaderVisible: false },
  meta: {
    trigger: "POST /signup_pizza_chef"
  }
};

const signupAction = {
  type: "SET_USER",
  payload: { username: "bob", permission: "PIZZA_CHEF" },
  meta: {
    trigger:
      "List of pizza are set on the state after successful API request to POST\n" +
      "      /api/signup_pizza_chef or /api/signup_pizza_ops_manager"
  }
};

const logoutUserAction = {
  meta: {
    trigger: "Clear the username from state and reset authenticated to false"
  },
  payload: {},
  type: "LOGOUT_USER"
};

const signupErrorAction = {
  meta: { trigger: "Something went wrong while signing up the user" },
  payload: { error: ["That username is taken"] },
  type: "SET_SIGNUP_ERROR"
};

test("Store receives SET_USER action type when signing up user", done => {
  const store = mockStore(rootReducer);
  signupPizzaChef(store.dispatch)(signupParams);
  setTimeout(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(loaderTrueAction);
    expect(actions[1]).toEqual(loaderFalseAction);
    expect(actions[2]).toEqual(signupAction);
    done();
  }, 0);
});

test("Store receives SET_SIGNUP_ERROR action type when /api/signup_pizza_chef responds with error", done => {
  const store = mockStore(rootReducer);
  signupPizzaChef(store.dispatch)({ signupParams, fail: true });
  setTimeout(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(loaderTrueAction);
    expect(actions[1]).toEqual(loaderFalseAction);
    expect(actions[2]).toEqual(signupErrorAction);
    done();
  }, 0);
});

test("Store receives LOGOUT_USER action type when session is expired", done => {
  const store = mockStore(rootReducer);
  signupPizzaChef(store.dispatch)({ signupParams, expireSession: true });
  setTimeout(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(loaderTrueAction);
    expect(actions[1]).toEqual(loaderFalseAction);
    expect(actions[2]).toEqual(logoutUserAction);
    done();
  }, 0);
});

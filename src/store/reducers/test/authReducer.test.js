import authReducer from "../authReducer";
import { setUser, logoutUser } from "../../actions/auth";

const initialState = {
  authenticated: false,
  currentUser: null,
  userPermission: null,
  signupError: null
};

const setUserPayload = { username: "Bob", permission: "PIZZA_CHEF" };
const setUserState = {
  authenticated: true,
  currentUser: "Bob",
  userPermission: "PIZZA_CHEF",
  signupError: null
};

describe("authReducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should set the authenticated user", () => {
    expect(authReducer(undefined, setUser(setUserPayload))).toEqual(
      setUserState
    );
  });

  it("should clear the user from state on logout", () => {
    expect(authReducer(setUserState, logoutUser())).toEqual(initialState);
  });
});

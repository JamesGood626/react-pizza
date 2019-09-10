import authReducer from "../authReducer";
import { setUser, logoutUser } from "../../actions/auth";

const initialState = { authenticated: false, currentUser: null };
const setUserState = { authenticated: true, currentUser: "Bob" };

describe("authReducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should set the authenticated user", () => {
    expect(authReducer(undefined, setUser({ username: "Bob" }))).toEqual(
      setUserState
    );
  });

  it("should clear the user from state on logout", () => {
    expect(authReducer(setUserState, logoutUser())).toEqual(initialState);
  });
});

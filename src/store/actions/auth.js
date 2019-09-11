export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_SIGNUP_ERROR = "SET_SIGNUP_ERROR";

export const setUser = ({ username }) => ({
  type: SET_USER,
  payload: {
    username
  },
  meta: {
    trigger: `List of pizza are set on the state after successful API request to POST
      /api/signup_pizza_chef or /api/signup_pizza_ops_manager`
  }
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {},
  meta: {
    trigger: "Clear the username from state and reset authenticated to false"
  }
});

export const setSignupError = ({ error }) => ({
  type: SET_SIGNUP_ERROR,
  payload: { error },
  meta: {
    trigger: "Something went wrong while signing up the user"
  }
});

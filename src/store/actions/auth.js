export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";

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

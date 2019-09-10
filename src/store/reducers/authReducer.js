import { SET_USER, LOGOUT_USER } from "../actions/auth";
// import {helperFunction} from '../helpers'

const initialState = {
  authenticated: false,
  currentUser: null
};

export default function authReducer(
  authState = initialState,
  { type, payload }
) {
  console.log(`type: ${type} AND payload: ${payload}`);
  if (type === SET_USER)
    return { ...authState, currentUser: payload.username, authenticated: true };
  if (type === LOGOUT_USER) return initialState;
  return authState;
}

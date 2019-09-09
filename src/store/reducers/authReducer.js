import { SET_USER, LOGOUT_USER } from "../actions/auth";
// import {helperFunction} from '../helpers'

const initialState = {
  currentUser: null
};

export default function authReducer(
  authState = initialState,
  { type, payload }
) {
  console.log(`type: ${type} AND payload: ${payload}`);
  if (type === SET_USER) return authState;
  if (type === LOGOUT_USER) return authState;
  return authState;
}

import { LOGIN_USER, LOGOUT_USER } from "../actions/auth";
// import {helperFunction} from '../helpers'

const initialState = {
  currentUserId: null
};

export default function authReducer(
  authState = initialState,
  { type, payload }
) {
  if (type === LOGIN_USER) return authState;
  if (type === LOGOUT_USER) return authState;
  return authState;
}

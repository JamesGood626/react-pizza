import { TOGGLE_LOADER } from "../actions/ui";
// import {helperFunction} from '../helpers'

const initialState = {
  loading: false
};

export default function uiReducer(uiState = initialState, { type, payload }) {
  console.log("uiReducer payload: ", payload)
  if (type === TOGGLE_LOADER)
    return { ...uiState, loading: payload.loaderVisible };
  return uiState;
}

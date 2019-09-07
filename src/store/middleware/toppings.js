// import { SET_TOPPINGS } from "../actions/pizza";
// import {helperFunction} from '../helpers'

const toppingsMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);
};

export default toppingsMiddleware;

import { SET_PIZZA } from "../actions/pizza";
// import {helperFunction} from '../helpers'

const pizzaMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);
};

export default pizzaMiddleware;

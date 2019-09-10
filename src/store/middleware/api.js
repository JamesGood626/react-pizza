import axios from "axios";
import { API_REQUEST } from "../actions/api";
import { toggleLoader } from "../actions/ui";

const API_URL = "http://localhost:4000/api";

const makeRequest = ({ payload }, { method, url, onSuccess, onError }) => {
  if (method === "POST") {
    return axios
      .post(`${API_URL}${url}`, payload)
      .then(function(response) {
        console.log("post success response! ", response);
        onSuccess(response.data.data);
      })
      .catch(function(error) {
        // TODO: Determine appropriate error to set.
        onError(error);
      });
  }
};

export const apiMiddleware = ({ dispatch }) => next => action => {
  // TODO:
  // Need to look into redux-mock-store
  // because an undefined action is making it's way into this middleware
  // after the API_REQUEST action is dispatched.
  // HOWEVER, this is not the case when manually testing this in dev.
  if (action === undefined) return;

  console.log("WTF IS ACTION: ", action);
  if (action.type === API_REQUEST) {
    console.log("action in API_REQUEST middleware: ", action);
    // dispatch(
    //   toggleLoader({ loaderVisible: true, trigger: `${method} ${url}` })
    // );
    return makeRequest(action, action.meta);

    // fetch(API_URL + url, { method })
    //   .then(results => results.json())
    //   .then(response => {
    //     dispatch(toggleLoader({ loaderVisible: false }));
    //     onSuccess(response);
    //   })
    //   .catch(error => onError(error));
  }
  next(action);
};

import axios from "axios";
import { API_REQUEST } from "../actions/api";
import { toggleLoader } from "../actions/ui";

const API_URL = "http://localhost:4000/api";

const dispatchToggleLoader = (dispatch, bool, { method, url }) =>
  dispatch(toggleLoader({ loaderVisible: bool, trigger: `${method} ${url}` }));

const retrieveErrorMessageArr = error => {
  const { errors } = error.response.data.data.errors;
  return Object.keys(errors).flatMap(key => errors[key]);
};

const makeRequest = (
  dispatch,
  { payload },
  { method, url, onSuccess, onError }
) => {
  if (method === "POST") {
    // TODO: might break these out into individual functions as
    // postRequest, getRequest, etc... if generalizing it
    // via the method turns out to be a pain.
    dispatchToggleLoader(dispatch, true, { method, url });
    return axios
      .post(`${API_URL}${url}`, payload)
      .then(function(response) {
        console.log("post success response! ", response);
        dispatchToggleLoader(dispatch, false, { method, url });
        onSuccess(response.data.data);
      })
      .catch(function(error) {
        // TODO: Determine appropriate error to set.
        dispatchToggleLoader(dispatch, false, { method, url });
        console.dir(error);
        const result = retrieveErrorMessageArr(error);
        console.log("passing result to onError: ", onError);
        onError({ error: result });
      });
  }
};

export const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === API_REQUEST) {
    return makeRequest(dispatch, action, action.meta);
  }
  next(action);
};

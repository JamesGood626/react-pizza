import axios from "axios";
import { API_REQUEST } from "../actions/api";
import { toggleLoader } from "../actions/ui";

const API_URL = "http://localhost:4000/api";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    console.log("action in API_REQUEST middleware: ", action);
    const { payload } = action;
    const { method, url, onSuccess, onError } = action.meta;

    dispatch(
      toggleLoader({ loaderVisible: true, trigger: `${method} ${url}` })
    );

    // Set payload on the request.
    // axios[method]
    if (method === "POST") {
      axios
        .post(`${API_URL}${url}`, payload)
        .then(function(response) {
          console.log("success response! ", response);
          onSuccess(response.data.data);
        })
        .catch(function(error) {
          console.log("Error response! ", error);
          // onError
        });
    }

    // fetch(API_URL + url, { method })
    //   .then(results => results.json())
    //   .then(response => {
    //     dispatch(toggleLoader({ loaderVisible: false }));
    //     onSuccess(response);
    //   })
    //   .catch(error => onError(error));
  }
};

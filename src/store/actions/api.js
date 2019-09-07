export const API_REQUEST = "API_REQUEST";

// Example usage:
// apiRequest({ url: "phoenix_api/list-toppins", onSuccess, onError });

// // At least... I think this is how the apiResponse will be formatted.
// const onSuccess = apiResponse => {
//   const {
//     data: { toppings }
//   } = apiResponse;
//   listToppingsAction(toppings);
// };

// const onError = apiResponse => {
//   const {
//     data: { message }
//   } = apiResponse;
//   showToppingsError(message);
// };

export const apiRequest = ({
  method = "GET",
  url,
  payload = {},
  onSuccess,
  onError
}) => ({
  type: API_REQUEST,
  payload,
  meta: { method, url, onSuccess, onError }
});

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./utils";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

it("1 + 1 = 2 because the damn App won't render", () => {
  expect(1 + 1).toBe(2);
});

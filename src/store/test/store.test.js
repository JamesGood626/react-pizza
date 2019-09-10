import axios from "axios";
import store from "../index";

// import { render } from "react-testing-library";
// import { successfulDepositResponse } from "test_fixture_data"

// this adds custom jest matchers from jest-dom
// import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

jest.mock("axios");

const signupParams = {
  username: "test_user",
  password: "dfasmjfaklmsflka"
};

test("got the store", done => {
  // const { getByLabelText } = render(<Provider store={store}></Provider>);
  expect("BOom").toBe("BOom");
  done();
});

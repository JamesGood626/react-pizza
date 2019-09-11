// REMEMBER: the jest.mock/1 call inside of a test file must
// pass in an argument of a string that matches the name of the
// mocked file for that module. i.e. jest.mock("axios")
// If this file was named get_account_axios.js, then jest would never detect this
// mocked file.
// import { successfulDepositResponse } from "test_fixture_data";

const mockAxios = {
  create: () => mockAxios,
  post: (url, params) => {
    console.log("params in mock axios: ", params);
    if (params.fail) {
      return Promise.reject({
        response: {
          data: {
            data: {
              errors: {
                errors: ["That username is taken"]
              }
            }
          }
        }
      });
    }
    if (params.expireSession) {
      return Promise.reject({
        response: {
          data: {
            data: {
              message: "Invalid session"
            }
          }
        }
      });
    }
    if (url === "http://localhost:4000/api/signup_pizza_chef") {
      return Promise.resolve({
        // TODO: ...don't wrap the response data from the server in data
        data: {
          data: {
            message: "You've successfully signed up!",
            username: "bob",
            permission: "PIZZA_CHEF"
          }
        }
      });
    }
  },
  noPost: url => {
    return Promise.resolve({ data: { message: "Should never see this." } });
  }
};

// This is what is called a manual mock
// Documentation -> https://jestjs.io/docs/en/manual-mocks
module.exports = mockAxios;

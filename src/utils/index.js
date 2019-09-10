import axios from "axios";
import sanctuary from "sanctuary";

export const S = sanctuary.create({
  checkTypes: process.env.NODE_ENV !== "production",
  env: sanctuary.env
});

export const fetchCsrfToken = async () => {
  const {
    data: { csrf_token }
  } = await axios.get("http://localhost:4000/api/csrf");
  axios.defaults.headers.common["X-CSRF-TOKEN"] = csrf_token;
};

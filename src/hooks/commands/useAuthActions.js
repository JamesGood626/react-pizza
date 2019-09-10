import { useDispatch } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { setUser } from "../../store/actions/auth";

export function useAuthActions() {
  const dispatch = useDispatch();

  const signupPizzaChef = signupData => {
    console.log("signupData for pizzaChef: ", signupData);
    dispatch(
      apiRequest({
        method: "POST",
        url: "/signup_pizza_chef",
        payload: signupData,
        onSuccess: signupSuccess,
        onError: signupError
      })
    );
  };

  const signupOpsManager = signupData => {
    console.log("signupData for signupOpsManager: ", signupData);
    dispatch(
      apiRequest({
        method: "POST",
        url: "/signup_pizza_ops_manager",
        payload: signupData,
        onSuccess: signupSuccess,
        onError: signupError
      })
    );
  };

  const signupSuccess = ({ username }) => {
    console.log("the User in signupSuccess: ", username);
    dispatch(setUser({ username }));
  };

  const signupError = error => {
    console.log(error);
  };

  return { signupPizzaChef, signupOpsManager };
}

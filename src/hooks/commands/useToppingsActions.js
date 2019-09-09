import { useDispatch } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { setToppings } from "../../store/actions/toppings";

export function useToppingsActions() {
  const dispatch = useDispatch();

  const fetchAllToppings = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: "/toppings",
        onSuccess: fetchToppingsSuccess,
        onError: fetchToppingsError
      })
    );
  };

  const fetchToppingsSuccess = toppings => {
    console.log("the Toppings in fetchToppingsSuccess: ", toppings);
    dispatch(setToppings({ toppings }));
  };

  const fetchToppingsError = error => {
    console.log(error);
  };

  return { fetchAllToppings };
}

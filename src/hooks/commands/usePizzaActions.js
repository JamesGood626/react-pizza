import { useDispatch } from "react-redux";
import { apiRequest } from "../../store/actions/api";
import { setPizza } from "../../store/actions/pizza";

export function usePizzaActions() {
  const dispatch = useDispatch();

  const fetchAllPizza = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: "/pizza",
        onSuccess: fetchPizzaSuccess,
        onError: fetchPizzaError
      })
    );
  };

  const fetchPizzaSuccess = pizza => {
    console, log("the pizza in fetchPizzaSuccess: ", pizza);
    dispatch(setPizza({ pizza }));
  };

  const fetchPizzaError = error => {
    console.log(error);
  };

  return { fetchAllPizza };
}

import { useSelector } from "react-redux";

export function useToppings() {
  return useSelector(state => state.toppings);
}

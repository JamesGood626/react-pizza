import { useSelector } from "react-redux";

export function usePizza() {
  return useSelector(state => state.pizza);
}

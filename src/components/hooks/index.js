import { useState } from "react";

export const useAuthForm = ({ pizzaChefAuthAction, opsManagerAuthAction }) => {
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const handleChange = ({ target: { id, value } }) => {
    if (id === "username")
      return setFormValues({
        ...formValues,
        username: value
      });
    if (id === "password")
      return setFormValues({
        ...formValues,
        password: value
      });
  };

  const handleSubmit = currentValue => formValues => {
    // Fire action off to: /api/signup_pizza_chef or /api/signin_pizza_chef
    // OR
    // Fire action off to: /api/signup_pizza_ops_manager or /api/signin_pizza_ops_manager
    // depending on the component that is using this useAuthForm hook
    // (i.e. Signup page or Signin page)
    if (currentValue === "signupPizzaChef") {
      pizzaChefAuthAction(formValues);
    }
    if (currentValue === "signupOpsManager") {
      opsManagerAuthAction(formValues);
    }
  };

  return { formValues, handleChange, handleSubmit };
};

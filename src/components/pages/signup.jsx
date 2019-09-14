import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";
import styled from "styled-components";
import Form from "../shared/form";
import { useUi } from "../../hooks/queries/useUi";
import { useAuthActions } from "../../hooks/commands/useAuthActions";

const PIZZA_CHEF = "PIZZA_CHEF";
const OPS_MANAGER = "OPS_MANAGER";

const Container = styled.div`
  .active {
    background: lime;
  }
`;

const toggleMachine = Machine({
  id: "signupToggle",
  initial: "signupPizzaChef",
  states: {
    signupPizzaChef: {
      on: { TOGGLE: "signupOpsManager" }
    },
    signupOpsManager: {
      on: { TOGGLE: "signupPizzaChef" }
    }
  }
});

export default function Signup() {
  const { loading } = useUi();
  const { signupPizzaChef, signupOpsManager } = useAuthActions();
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [current, send] = useMachine(toggleMachine);
  const toggle = type => () => {
    if (type === PIZZA_CHEF && current.value !== "signupPizzaChef")
      return send("TOGGLE");
    if (type === OPS_MANAGER && current.value !== "signupOpsManager")
      return send("TOGGLE");
  };

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
    if (currentValue === "signupPizzaChef") {
      // Fire action off to: /api/signup_pizza_chef
      signupPizzaChef(formValues);
    }
    if (currentValue === "signupOpsManager") {
      // Fire action off to: /api/signup_pizza_ops_manager
      signupOpsManager(formValues);
    }
  };

  return (
    <Container>
      <h3>Signup As:</h3>
      {loading ? <h1>LOADING</h1> : null}
      <div>
        <button
          className={current.value === "signupPizzaChef" && "active"}
          onClick={toggle(PIZZA_CHEF)}
        >
          Pizza Chef
        </button>
        <button
          className={current.value === "signupOpsManager" && "active"}
          onClick={toggle(OPS_MANAGER)}
        >
          Operations Manager
        </button>
      </div>
      <Form formValues={formValues} handleSubmit={handleSubmit(current.value)}>
        <input
          id="username"
          type="text"
          value={formValues.username}
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </Form>
    </Container>
  );
}

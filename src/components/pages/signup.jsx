import React, { useState } from "react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";
import styled from "styled-components";
import Form from "../shared/form";
import { useAuthActions } from "../../hooks/commands/useAuthActions";
import { useUi } from "../../hooks/queries/useUi";
import { useAuthForm } from "../hooks";
import UserRoleAuthToggle from "../shared/userRoleAuthToggle";

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
  const [current, send] = useMachine(toggleMachine);
  const { loading } = useUi();
  const { signupPizzaChef, signupOpsManager } = useAuthActions();
  const { formValues, handleChange, handleSubmit } = useAuthForm({
    pizzaChefAuthAction: signupPizzaChef,
    opsManagerAuthAction: signupOpsManager
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <UserRoleAuthToggle
        current={current}
        send={send}
        formHeaderText="Signup As:"
      />
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

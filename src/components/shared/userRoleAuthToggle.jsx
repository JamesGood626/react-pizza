import React from "react";

const PIZZA_CHEF = "PIZZA_CHEF";
const OPS_MANAGER = "OPS_MANAGER";

const UserRoleAuthToggle = ({ current, send, formHeaderText }) => {
  const toggle = type => () => {
    if (type === PIZZA_CHEF && current.value !== "signupPizzaChef")
      return send("TOGGLE");
    if (type === OPS_MANAGER && current.value !== "signupOpsManager")
      return send("TOGGLE");
  };

  return (
    <>
      <h3>{formHeaderText}</h3>
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
    </>
  );
};

export default UserRoleAuthToggle;

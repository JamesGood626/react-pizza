import React from "react";

export default function Form({ children, formValues, handleSubmit }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log("submitting form");
        handleSubmit(formValues);
      }}
    >
      {children}
      <button>Submit</button>
    </form>
  );
}

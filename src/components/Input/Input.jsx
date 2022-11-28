import React from "react";
import "./input.scss";
import { FormContext } from "../Context/Form/FormProvider";

const Input = ({ name }) => {
  const formContext = React.useContext(FormContext);
  if (!formContext) {
    throw new Error("Input should be used inside FormProvider");
  }
  const { formState, handleFormChange } = formContext;

  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        name={name}
        value={formState[name]}
        onChange={handleFormChange}
      />
      <p className="error"></p>
    </div>
  );
};

export default Input;

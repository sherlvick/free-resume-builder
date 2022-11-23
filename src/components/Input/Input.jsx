import React from "react";
import "./input.scss";
import { FormContext } from "../FormContext/Form";

const Input = ({ name }) => {
  const formContext = React.useContext(FormContext);
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

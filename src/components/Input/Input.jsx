import React from "react";
import "./input.scss";
import { FormContext } from "../Context/Form/FormProvider";

const Input = ({ name }) => {
  const formContext = React.useContext(FormContext);
  if (!formContext) {
    throw new Error("Input should be used inside FormProvider");
  }
  const { formState, handleChange, handleBlur, touched, formErrors } =
    formContext;
  console.log("formContext", formContext);
  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        name={name}
        value={formState[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p className="error">
        {touched[name] && formErrors[name] ? formErrors[name] : null}
      </p>
    </div>
  );
};

export default Input;

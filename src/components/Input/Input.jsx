import React from "react";
import "./input.scss";
import { FormContext } from "../Context/Form/FormProvider";
import { useCallback } from "react";

const WithIcon = (ActualComponent, StartIcon, EndIcon) => {
  return function (props) {
    return (
      <div className="input-container__icon-wrapper">
        {StartIcon}
        <ActualComponent {...props} />
        {EndIcon && EndIcon}
      </div>
    );
  };
}

const Input = ({ name, label, size = "sm", startIcon, endIcon=null }) => {
  const formContext = React.useContext(FormContext);
  if (!formContext) {
    throw new Error("Input should be used inside FormProvider");
  }
  const { formState, handleChange, handleBlur, touched, formErrors } =
    formContext;

  const InputProps = {
    type: "text",
    className: `input-container__input input-container__input--${size} input-container__input--${
      startIcon && "withIcon"
    }`,
    name: name,
    id: name,
    value: formState[name],
    onChange: handleChange,
    onBlur: handleBlur,
  };

  // HOC to add start icon
  const InputWithIcon = useCallback(WithIcon("input", startIcon, endIcon),[]);

  return (
    <div className={`input-container`}>
      {label && <label
        className={`input-container__label input-container__label--${size}`}
        htmlFor={name}
      >
        {label}
      </label>}
      {startIcon ? (
        <InputWithIcon {...InputProps} />
      ) : (
        <input {...InputProps} />
      )}
      
        {touched[name] && formErrors[name] ? <p className="input-container__error">{formErrors[name] }     </p> : null}

    </div>
  );
};

export default Input;

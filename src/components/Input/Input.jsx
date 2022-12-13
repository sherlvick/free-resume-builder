import React from "react";
import "./input.scss";
import { FormContext } from "../Context/Form/FormProvider";

function WithIcon(ActualComponent, Icon) {
  return function (props) {
    return (
      <div className="input-container__icon-wrapper">
        {Icon}
        <ActualComponent {...props} />
      </div>
    );
  };
}

const Input = ({ name, label, size = "sm", startIcon }) => {
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
  const InputWithIcon = WithIcon("input", startIcon);

  return (
    <div className={`input-container`}>
      <label
        className={`input-container__label input-container__label--${size}`}
        htmlFor={name}
      >
        {label}
      </label>
      {startIcon ? (
        <InputWithIcon {...InputProps} />
      ) : (
        <input {...InputProps} />
      )}
      <p className="input-container__error">
        {touched[name] && formErrors[name] ? formErrors[name] : null}
      </p>
    </div>
  );
};

export default Input;

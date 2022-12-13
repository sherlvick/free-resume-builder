import React, { Fragment, useState } from "react";
import "./socialMediaSelect.scss";
// import { FormContext } from "../Context/Form/FormProvider";
import { SocialMediaSelectOptions } from "../../constants";
import useOutsideClickForVisibility from "../../utils/hooks/outsideClickForVisibility";
import AddLink from "./AddLink";

const SocialMediaSelect = ({ name, label, size = "sm", placeholder }) => {
  // const formContext = React.useContext(FormContext);
  // if (!formContext) {
  //   throw new Error("Input should be used inside FormProvider");
  // }
  // const {
  //   formState,
  //   handleChange,
  //   handleBlur,
  //   setFieldValue,
  //   touched,
  //   formErrors,
  // } = formContext;

  const [selectedValue, setSelectedValue] = useState(placeholder || "Select");

  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideClickForVisibility(false);

  const toggleState = () => {
    setIsComponentVisible((prevState) => !prevState);
  };

  const onClickOfOption = (value) => {
    toggleState();
    const selectedOptionData =
      SocialMediaSelectOptions &&
      SocialMediaSelectOptions.find((option) => option.value === value);
    setSelectedValue(
      <Fragment>
        <selectedOptionData.icon className="socialLinkSelect-container__select-option-icon" />{" "}
        <p className="socialLinkSelect-container__select-option-label">
          {selectedOptionData.label}
        </p>
      </Fragment>
    );
  };

  return (
    <div className="socialLinkSelect-container">
      <div
        className={`socialLinkSelect-container__label socialLinkSelect-container__label--${size}`}
      >
        {label}
      </div>
      <div className={`socialLinkSelect-container__select`} ref={ref}>
        <button
          type="button"
          name="social-link-select"
          id="social-link-select"
          className={`socialLinkSelect-container__select-btn socialLinkSelect-container__select-btn--${size}`}
          onClick={toggleState}
        >
          {selectedValue}
        </button>
        <div className="socialLinkSelect-container__select-options">
          {isComponentVisible &&
            SocialMediaSelectOptions &&
            SocialMediaSelectOptions.map((option) => {
              return (
                <div
                  key={option.id}
                  className="socialLinkSelect-container__select-option"
                  onClick={() => onClickOfOption(option.value)}
                >
                  <option.icon className="socialLinkSelect-container__select-option-icon" />
                  <p className="socialLinkSelect-container__select-option-label">
                    {option.label}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <AddLink />
      {/* <p className="socialLinkSelect-container__error">
        {touched[name] && formErrors[name] ? formErrors[name] : null}
      </p> */}
    </div>
  );
};

export default SocialMediaSelect;

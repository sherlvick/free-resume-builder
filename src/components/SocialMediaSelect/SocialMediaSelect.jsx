import React, { Fragment, useState } from "react";
import "./socialMediaSelect.scss";
import { FormContext } from "../Context/Form/FormProvider";
import { SocialMediaSelectOptions } from "../../constants";
import useOutsideClickForVisibility from "../../utils/hooks/outsideClickForVisibility";
import AddLink from "./AddLink";

const SocialMediaSelect = ({ name, label, size = "sm", placeholder }) => {
  const formContext = React.useContext(FormContext);
  if (!formContext) {
    throw new Error("Input should be used inside FormProvider");
  }
  const { setFieldValue } =
    formContext;

  const [socialMediaSelectOptions, setSocialMediaSelectOptions] = useState(
    SocialMediaSelectOptions
  );
  const [selectedValue, setSelectedValue] = useState(placeholder || "Select");

  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideClickForVisibility(false);

  const toggleState = () => {
    setIsComponentVisible((prevState) => !prevState);
  };

  const onClickOfOption = (value, id) => {
    toggleState();
    setSocialMediaSelectOptions((prevState) =>
      prevState.filter((option) => option.id !== id)
    );
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

  const deleteAddedLinkInput = (id,name) => {
    setSocialMediaSelectOptions((prevState) => [
      ...prevState,
      ...SocialMediaSelectOptions.filter((option) => option.id === id),
    ]);
    setFieldValue(name,'')
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
            socialMediaSelectOptions &&
            socialMediaSelectOptions.map((option) => {
              return (
                <div
                  key={option.id}
                  className="socialLinkSelect-container__select-option"
                  onClick={() => onClickOfOption(option.value, option.id)}
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
      <AddLink
        links={SocialMediaSelectOptions.filter(
          ({ id: originalId }) =>
            !socialMediaSelectOptions.some(
              ({ id: filteredId }) => originalId === filteredId
            )
        )}
        deleteLink={deleteAddedLinkInput}
      />
      {/* <p className="socialLinkSelect-container__error">
        {touched[name] && formErrors[name] ? formErrors[name] : null}
      </p> */}
    </div>
  );
};

export default SocialMediaSelect;

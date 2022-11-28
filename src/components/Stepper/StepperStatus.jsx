import "./stepper.scss";
import { FaCheckCircle } from "react-icons/fa";
import { useStepper } from "../Context/Stepper/StepperProvider";
import React from "react";

const StepperStatus = () => {
  const { steps, currentStep } = useStepper();

  return (
    <div className="stepper-status">
      <hr className="stepper-status__line" />
      <div className="stepper-status__circle-wrapper">
        {steps.map((step, index) => {
          if (index < currentStep)
            return <FaCheckCircle className="stepper-status__prev" />;
          else if (index === currentStep)
            return (
              <span className="stepper-status__circle stepper-status__circle--current">
                {currentStep}
              </span>
            );
          else {
            return (
              <span className="stepper-status__circle stepper-status__circle--next">
                {index}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};
export default StepperStatus;

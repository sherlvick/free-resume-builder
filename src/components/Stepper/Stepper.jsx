import React from "react";
import "./stepper.scss";
import { StepperStep, StepperSteps } from "./StepperSteps";
import StepperStatus from "./StepperStatus";
import StepperAction from "./StepperAction";

const Stepper = ({ children }) => {
  return (
    <div className="stepper">
      <StepperStatus />
      <div className="stepper__body">{children}</div>
      <StepperAction />
    </div>
  );
};

export default Stepper;

export { StepperStep, StepperSteps };

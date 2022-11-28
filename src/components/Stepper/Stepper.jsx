import React from "react";
import "./stepper.scss";
import { StepperStep, StepperSteps } from "./StepperSteps";
import StepperStatus from "./StepperStatus";
import StepperAction from "./StepperAction";

const Stepper = ({ children }) => {
  return (
    <div className="stepper">
      {/* <div className="stepper__status"> */}
      <StepperStatus />
      {/* </div> */}
      <div className="stepper__body">{children}</div>
      {/* <div className="stepper__action"> */}
      <StepperAction />
      {/* </div> */}
    </div>
  );
};

export default Stepper;

export { StepperStep, StepperSteps };

import "./stepper.scss";
import { useStepper } from "../Context/Stepper/StepperProvider";
import React from "react";

const StepperAction = () => {
  const { steps, incrementCurrentStep, decrementCurrentStep } = useStepper();
  return (
    <div className="stepper-action">
      <button type="button" onClick={decrementCurrentStep}>prev</button>
      <button type="button" onClick={incrementCurrentStep}>next</button>
    </div>
  );
};

export default StepperAction;

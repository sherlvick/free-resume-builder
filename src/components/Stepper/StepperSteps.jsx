import "./stepper.scss";
import { useStepper } from "../Context/Stepper/StepperProvider";
import React, { Fragment, useEffect } from "react";

export const StepperSteps = ({ children }) => {
  const { setSteps, steps, currentStep } = useStepper();

  useEffect(() => {
    const steps = React.Children.toArray(children)
      .filter((step) => step.type.name === "StepperStep")
      .map((step) => step.props);
    setSteps(steps);
  }, [setSteps]);

  return (
    <Fragment>
      {children &&
        React.Children.map(children, (child) => {
          if (steps.length)
            return child.props.id === steps[currentStep].id ? child : null;
        })}
    </Fragment>
  );
};

export const StepperStep = function ({ children }) {
  return <Fragment>{children}</Fragment>;
};

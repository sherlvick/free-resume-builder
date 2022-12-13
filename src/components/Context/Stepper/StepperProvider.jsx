import React, { useState, useCallback, useContext, Fragment } from "react";

export const StepperContext = React.createContext();

const defaultStepperState = { steps: [], currentStep: 0 };

const StepperProvider = React.memo(({ children }) => {
  const [stepperState, setStepperState] = useState(defaultStepperState);

  const setSteps = useCallback(
    (steps) => setStepperState({ ...stepperState, steps: steps }),
    [setStepperState]
  );

  const incrementCurrentStep = useCallback(
    () =>
      setStepperState((prevState) => {
        const { steps, currentStep } = prevState;
        return {
          ...prevState,
          currentStep:
            currentStep < steps.length - 1 ? currentStep + 1 : currentStep,
        };
      }),
    [setStepperState]
  );

  const decrementCurrentStep = useCallback(
    () =>
      setStepperState((prevState) => {
        const { steps, currentStep } = prevState;
        return {
          ...prevState,
          currentStep: currentStep > 0 ? currentStep - 1 : currentStep,
        };
      }),
    [setStepperState]
  );

  const setStepperStateFunctions = {
    setSteps,
    incrementCurrentStep,
    decrementCurrentStep,
  };

  return (
    <Fragment>
      <StepperContext.Provider
        value={{ stepperState, setStepperStateFunctions }}
      >
        {children}
      </StepperContext.Provider>
    </Fragment>
  );
});

export default StepperProvider;

export const useStepper = () => {
  const { stepperState, setStepperStateFunctions } = useContext(StepperContext);
  if (!StepperContext) {
    throw new Error("useStepper should be used inside StepperProvider");
  }
  const { currentStep, steps } = stepperState;
  const { setSteps, incrementCurrentStep, decrementCurrentStep } =
    setStepperStateFunctions;

  return {
    incrementCurrentStep,
    decrementCurrentStep,
    setSteps,
    currentStep,
    steps,
  };
};

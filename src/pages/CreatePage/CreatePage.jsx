import React from "react";
import "./createPage.scss";
import FormProvider from "../../components/Context/Form/FormProvider";
import Input from "../../components/Input/Input";
import Stepper, {
  StepperStep,
  StepperSteps,
} from "../../components/Stepper/Stepper";
import StepperProvider from "../../components/Context/Stepper/StepperProvider";

const CreatePage = React.memo(() => {
  const initialValues = {
    firstName: "",
    lastName: "",
    jobTitle: "",
  };

  const submitResumeForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create-container">
      <section className="form">
        <div className="form__wrapper">
          <FormProvider initialState={initialValues} submit={submitResumeForm}>
            <StepperProvider>
              <Stepper>
                <StepperSteps>
                  <StepperStep id="name">
                    <Input name="firstName" />
                    <Input name="lastName" />
                  </StepperStep>
                  <StepperStep id="desgination">
                    <Input name="jobTitle" />
                  </StepperStep>
                  <StepperStep id="contact">
                    <Input name="mobile" />
                  </StepperStep>
                  <StepperStep id="profilePic">
                    <Input name="picture" />
                  </StepperStep>
                </StepperSteps>
              </Stepper>
            </StepperProvider>
          </FormProvider>
        </div>
      </section>
      <aside className="animations">dsc</aside>
    </div>
  );
});
export default CreatePage;

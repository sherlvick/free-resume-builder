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
    mobile: "",
    email: "",
    picture: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.jobTitle) {
      errors.jobTitle = "Required";
    } else if (values.jobTitle.length > 30) {
      errors.jobTitle = "Enter a valid job desgination";
    }

    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (!/	^((\+91)?|91)?[789][0-9]{9}/i.test(values.mobile)) {
      errors.mobile = "Invalid mobile no";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const submitResumeForm = (values, { setSubmitting }) => {
    console.log("vslues", values);
    setSubmitting(false);
  };

  return (
    <div className="create-container">
      <section className="form">
        <div className="form__wrapper">
          <FormProvider
            initialState={initialValues}
            validate={validate}
            submit={submitResumeForm}
          >
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
                    <Input name="email" />
                  </StepperStep>
                  <StepperStep id="profilePic">
                    <Input name="picture" />
                    <button type="submit">Save</button>
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

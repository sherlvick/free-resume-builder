import React, { useState } from "react";
import "./createPage.scss";
import FormProvider from "../../components/Context/Form/FormProvider";
import Input from "../../components/Input/Input";
import Stepper, {
  StepperStep,
  StepperSteps,
} from "../../components/Stepper/Stepper";
import StepperProvider from "../../components/Context/Stepper/StepperProvider";
import SocialMediaSelect from "../../components/SocialMediaSelect/SocialMediaSelect";

const CreatePage = React.memo(() => {
  const [state, setState] = useState({});
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

    if (!values.surname) {
      errors.surname = "Required";
    } else if (values.surname.length > 20) {
      errors.surname = "Must be 20 characters or less";
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
           { ({formState}) => {
            console.log(formState);
            setState(formState)
              return <StepperProvider>
              <Stepper>
                <StepperSteps>
                  <StepperStep id="name">
                    <Input name="firstName" label="Firstname" size="md" />
                    <Input name="surname" label="Surname" size="md" />
                  </StepperStep>
                  <StepperStep id="desgination">
                    <Input name="jobTitle" label="Job Title" size="md" />
                  </StepperStep>
                  <StepperStep id="contact">
                    <div className="form__contact">
                      <Input name="mobile" label="Mobile" size="sm" />
                      <Input name="email" label="Email" size="sm" />
                      <Input name="address" label="Address" size="sm" />
                      <SocialMediaSelect
                        name="socialLinks"
                        label="Social Links"
                        size="sm"
                        placeholder="Add links"
                      />
                    </div>
                  </StepperStep>
                  <StepperStep id="svd">
                    <Input name="mobiled" />
                    <Input name="emailds" />
                  </StepperStep>
                  <StepperStep id="ds">
                    <Input name="mobilef" />
                    <Input name="emaihgbl" />
                  </StepperStep>
                  <StepperStep id="svsd">
                    <Input name="mobisled" />
                    <Input name="emasilds" />
                  </StepperStep>
                  <StepperStep id="das">
                    <Input name="mobialef" />
                    <Input name="emaidhgbl" />
                  </StepperStep>
                  <StepperStep id="profilePic">
                    <Input name="picture" />
                    <button type="submit">Save</button>
                  </StepperStep>
                </StepperSteps>
              </Stepper>
            </StepperProvider>
           }}
          </FormProvider>
        </div>
      </section>
      <aside className="animations">{JSON.stringify(state, null, " ")}</aside>
    </div>
  );
});
export default CreatePage;

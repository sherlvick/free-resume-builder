import React, { useState, useEffect } from "react";
import "./form.scss";

export const FormContext = React.createContext();

const FormProvider = React.memo(
  ({ initialState = {}, validate, submit = () => {}, children }) => {
    const [formState, setFormState] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [validating, setValidating] = useState(false);
    const [touched, setTouched] = useState({});

    useEffect(() => {
      if (validating) {
        setFormErrors(validate != undefined ? validate(formState) : {});
        setValidating(false);
      }
    }, [validating]);

    useEffect(() => {
      if (submitting) {
        setValidating(true);
      }
    }, [submitting]);

    useEffect(() => {
      if (submitting) {
        Object.keys(formErrors).length > 0
          ? setSubmitting(false)
          : submit(formState, { setSubmitting, resetForm });
      }
    }, [formErrors]);

    const handleChange = (event) => {
      const { name, value } = event.target;
      const _formState = {
        ...formState,
        [name]: value,
      };
      setFormState(_formState);
    };

    const setFieldValue = (name, value) => {
      if (name === undefined || value === undefined)
        throw "Name/Value parameter is missing!";
      const _formState = {
        ...formState,
        [name]: value,
      };
      setFormState(_formState);
    };

    const handleBlur = (event) => {
      const { name } = event.target;
      const _touched = {
        ...touched,
        [name]: true,
      };
      setTouched(_touched);
      setValidating(true);
    };

    const resetForm = () => {
      setFormState(initialState);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const _touched = {};
      for (const name in initialState) {
        _touched[name] = true;
      }
      setTouched(_touched);
      setSubmitting(true);
    };

    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <FormContext.Provider
          value={{
            formState,
            handleChange,
            handleBlur,
            setFieldValue,
            submitting,
            formErrors,
            validating,
            touched,
          }}
        >
          {children}
        </FormContext.Provider>
      </form>
    );
  }
);

export default FormProvider;

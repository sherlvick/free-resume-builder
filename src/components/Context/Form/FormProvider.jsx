import React, { useState } from "react";
import "./form.scss";

export const FormContext = React.createContext();

const FormProvider = React.memo(
  ({ initialState = {}, submit = () => {}, children }) => {
    const [formState, setFormState] = useState(initialState);

    const handleFormChange = (event) => {
      const { name, value } = event.target;
      const _formState = {
        ...formState,
        [name]: value,
      };
      setFormState(_formState);
    };

    return (
      <form className="form-container" onSubmit={submit}>
        <FormContext.Provider value={{ formState, handleFormChange }}>
          {children}
        </FormContext.Provider>
      </form>
    );
  }
);

export default FormProvider;
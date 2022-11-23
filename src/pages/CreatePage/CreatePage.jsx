import React from "react";
import "./createPage.scss";
import Form from "../../components/FormContext/Form";
import Input from "../../components/Input/Input";

const CreatePage = React.memo(() => {
  const initialValues = {
    firstName: "",
    lastName: "",
    jobTitle: "",
  };

  return (
    <div className="create-container">
      <section className="form">
        <Form initialState={initialValues}>
          <Input name="firstName" />
          <Input name="lastName" />
          <Input name="jobTitle" />
        </Form>
      </section>
      <aside className="animations">dsc</aside>
    </div>
  );
});
export default CreatePage;

import React from "react";
import { useFormik } from "formik";
import "./Profile.css";

export const Profile = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  return (
    <section className="profile-section">
      <form>
        <section className="personal-details">
          <h3>Personal Details</h3>
          <label>Full Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Phone Number</label>
          <input type="number" />
          <label>City</label>
          <input type="text" />
          <label>State</label>
          <input type="text" />
          <label>Pincode</label>
          <input type="number" />
        </section>
      </form>
    </section>
  );
};

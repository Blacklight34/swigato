// import React from 'react'
import React from 'react'
import { Formik, useFormik } from "formik";
import { Link,Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
        setTimeout(()=>{
            navigate('/')
            console.log("Navigated")
        }, 0)
    },
  });
  return (
    <form className="form-page" onSubmit={formik.handleSubmit}>
      <label className="items-headings" htmlFor="firstName">
        First Name
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label className="items-headings" htmlFor="lastName">
        Last Name
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label className="items-headings" htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

        <button type="submit">Submit</button>
    </form>
  );
};
export default Login;

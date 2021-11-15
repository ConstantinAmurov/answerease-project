import React from "react";

import { Link } from "react-router-dom";
//Formik
import { FormikProvider, useFormik } from "formik";

import FormFooter from "modules/Login/FormFooter";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      repeatPassword: "",
      rememberAccount: false,
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form className=" mt-11  flex flex-col" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        className="h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center"
        name="userName"
        onChange={formik.handleChange}
        placeholder="Neptun code"
        value={formik.values.userName}
      />
      <input
        type="text"
        className=" mt-4 h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center"
        name="password"
        onChange={formik.handleChange}
        placeholder="Password"
        value={formik.values.password}
      />
      <input
        type="text"
        className=" mt-4 h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center"
        name="password"
        onChange={formik.handleChange}
        placeholder="Repeat Passowrd"
        value={formik.values.repeatPassword}
      />
      <button
        className="mt-12 bg-blue text-white h-12  rounded-2xl "
        type="submit"
      >
        Log in
      </button>
      <FormFooter formik={formik}></FormFooter>
    </form>
  );
};

export default RegisterForm;

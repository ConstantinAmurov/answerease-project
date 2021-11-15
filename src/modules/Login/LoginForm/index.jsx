import React from "react";

import { Link } from "react-router-dom";
//Formik
import { useFormik } from "formik";
const LoginForm = () => {
  const formik = useFormik({
    initialValues: { userName: "", password: "", rememberAccount: false },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form className=" mt-11  flex flex-col" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        className="h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center"
        name="userName"
        placeholder="Neptun code"
        value={formik.values.userName}
      />
      <input
        type="text"
        className=" mt-4 h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center"
        name="password"
        placeholder="Password"
        value={formik.values.password}
      />
      <button
        className="mt-12 bg-blue text-white h-12  rounded-2xl "
        type="submit"
      >
        Log in
      </button>
      <div className="row  mt-10">
        <div className="col flex align-items-center">
          <input
            type="checkbox"
            name="rememberAccount"
            value={formik.values.rememberAccount}
          />{" "}
          <h1 className="ml-2 text-lg">Keep me logged in</h1>
        </div>
        <div className="col flex justify-end">
          <Link className="text-lg">Forgot Your password?</Link>
        </div>
      </div>
      <div className="row mt-6 flex justify-center">
        <h2 className="w-3/4 border-b-2 relative">
          <span className=" absolute  bg-white  -top-2 -ml-9 pl-4 pr-4">
            {" "}
            Or
          </span>
        </h2>
      </div>
      <div className="row">
        <div className="col mt-10">
          <h1>
            Do not have an account?
            <Link to="/register" className="ml-2 text-blue">
              Sign up
            </Link>
          </h1>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

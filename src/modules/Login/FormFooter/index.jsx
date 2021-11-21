import React from "react";

import { Field } from "formik";
import { Link } from "react-router-dom";

const FormFooter = ({ formik }) => {
  return (
    <>
      <div className="row  mt-10">
        <div className="col flex align-items-center">
          <Field type="checkbox" name="remember" />{" "}
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
    </>
  );
};

export default FormFooter;

import React from "react";

import { Field, ErrorMessage } from "formik";

const Input = (props) => {
  const { type, name, placeholder, as, children, className } = props;
  return (
    <div className="my-3">
      <Field
        as={as}
        type={type}
        name={name}
        placeholder={placeholder}
        className={
          "h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center" +
          className
        }
      >
        {children}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500 mt-2 ml-3 text-left">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Input;

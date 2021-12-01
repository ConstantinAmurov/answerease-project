import React from "react";
import { ErrorMessage } from "formik";
const Select = (props) => {
  const { name, value, options, onChange } = props;
  return (
    <>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-12 my-3 w-100 rounded-2xl text-gray-500  text-lg px-4 bg-gray-100 justify-center"
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <ErrorMessage name={name}>
        {(msg) => <div className="text-red-500 mt-2 ml-3 text-left">{msg}</div>}
      </ErrorMessage>
    </>
  );
};

export default Select;

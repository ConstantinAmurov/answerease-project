import React from "react";

const Button = (props) => {
  const { type, text } = props;

  return (
    <button
      className="mt-10 w-100 bg-blue text-white h-12  rounded-2xl "
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

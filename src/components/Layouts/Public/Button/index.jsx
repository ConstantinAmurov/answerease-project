import React from "react";

const Button = (props) => {
  const { type, text, onClick } = props;

  return (
    <button
      className="w-100 bg-blue text-white h-12  rounded-2xl "
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

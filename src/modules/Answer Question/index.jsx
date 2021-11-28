import React from "react";
import AnswerForm from "./AnswerForm";
import { browserRedirect } from "helpers/helpers";
const AnswerQuestion = () => {
  return (
    <>
      <div className="row my-24">
        <div className="col-4 text-2xl ">
          <h1 className="">Question</h1>
          <h1 className="text-gray-500 mt-14">
            Why is a percentage scale used for the x-axis rather than actual
            ages?
          </h1>
        </div>
        <div className="offset-1 col-7">
          <AnswerForm />
        </div>
      </div>
      <div className="row">
        <div className="col flex justify-content-end">
          <button
            onClick={() => browserRedirect("/")}
            className="bg-blue text-white h-12 pt-4 pb-4 pl-14 pr-14 flex align-items-center rounded-full"
          >
            Answer question
          </button>
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;

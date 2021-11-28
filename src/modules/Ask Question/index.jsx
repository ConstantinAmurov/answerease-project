import React from "react";

import { useFormik } from "formik";
const AskQuestion = () => {
  const formik = useFormik({
    initialValues: { question: "", subject: "" },
    onSubmit: (values) => console.log(values),
  });
  return (
    <div className="container mt-20 mb-20">
      <div className="row mt-28">
        <div className="col-6 text-left">
          <h1 className="text-2xl ">Ask question...</h1>
          <form onSubmit={formik.handleSubmit} className="mt-4 flex flex-col">
            <textarea
              type="text"
              placeholder="Write your question here"
              className="  resize-none w-100  h-72  rounded-2xl text-gray-500  text-lg p-3 bg-gray-100 justify-center"
            />

            <select
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              className="w-44 mt-3 text-gray-500 bg-gray-100 rounded-2xl p-2 pl-3 pr-3"
            >
              <option value="" label="Choose subject"></option>
              <option value="math" label="Math"></option>
              <option value="history" label="History"></option>
              <option value="literature" label="Literature"></option>
            </select>
            <button
              type="submit"
              className="bg-blue mt-7 text-white h-12  w-56 pt-4 pb-4 pl-14 pr-14 flex align-items-center rounded-full"
            >
              Ask question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;

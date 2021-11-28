import React from "react";
import Header from "./Header";

import QuestionsList from "./QuestionsList";
const Questions = () => {
  return (
    <div className="border-r-2 col-6 p-0 pt-3 border-gray-200 h-screen">
      <Header />  
      <hr className="border-gray-200 border-2" />
      <QuestionsList></QuestionsList>
    </div>
  );
};

export default Questions;

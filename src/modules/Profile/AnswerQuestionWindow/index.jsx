import React from "react";
import { useState } from "react";

import Answers from "./Answers";
import Questions from "./Questions";

const AnswerQuestionWindow = () => {
  const [Container, setContainer] = useState(<Answers />);
  return (
    <div>
      <div className="flex flow-col justify-content-end">
        <button onClick={() => setContainer(<Answers />)} className="mx-5">
          Answers
        </button>
        <button onClick={() => setContainer(<Questions />)}>
          Questions
        </button>
      </div>
      <div className=" mt-5 h-screen rounded-2xl bg-gray-100 px-14 py-3">
        {Container}
      </div>
    </div>
  );
};

export default AnswerQuestionWindow;

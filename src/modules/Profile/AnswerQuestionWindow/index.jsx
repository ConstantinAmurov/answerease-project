import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import Answers from "./Answers";
import Questions from "./Questions";
import Spinner from "components/Spinner/Spinner";

const AnswerQuestionWindow = () => {
  const { user, requesting } = useSelector((state) => state.user);
  const [Container, setContainer] = useState(<Answers data={user.answers} />);
  if (requesting) return <Spinner />;
  return (
    <div>
      <div className="flex flow-col justify-content-end">
        <button
          onClick={() => setContainer(<Answers data={user.answers} />)}
          className="mx-5"
        >
          Answers
        </button>
        <button
          onClick={() => setContainer(<Questions questions={user.questions} />)}
        >
          Questions
        </button>
      </div>
      <div className=" mt-5 h-screen rounded-2xl bg-gray-100 px-14 py-3 overflow-scroll">
        {Container}
      </div>
    </div>
  );
};

export default AnswerQuestionWindow;

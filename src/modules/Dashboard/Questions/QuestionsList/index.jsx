import React from "react";

import questions from "./dummyQuestions";
import Question from "./Question"
const QuestionsList = () => {
  return (
    <div className=" px-12 mt-4">
      {questions &&
        questions.map((question) => {
          return (
            <Question
              topic={question.topic}
              time={question.time}
              question={question.question}
            />
          );
        })}
    </div>
  );
};

export default QuestionsList;

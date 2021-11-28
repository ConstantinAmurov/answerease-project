import React from "react";

import dummyAnswers from "./dummyAnswers";

import Answer from "./Answer";

const Answers = () => {
  if (dummyAnswers)
    return dummyAnswers.map((answer, index) => (
      <Answer
        topic={answer.topic}
        question={answer.question}
        points={answer.points}
      />
    ));
  else return <div></div>;
};

export default Answers;

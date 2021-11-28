import React from "react";

import dummyQuestion from "modules/Dashboard/Questions/QuestionsList/dummyQuestions";
import Button from "components/Layouts/Public/Button";
import Question from "./Question";
import { browserRedirect } from "helpers/helpers";

const Questions = () => {
  if (!dummyQuestion)
    return dummyQuestion.map((question, index) => (
      <Question
        topic={question.topic}
        question={question.question}
        points={question.points}
      />
    ));
  else
    return (
      <div className="flex align-items-center justify-center h-100">
        <div className="text-center">
          <h1 className="text-xl text-gray-500 my-5">
            You haven't asked anything, yet…
          </h1>
          <Button
            type="submit"
            text="Ask question"
            onClick={() => browserRedirect("/ask-question")}
          />
        </div>
      </div>
    );
};

export default Questions;

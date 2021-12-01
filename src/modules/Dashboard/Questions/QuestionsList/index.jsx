import React from "react";

import { useQueryClient } from "react-query";
import Question from "./Question";
import Button from "components/Layouts/Public/Button";
import { browserRedirect } from "helpers/helpers";
const QuestionsList = (props) => {
  const { questions } = props;
  const categories = useQueryClient().getQueryData("subjects");

  if (questions.length > 1) {
    return (
      <div className=" px-12 mt-4">
        {questions.map((question) => {
          return (
            <Question
              id={question.id}
              categories={categories}
              category_id={question.category_id}
              created_at={question.created_at}
              question={question.text}
              point={question.point}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className=" px-12 mt-4">
      <h1 className="text-xl text-gray-500 my-5">
        There are no questions yet, would you be the first?
      </h1>
      <Button
        type="submit"
        text="Ask a question"
        onClick={() => browserRedirect("/ask-question")}
      />
    </div>
  );
};

export default QuestionsList;

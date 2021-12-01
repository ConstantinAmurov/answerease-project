import React from "react";

import { getCategories } from "api/Categories API";
import { useQuery } from "react-query";
import Spinner from "components/Spinner/Spinner";

import Button from "components/Layouts/Public/Button";
import Question from "./Question";
import { browserRedirect } from "helpers/helpers";

const Questions = (props) => {
  const { questions } = props;

  const { isSuccess, isLoading } = useQuery("subjects", () =>
    getCategories()
  );

  if (isLoading) return <Spinner />;

  if (isSuccess)
    return questions.map((question, index) => (
      <Question
        category_id={question.category_id}
        point={question.point}
        created_at={question.created_at}
        text={question.text}
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

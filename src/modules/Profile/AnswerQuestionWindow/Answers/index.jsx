import React from "react";

import { browserRedirect } from "helpers/helpers";
import Button from "components/Layouts/Public/Button";
import Answer from "./Answer";

const Answers = (props) => {
  const { data } = props;
  if (data)
    return data.map((answer, index) => (
      <Answer
        question_id={answer.question_id}
        created_at={answer.created_at}
        answer={answer.text}
      />
    ));
  else
    return (
      <div className="flex align-items-center justify-center h-100">
        <div className="text-center">
          <h1 className="text-xl text-gray-500 my-5">
            You haven't answered anything, yet…
          </h1>
          <Button
            type="submit"
            text="Answer a question"
            onClick={() => browserRedirect("/dashboard")}
          />
        </div>
      </div>
    );
};

export default Answers;

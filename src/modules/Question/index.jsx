import React from "react";

import { useParams } from "react-router";
import Info from "modules/Dashboard/Info";
import QuestionPage from "./QuestionPage";

const Question = () => {
  const { id } = useParams();

  return (
    <div className="row mt-16">
      <QuestionPage question_id={id} />
      <Info />
    </div>
  );
};

export default Question;

import React from "react";
import { useQuery } from "react-query";
import { getQuestion } from "api/Questions API";
import Spinner from "components/Spinner/Spinner";
import QuestionItem from "./QuestionItem";
import AnswerItem from "./AnswerItem";

const QuestionPage = (props) => {
  const { question_id } = props;

  const { data, isSuccess, isLoading } = useQuery(
    ["question", question_id],
    () => getQuestion(question_id)
  );

  if (isLoading) return <Spinner />;
  if (isSuccess)
    return (
      <div className="border-r-2 col-8 p-0 pt-3 border-gray-200 h-screen">
        <QuestionItem question={data.question} answer={data.answer}/>
        <hr className="border-gray-200 border-2" />
        <AnswerItem answer={data.answer} question={data.question} thanked={data.thanked}/>
      </div>
    );
};

export default QuestionPage;

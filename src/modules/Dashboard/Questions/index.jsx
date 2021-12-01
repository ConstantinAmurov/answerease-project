import React from "react";
import Header from "./Header";

import QuestionsList from "./QuestionsList";

import { useQuery } from "react-query";
import { getQuestions } from "api/Questions API";
import Spinner from "components/Spinner/Spinner";
const Questions = (props) => {
  const { category_id } = props;
  const { data, isSuccess, isLoading } = useQuery(
    ["questions", category_id],
    () => getQuestions(category_id)
  );
    
  if (isLoading)
    return (
      <div className="border-r-2 col-6 p-0 pt-3 border-gray-200 h-screen">
        <Header />
        <hr className="border-gray-200 border-2" />
        <Spinner />
      </div>
    );

  if (isSuccess)
    return (
      <div className="border-r-2 col-6 p-0 pt-3 border-gray-200 h-screen">
        <Header />
        <hr className="border-gray-200 border-2" />
        <QuestionsList questions={data}></QuestionsList>
      </div>
    );
};

export default Questions;

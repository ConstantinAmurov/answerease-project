import React from "react";

import { useQuery } from "react-query";
import { useParams } from "react-router";
import { searchQuestion } from "api/Search API";
import { getCategories } from "api/Categories API";
import Spinner from "components/Spinner/Spinner";
import SubjectsList from "../Subjects";
import Info from "../Info";
import QuestionsList from "../Questions/QuestionsList";
import Header from "modules/Dashboard/Questions/Header";
const Search = () => {
  const { key } = useParams();

  const categories = useQuery("subjects", () => getCategories());
  const { data, isSuccess, isLoading } = useQuery(["questions", key], () =>
    searchQuestion(key)
  );

  if (isLoading) return <Spinner />;
  if (isSuccess) {
    return (
      <div className="row mt-16">
        <SubjectsList subjects={categories.data} />
        <div className="border-r-2 col-6 p-0 pt-3 border-gray-200 h-screen">
          <Header />
          <hr className="border-gray-200 border-2" />
          <QuestionsList questions={data}></QuestionsList>
        </div>
        <Info />
      </div>
    );
  }
};

export default Search;

import React from "react";

import ProfilePicture from "assets/profile.svg";
import { Link } from "react-router-dom";
import Button from "components/Layouts/Public/Button";
import { useQuery } from "react-query";
import { browserRedirect, getCategoryById, getTimeAgo } from "helpers/helpers";
import { getCategories } from "api/Categories API";
import Spinner from "components/Spinner/Spinner";
const QuestionItem = (props) => {
  const { question, answer } = props;
  const { data, isLoading, isSuccess } = useQuery(["subjects"], () =>
    getCategories()
  );
  let category;
  if (isSuccess) {
    category = getCategoryById(data, question.category_id);
  }
  const time_ago = getTimeAgo(question.created_at);

  if (isLoading) return <Spinner />;

  return (
    <div className="mb-12">
      <div className="row px-10 pt-3">
        <div className="col-1 p-0">
          <img src={ProfilePicture} alt="" className="" />
        </div>
        <div className="col">
          <header className="col-12 flex-col">
            <h1 className="text-2xl">{question.user.username}</h1>
            <h1 className="text-lg text-gray-400">
              {category.name}-{time_ago}
            </h1>
          </header>
        </div>
        <div className="col-12 mt-10">
          <p className="text-2xl text-gray-500 font-medium">{question.text}</p>
        </div>
        <div className="offset-8 col-3 w-60 flex justify-items-end text-xl">
          <Button
            text={answer ? `See answer` : `Answer +${question.point}pts`}
            onClick={() =>
              !answer && browserRedirect(`/answer-question/${question.id}`)
            }
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;

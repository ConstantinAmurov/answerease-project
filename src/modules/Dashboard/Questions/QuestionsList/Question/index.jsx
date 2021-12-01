import React from "react";

import ProfilePicture from "assets/profile.svg";
import Button from "components/Layouts/Public/Button";
import { browserRedirect, getTimeAgo } from "helpers/helpers";
import { getCategoryById } from "helpers/helpers";
import { Link } from "react-router-dom";
const Question = (props) => {
  const { id, categories, category_id, created_at, point, question } = props;
  
  const category = getCategoryById(categories, category_id);
  const time_ago = getTimeAgo(created_at);
  return (
    <div className="mb-10">
      <div className="row">
        <div className="col-1 p-0">
          <img src={ProfilePicture} alt="" className="" />
        </div>
        <div className="col">
          <header className="col-12 flex justify-between">
            <Link to={`/question/${id}`}>
              <h1 className="text-lg">
                {category.name} - {time_ago}
              </h1>
            </Link>
            <h1 className="text-2xl">+ {point} pts</h1>
          </header>
          <div className="col-12 mt-4">
            <h1 className="text-lg text-gray-500">{question}</h1>
          </div>
        </div>
      </div>
      <div className="row flex justify-content-end">
        <div className="w-48">
          <Button
            type="submit"
            text="Answer"
            onClick={() => browserRedirect(`/answer-question/${id}`)}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

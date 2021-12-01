import React from "react";

import ProfilePicture from "assets/profile.svg";

import { getCategoryById } from "helpers/helpers";
import { getTimeAgo } from "helpers/helpers";
import { useQueryClient } from "react-query";
const Question = (props) => {
  const { category_id, point, created_at, text } = props;
  const subjects = useQueryClient().getQueryData("subjects");
  const time_ago = getTimeAgo(created_at);
  return (
    <div className="my-5 ">
      <div className="row">
        <div className="col-1 p-0">
          <img src={ProfilePicture} alt="" className="" />
        </div>
        <div className="col">
          <header className="col-12 flex justify-between">
            <h1 className="text-xl">
              {getCategoryById(subjects, category_id).name} - {time_ago}
            </h1>
            <h1 className="text-2xl"> {point} pts</h1>
          </header>
          <div className="col-12 mt-4">
            <h1 className="text-xl text-gray-500">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

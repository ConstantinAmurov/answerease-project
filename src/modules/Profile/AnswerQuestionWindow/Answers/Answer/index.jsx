import React from "react";

import ProfilePicture from "assets/profile.svg";


import { useQuery } from "react-query";
import { getQuestion } from "api/Questions API";
import Spinner from "components/Spinner/Spinner";
import { getTimeAgo } from "helpers/helpers";

const Answer = (props) => {
  const { question_id, answer, created_at } = props;

  const { data, isSuccess, isLoading } = useQuery(
    ["question", question_id],
    () => getQuestion(question_id)
  );
  const time_ago = getTimeAgo(created_at);

  if (isLoading) return <Spinner />;

  if (isSuccess)
    return (
      <div className="my-5 ">
        <div className="row">
          <div className="col-1 p-0">
            <img src={ProfilePicture} alt="" className="" />
          </div>
          <div className="col ">
            <header className="col-12 flex justify-between">
              <h1 className="text-xl">
                {data.question.text} - {time_ago}
              </h1>
              <h1 className="text-2xl">+ {data.question.point} pts</h1>
            </header>
            <div className="col-12 mt-4">
              <h1 className="text-xl text-gray-500">{answer}</h1>
            </div>
          </div>
        </div>
      </div>
    );

  return <></>;
};

export default Answer;

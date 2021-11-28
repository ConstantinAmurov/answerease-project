import React from "react";

import ProfilePicture from "assets/profile.svg";

const Answer = (props) => {
  const { topic, question, points } = props;
  return (
    <div className="my-5 ">
      <div className="row">
        <div className="col-1 p-0">
          <img src={ProfilePicture} alt="" className="" />
        </div>
        <div className="col ">
          <header className="col-12 flex justify-between">
            <h1 className="text-xl">{topic}</h1>
            <h1 className="text-2xl">+ {points} pts</h1>
          </header>
          <div className="col-12 mt-4">
            <h1 className="text-xl text-gray-500">{question}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;

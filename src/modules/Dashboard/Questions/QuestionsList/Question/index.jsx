import React from "react";

import ProfilePicture from "assets/profile.svg";
import Button from "components/Layouts/Public/Button";
import { browserRedirect } from "helpers/helpers";
const Question = (props) => {
  const { topic, question } = props;

  return (
    <div>
      <div className="row">
        <div className="col-1 p-0">
          <img src={ProfilePicture} alt="" className="" />
        </div>
        <div className="col">
          <header className="col-12">
            <h1 className="text-lg">{topic}</h1>
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
            onClick={() => browserRedirect("/answer-question")}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

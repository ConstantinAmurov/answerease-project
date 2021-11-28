import React from "react";

import ProfileInfo from "modules/Dashboard/Info/ProfileInfo";

import AnswerQuestionWindow from "./AnswerQuestionWindow";

import AboutInfo from "./AboutInfo";
const Profile = () => {
  return (
    <div className="row mt-16">
      <div className="col-5">
        <ProfileInfo />
        <AboutInfo />
      </div>
      <div className="col-7">
        <AnswerQuestionWindow />
      </div>
    </div>
  );
};

export default Profile;

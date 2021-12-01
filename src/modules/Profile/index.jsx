import React from "react";

import ProfileInfo from "modules/Dashboard/Info/ProfileInfo";

import AnswerQuestionWindow from "./AnswerQuestionWindow";

import AboutInfo from "./AboutInfo";
import { browserRedirect } from "helpers/helpers";
const Profile = () => {


  return (
    <>
      <div className="row mt-16">
        <div className="col-5">
          <ProfileInfo />
          <AboutInfo />
        </div>
        <div className="col-7">
          <AnswerQuestionWindow />
        </div>
      </div>
      <div
        className="row justify-content-end px-3 mt-5"
        onClick={() => {
          return browserRedirect("/logout");
        }}
      >
        <button className=" rounded-3xl bg-gray-300 px-5  py-2 text-white">
          Log out
        </button>
      </div>
    </>
  );
};

export default Profile;

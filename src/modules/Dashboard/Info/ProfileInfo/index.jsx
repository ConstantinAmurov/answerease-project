import React from "react";
import { useSelector } from "react-redux";

import ProfilePicture from "assets/profile.svg";

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="px-3">
      <div className="row">
        <div className="col-4 ">
          <img src={ProfilePicture} alt="" className="w-full" />
        </div>
        <div className="col mt-auto mb-auto">
          <h1 className="text-2xl">
            {user.name} {user.surname}
          </h1>
          <h1 className="text-xl mt-1 text-gray-500">{user.username}</h1>
        </div>
      </div>
      <div className="row my-16 text-center">
        <div className="col">
          <h1 className="text-lg mb-2">Answers</h1>
          <h1 className="font-bold text-2xl">0</h1>
        </div>
        <div className="col">
          <h1 className="text-lg mb-2">Points</h1>
          <h1 className="font-bold text-2xl">{user.point}</h1>
        </div>

        <div className="col">
          <h1 className="text-lg mb-2">Thanks</h1>
          <h1 className="font-bold text-2xl">0</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";

import profilePicture from "assets/profile.svg";

const TopStudent = (props) => {
  const { name, surname, username, points } = props;
  return (
    <div className="row my-4">
      <div className="col-2">
        <img src={profilePicture} alt="" />
      </div>
      <div className="col-6 text-lg">
        <h1>
          {name} {surname}
        </h1>
        <h1 className="text-gray-500 mt-2">({username})</h1>
      </div>
      <div className="col-4 text-xl">
        <h1>{points} pts</h1>
      </div>
    </div>
  );
};

export default TopStudent;

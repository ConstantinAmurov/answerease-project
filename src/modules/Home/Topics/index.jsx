import React from "react";

import Asset from "assets/BookLover.svg";
const Topics = () => {
  return (
    <div className="row">
      <div className="col-6 ">
        <img src={Asset} alt="" className="m-auto" />
      </div>
      <div className=" offset-lg-1 col-4 mt-auto mb-auto">
        <h1 className="text-5xl">A large number of topics</h1>
        <p className="text-2xl mt-8 text-gray-500">
          You can find the topics of many questions that interest you
        </p>
      </div>
    </div>
  );
};

export default Topics;

import React from "react";

import Asset from "assets/Together.svg";

const Collaborative = () => {
  return (
    <div className="row mt-20">
      <div className="col-6 ">
        <img src={Asset} alt="" className="m-auto" />
      </div>
      <div className=" offset-lg-1 col-4 mt-auto mb-auto">
        <h1 className="text-5xl">Very Collaborative</h1>
        <p className="text-2xl mt-8 text-gray-500">
          Communicate with people, leave comments, help each other
        </p>
      </div>
    </div>
  );
};

export default Collaborative;

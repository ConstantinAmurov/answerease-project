import React from "react";

import Asset from "assets/Winners.svg";
const PointSystem = () => {
  return (
    <div className="row mt-20">
      <div className="col-5 mt-auto mb-auto">
        <h1 className="text-5xl">Motivating paying system for points</h1>
        <p className="text-2xl mt-8 text-gray-500">
          Answer questions and get points for answers, with which you can ask
          questions yourself or exchange for prizes
        </p>
      </div>
      <div className=" offset-lg-2 col-4">
        <img src={Asset} alt="" className="m-auto" />
      </div>
    </div>
  );
};

export default PointSystem;

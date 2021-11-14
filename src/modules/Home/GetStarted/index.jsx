import React from "react";

import Logo from "assets/cropped-logo.png";

import { BsChevronDown } from "react-icons/bs";

const GetStarted = () => {
  return (
    <>
      <div className="row mt-36">
        <div className="col-5 mt-auto mb-auto">
          <h1 className="text-8xl">Help each other Easily</h1>
          <p className="text-2xl mt-20 text-gray-500">
            A large university community wich gives ability to ask questions,
            help others and get points for it
          </p>
        </div>
        <div className=" offset-lg-2 col-4">
          <img src={Logo} alt="" className="m-auto" />
        </div>
      </div>
      <div className="row mt-20">
        <div className="col-2">
          <button className="bg-blue text-white h-12 pt-4 pb-4 pl-14 pr-14 flex align-items-center rounded-full">
            Get Started
          </button>
        </div>
        <div className=" col-1">
          <button className="rounded-full w-50 h-100 border-2 border-gray-300">
            <BsChevronDown className="m-auto" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GetStarted;

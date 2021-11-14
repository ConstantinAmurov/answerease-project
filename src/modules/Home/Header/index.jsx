import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="row flex align-items-center text-center">
      <div className="col-8">
        <input
          type="text"
          placeholder="Search for answer for any question..."
          className="h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center"
        ></input>
      </div>
      <div className="col-1 ">
        <Link to="/register" className="">
          Join us
        </Link>
      </div>
      <div className="col-1">
        <Link to="/login">Log in</Link>
      </div>
      <div className="col-2">
        <button className="bg-blue text-white h-12 pt-4 pb-4 pl-14 pr-14 flex align-items-center rounded-full">
          Ask question
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { browserRedirect } from "helpers/helpers";
import logo from "assets/AnswerEase logo.png";
import { Redirect } from "react-router";
const Header = () => {
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    browserRedirect(`/dashboard/search/${search}`);
  };
  return (
    <div className="row flex align-items-center text-center">
      <Link to="" className="relative col-3">
        <img src={logo} alt="" srcset="" className="absolute -top-12 -left-6" />
      </Link>

      <div className="col-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for answer for any question..."
            className="h-12 w-100 rounded-2xl text-gray-500  text-lg p-4 bg-gray-100 justify-center"
          ></input>
        </form>
      </div>
      <div className="col-1 ">
        <Link to="/profile" className="">
          Profile
        </Link>
      </div>
      <div className="col-1">
        <Link to="/notifications">Notifications</Link>
      </div>
      <div className="col-2">
        <button
          type="button"
          onClick={() => browserRedirect("/ask-question")}
          className="bg-blue text-white h-12 pt-4 pb-4 pl-14 pr-14 flex align-items-center rounded-full"
        >
          Ask question
        </button>
      </div>
    </div>
  );
};

export default Header;

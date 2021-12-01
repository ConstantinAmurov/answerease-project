import React from "react";
import { useSelector } from "react-redux";
import Spinner from "components/Spinner/Spinner";

import format from "date-fns/format";

const AboutInfo = () => {
  const { user, requesting } = useSelector((state) => state.user);

  const created_at = format(new Date(user.created_at), "dd MMMM yyyy");
  if (requesting) return <Spinner />;

  return (
    <div className="text-xl">
      <h1 className="">About</h1>
      <div className="mt-10">
        <h1 className=" text-gray-500 my-3">
          Faculty: <span className="text-black">{user.faculty}</span>
        </h1>
        <h1 className="text-gray-500 my-3">
          Joined: <span className="text-black">{created_at}</span>
        </h1>
      </div>
    </div>
  );
};

export default AboutInfo;

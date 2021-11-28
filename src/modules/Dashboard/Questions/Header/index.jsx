import React from "react";

import Button from "components/Layouts/Public/Button";
import { browserRedirect } from "helpers/helpers";
const Header = () => {
  return (
    <div className="border-gray-300 px-20 mb-5">
      <h1 className="text-4xl">What do you need to know?</h1>
      <div className="w-72 mt-8 ">
        <Button
          type="submit"
          text="Ask Question"
          onClick={() => browserRedirect("/ask-question")}
        />
      </div>
    </div>
  );
};

export default Header;

import React from "react";

//Logo
import ELTE from "assets/ELTE.png";
import ELTE_2 from "assets/ELTE_2.png";

const Footer = () => {
  return (
    <div className="row mt-40">
      <div className="col-2 mt-5 text-lg">
        <h1 className="text-2xl mb-4">Company</h1>
        <p className="">About Us</p>
        <p className="">Terms of Use</p>

        <p className="">Copyright Policy</p>

        <p className="">Privacy Policy</p>
        <p className="">Cookie Policy</p>
      </div>
      <div className="col-2 mt-5 text-lg">
        <h1 className="text-2xl mb-4">Community</h1>
        <p className="">Community</p>
        <p className="">Honor Code</p>

        <p className="">Community Guidelines</p>

        <p className="">Insights: The Blog</p>
        <p className="">Become a Volunteer</p>
      </div>

      <div className="col-2 mt-5 text-lg">
        <h1 className="text-2xl mb-4">Help</h1>
        <p className="">Sign Up</p>
        <p className="">
          Design: <b>@aalexpolina</b>
        </p>

        <p className="">
          Front-end:<b> @costeaxqz</b>
        </p>

        <p className="">
          Back-end: <b>@orkhan7887</b>
        </p>
      </div>

      <div className="offset-lg-2 col-4 flex flex-col justify-around align-items-end">
        <img src={ELTE} alt="" className="w-100" />
        <img src={ELTE_2} alt="" className="w-80" />
      </div>
    </div>
  );
};

export default Footer;

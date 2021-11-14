import React from "react";

import Item from "./Item";

//Icons
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoIosCalculator } from "react-icons/io";
import { VscBook } from "react-icons/vsc";
import { GiMaterialsScience } from "react-icons/gi";
const TopicsCarousel = () => {
  return (
    <div className="row mt-56">
      <div className=" col-1 h-12 m-auto">
        <button className=" rounded-full w-50 h-100 border-2 border-gray-300">
          <BsChevronLeft className="m-auto" />
        </button>
      </div>
      <div className="col">
        <Item icon={<GiMaterialsScience />} topic="Natural sciences"></Item>
      </div>

      <div className="col">
        <Item icon={<IoIosCalculator />} topic="Technical sciences"></Item>
      </div>

      <div className="col">
        <Item icon={<VscBook />} topic="Humanitarial sciences"></Item>
      </div>

      <div className=" col-1 h-12 m-auto">
        <button className=" rounded-full w-50 h-100 border-2 border-gray-300">
          <BsChevronRight className="m-auto" />
        </button>
      </div>
    </div>
  );
};

export default TopicsCarousel;

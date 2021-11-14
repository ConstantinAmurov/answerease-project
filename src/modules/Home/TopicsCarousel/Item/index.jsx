import React from "react";

const Item = (props) => {
  const { icon, topic } = props;
  return (
    <div className="text-center text-2xl">
      <div className="flex justify-center text-8xl">{icon}</div>
      <h5 className="mt-2 text-2xl">{topic}</h5>
    </div>
  );
};

export default Item;

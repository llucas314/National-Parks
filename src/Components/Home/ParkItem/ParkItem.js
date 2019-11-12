import React from "react";
import "./ParkItem.css";

const ParkItem = props => {
  return (
    <div
      className="item-container"
      style={{ backgroundImage: `url(${props.images[0].url})` }}
    >
      <h2>{props.fullName}</h2>
    </div>
  );
};

export default ParkItem;

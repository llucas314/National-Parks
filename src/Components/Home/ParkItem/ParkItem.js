import React from "react";

const ParkItem = props => {
  return (
    <div>
      <img src={props.images[0].url} alt={props.images[0].altText} />
      <h2>{props.fullName}</h2>
    </div>
  );
};

export default ParkItem;

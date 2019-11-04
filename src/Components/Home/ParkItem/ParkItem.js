import React, { Fragment } from "react";

const ParkItem = props => {
  return (
    <Fragment>
      <div key={props.id}>
        <img src={props.images[0].url} alt={props.images[0].altText} />
        <h2>{props.fullName}</h2>
      </div>
    </Fragment>
  );
};

export default ParkItem;

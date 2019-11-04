import React from "react";
import ParkItem from "./ParkItem/ParkItem";

const Home = props => {
  console.log(props.parks);
  return (
    <div>
      {props.parks.map(park => (
        <ParkItem {...park} />
      ))}
    </div>
  );
};

export default Home;

import React from "react";
import ParkItem from "./ParkItem/ParkItem";
import { Link } from "react-router-dom";

const Home = props => {
  console.log(props.parks);
  return (
    <div>
      {props.parks.map(park => (
        <Link to={`/park/${park.id}`} key={park.id}>
          <ParkItem {...park} />
        </Link>
      ))}
    </div>
  );
};

export default Home;

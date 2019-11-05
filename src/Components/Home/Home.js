import React from "react";
import ParkItem from "./ParkItem/ParkItem";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = props => {
  console.log(props.parks);
  return (
    <div className="parks-container">
      {props.parks.map(park => (
        <Link to={`/park/${park.id}`} key={park.id} className="item-list">
          <ParkItem {...park} />
        </Link>
      ))}
    </div>
  );
};

export default Home;

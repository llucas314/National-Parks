import React from "react";

const Home = props => {
  console.log(props.parks);
  return (
    <div>
      {props.parks.map(park => (
        <div key={park.id}>
          <img src={park.images[0].url} alt={park.images[0].altText} />
          <h2>{park.fullName}</h2>
        </div>
      ))}{" "}
    </div>
  );
};

export default Home;

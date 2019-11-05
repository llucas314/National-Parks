import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

const Details = props => {
  let park = props.parks.filter(park => park.id === props.match.params.id);
  console.log(park);

  const details = { ...park[0] };

  const address = { ...details.addresses[0] };

  return (
    <div className="details-container">
      <div
        className="details-background"
        style={{
          backgroundImage: `url(${details.images[details.images.length - 1].url})`
        }}
      >
        <h1>{details.name}</h1>
      </div>

      <div className="description">
        <p>{details.description}</p>
      </div>
      <h2>Address</h2>
      <p>
        {address.line1}
        <br />
        {address.city}, {address.stateCode}, {address.postalCode}
      </p>
      <h2>Directions</h2>
      <p>{details.directionsInfo}</p>
      <a href={details.url} target="_blank" rel="noopener noreferrer">
        <div className="button">Read More</div>
      </a>
      <h2>Images</h2>
      <div className="img-container">
        {details.images.map((image, i) =>
          i < 5 ? <img key={i} src={image.url} alt={image.altText} /> : ""
        )}
      </div>
      <div className="back">
        <Link to="/" className="back">
          Back to Park List
        </Link>
      </div>
    </div>
  );
};

export default Details;

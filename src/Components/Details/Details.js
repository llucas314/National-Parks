import React from "react";
import { Link } from "react-router-dom";

const Details = props => {
  let park = props.parks.filter(park => park.id === props.match.params.id);
  console.log(park);
  const details = { ...park[0] };
  const address = { ...details.addresses[0] };

  return (
    <div>
      <img
        src={details.images[details.images.length - 1].url}
        alt={details.images[details.images.length - 1].altText}
      />
      <h1>{details.name}</h1>
      <p>{details.description}</p>
      <h2>Address</h2>
      <p>
        {address.line1}
        <br />
        {address.city}, {address.stateCode}, {address.postalCode}
      </p>
      <h2>Directions</h2>
      <p>{details.directionsInfo}</p>
      <button>Read More</button>
      <div className="img-container">
        {details.images.map((image, i) => (
          <img key={i} src={image.url} alt={image.altText} />
        ))}
      </div>
      <Link to="/">Back to Park List</Link>
    </div>
  );
};

export default Details;

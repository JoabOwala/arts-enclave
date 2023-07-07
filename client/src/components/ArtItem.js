import React from "react";
import "../styles/ArtItem.css";

function ArtItem({ artwork }) {
  return (
    <div className="art-item-container">
      <img src={artwork.image} alt={artwork.title} />
      <h3>{artwork.title}</h3>
      <p>{artwork.artist}</p>
      <p>{artwork.year}</p>
      <p>{artwork.description}</p>
    </div>
  );
}

export default ArtItem;

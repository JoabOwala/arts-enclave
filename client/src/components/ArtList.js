import React from "react";
import "../styles/ArtList.css";

function ArtList() {
  const artworks = []; // Array of artworks

  return (
    <div className="artlist-container">
      <h2>Art List</h2>
      {artworks.map((artwork) => (
        <div key={artwork.id} className="art-item">
          <img src={artwork.image} alt={artwork.title} />
          <h3>{artwork.title}</h3>
          <p>{artwork.artist}</p>
          <p>{artwork.year}</p>
        </div>
      ))}
    </div>
  );
}

export default ArtList;

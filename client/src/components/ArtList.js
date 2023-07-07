import React from "react";
import ArtItem from "./ArtItem";
import "../styles/ArtList.css";

function ArtList({ user, artworks }) {
  if (!Array.isArray(artworks)) {
    return <p>No artworks available.</p>;
  }
  
  const userArtworks = artworks.filter(artwork => artwork.user_id === user.id);

  return (
    <div className="artlist-container">
      <h2>Art List</h2>
      {userArtworks.map((artwork) => (
        <ArtItem key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}

export default ArtList;

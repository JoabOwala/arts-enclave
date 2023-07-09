import React from "react";
import ArtItem from "./ArtItem";
import "../styles/ArtList.css";

function ArtList({ user, artworks, onDeleteArt }) {
  const userArtworks = artworks.filter((artwork) => artwork.user_id === user.id);

  function handleDeleteArt(artwork) {
    fetch(`/artworks/${artwork.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          onDeleteArt(artwork);
        } else {
          throw new Error("Failed to delete artwork");
        }
      })
      .catch((error) => {
        console.error("Error deleting artwork:", error);
      });
  }

  if (!Array.isArray(artworks) || userArtworks.length === 0) {
    return <p>No artworks available.</p>;
  }else
  {
    return (
      <div className="artlist-container">
      <h2>Art List</h2>
      {userArtworks.map((artwork) => (
        <ArtItem key={artwork.id} artwork={artwork} onDeleteArt={handleDeleteArt} />
        ))}
    </div>
  );}
}

export default ArtList;

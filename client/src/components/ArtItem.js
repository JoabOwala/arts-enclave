import React from "react";
import "../styles/ArtItem.css";

function ArtItem({ artwork, onDeleteArt}) {
  const {id, image,title,artist,year,description} = artwork;

  function handleDeleteArt() {
    fetch(`/artworks/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteArt(artwork);
      }
    });
  }
  return (
    <div className="art-item card">
      <img src={image} alt={title} />
      <div className="details">
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{description}</p>

      <p>
          <button onClick={handleDeleteArt}>Delete Art</button>
        </p>
      </div>
    </div>
  );
}

export default ArtItem;

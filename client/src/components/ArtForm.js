import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import "../styles/ArtForm.css";

function ArtForm({ user }) {
  // const history = useHistory();
  const [artwork, setArtwork] = useState({
    title: "",
    image: "",
    artist: "",
    year: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtwork((prevArtwork) => ({
      ...prevArtwork,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...artwork, user_id: user.id }),
    })
      .then((response) => response.json())
      .then((newArtwork) => {
        console.log("New artwork:", newArtwork);
        window.location.reload(); // Refresh the page
  
      })
      .catch((error) => {
        console.error("Error adding artwork:", error);
      });
  };

  return (
    <div className="card">
      <h2>Add Artwork</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="title"
          placeholder="Art Title"
          value={artwork.title}
          onChange={handleInputChange}
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          src={artwork.image}
          onChange={handleInputChange}
        />
        {artwork.image && (
          <img src={artwork.image} alt={artwork.title} className="prev" />
        )}
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={artwork.artist}
          onChange={handleInputChange}
        />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={artwork.year}
            onChange={handleInputChange}
          />
        <textarea
          name="description"
          placeholder="Description"
          value={artwork.description}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ArtForm;

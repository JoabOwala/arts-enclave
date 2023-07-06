import React, { useState } from "react";
import "../styles/ArtForm.css";

function ArtForm() {
  const [artwork, setArtwork] = useState({
    title: "",
    artist: "",
    description: "",
    year: "",
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
    // Handle form submission logic here
  };

  return (
    <div className="artform-container">
      <h2>Add Artwork</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={artwork.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={artwork.artist}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={artwork.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={artwork.year}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ArtForm;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/ArtForm.css";

function ArtForm({ user }) {
  const history = useHistory();
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
    fetch("/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...artwork, user_id: user.id }),
    })
      .then((response) => response.json())
      .then((newArtwork) => {
        // Handle successful submission and add the new artwork to the user's collection
        // You can update the state or make an API call to fetch the updated artworks list
        console.log("New artwork:", newArtwork);
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding artwork:", error);
      });
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

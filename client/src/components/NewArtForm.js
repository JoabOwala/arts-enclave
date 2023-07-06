import { useState } from "react";

function NewArtForm({ onAddArt }) {
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/arts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        image_url: image_url,
        artist: artist,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((newArt) => onAddArt(newArt));
  }

  return (
    <div className="new-plant-form">
      <h2>New Art</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Art title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
        />
        <input
          type="text"
          name="artist"
          placeholder="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Add Art</button>
      </form>
    </div>
  );
}

export default NewArtForm;

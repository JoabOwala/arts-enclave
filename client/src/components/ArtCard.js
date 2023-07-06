import { useState } from "react";

function ArtCard({ art }) {
  const { title, image_url, artist, price } = art;

  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }

  return (
    <li className="card">
      <img src={image_url} alt={title} />
      <h4>{title}</h4>
      <p>Artist: {artist}</p>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleToggleStock}>
          ❤️
        </button>
      ) : (
        <button onClick={handleToggleStock}>💔</button>
      )}
    </li>
  );
}

export default ArtCard;

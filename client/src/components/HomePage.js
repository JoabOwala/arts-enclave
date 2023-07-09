import React, { useEffect, useState } from "react";
//import ArtForm from "./ArtForm";
import ArtList from "./ArtList";

function HomePage({ user }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`/users/${user.id}/artworks`)
        .then((response) => response.json())
        .then((artworksData) => {
          setArtworks(artworksData);
        })
        .catch((error) => {
          console.error("Error fetching artworks:", error);
        });
    }
  }, [user]);

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.username}!</h1>
        {/* <ArtForm user={user} /> */}
        <ArtList user={user} artworks={artworks} />
      </div>
    );
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default HomePage;

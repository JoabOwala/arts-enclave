// import { useEffect, useState } from "react";
// import ArtList from "./ArtList";
// import Search from "./Search";

// function ArtsPage() {

//     return (
//         <main>
//         <Search />
//         </main>
//     );
// }

// export default ArtsPage;

import { useEffect, useState } from "react";
import NewArtForm from "./NewArtForm";
import ArtList from "./ArtList";
import Search from "./Search";

function ArtPage() {
  const [arts, setArts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // no need to use http://localhost:3000 here
    fetch("/arts")
      .then((r) => r.json())
      .then((artsArray) => {
        setArts(artsArray);
      });
  }, []);

  function handleAddArt(newArt) {
    const updatedArtsArray = [...arts, newArt];
    setArts(updatedArtsArray);
  }

  const displayedArts = arts.filter((art) => {
    return art.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewArtForm onAddArt={handleAddArt} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ArtList arts={displayedArts} />
    </main>
  );
}

export default ArtPage;

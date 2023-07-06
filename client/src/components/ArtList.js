import ArtCard from "./ArtCard";

function ArtList({ arts }) {
  return (
    <ul className="cards">
      {arts.map((art) => {
        return <ArtCard key={art.id} art={art} />;
      })}
    </ul>
  );
}

export default ArtList;

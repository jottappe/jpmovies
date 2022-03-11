import Score from "components/score";
import "./styles.css";

function Movies() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="movie-container">
      <img className="w-100 rounded-top" src={movie.image} alt={movie.title} />
      <div className="d-flex flex-column align-items-center p-3">
        <h3>{movie.title}</h3>
        <Score />
        <div className="btn btn-primary mt-4">Avaliar</div>
      </div>
    </div>
  );
}

export default Movies;

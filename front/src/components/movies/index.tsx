import Score from "components/score";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import "./styles.css";

type Props = {
  movie: Movie;
};
function Movies({ movie }: Props) {
  return (
    <div className="movie-container">
      <img className="w-100 rounded-top" src={movie.image} alt={movie.title} />
      <div className="d-flex flex-column align-items-center p-3">
        <h3>{movie.title}</h3>
        <Score />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary mt-4">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default Movies;

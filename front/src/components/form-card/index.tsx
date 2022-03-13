import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import "./styles.css";

type Props = {
  movieId: string;
};

function FormCard({ movieId }: Props) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((res) => {
      setMovie(res.data);
    });
  }, [movieId]);

  return (
    <div className="form-container">
      <img
        className="w-100 rounded-top"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="d-flex flex-column align-items-center p-4">
        <h3 className="fs-3 text-center fw-bold">{movie?.title}</h3>
        <form className="w-100">
          <div className="form-group mb-4">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-select" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
            </Link>
            <Link to="/">
              <button className="btn btn-light">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCard;

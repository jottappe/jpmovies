import { Link } from "react-router-dom";
import "./styles.css";

function Form() {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="form-container">
      <img className="w-100 rounded-top" src={movie.image} alt={movie.title} />
      <div className="d-flex flex-column align-items-center p-3">
        <h3 className="fs-3 text-center fw-bold">{movie.title}</h3>
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

export default Form;

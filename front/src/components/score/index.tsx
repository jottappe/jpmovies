import Stars from "components/stars";
import "./styles.css";

function Score() {
  const score = 3.5;
  const count = 13;

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="m-0 fs-4 fw-bold">{score > 0 ? score.toFixed(1) : "-"}</p>
      <Stars />
      <p className="score-count">{count} avaliações</p>
    </div>
  );
}

export default Score;

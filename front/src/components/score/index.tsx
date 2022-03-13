import Stars from "components/stars";
import "./styles.css";

type Props = {
  score: number;
  count: number;
};

function Score({ score, count }: Props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className="m-0 fs-4 fw-bold">{score > 0 ? score.toFixed(1) : "-"}</p>
      <Stars score={score} />
      <p className="score-count">{count} avaliações</p>
    </div>
  );
}

export default Score;

import "./styles.css";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";

function Pagination() {
  return (
    <div className="d-flex align-items-center justify-content-center py-3">
      <div className="page-box d-flex justify-content-between align-items-center">
        <button
          className="page-btn d-flex justify-content-center align-items-center"
          disabled={true}
        >
          <Arrow />
        </button>
        <p className="page-leg m-0">{`${1} de ${3}`}</p>
        <button
          className="page-btn d-flex justify-content-center align-items-center"
          disabled={false}
        >
          <Arrow className="right-arrow" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;

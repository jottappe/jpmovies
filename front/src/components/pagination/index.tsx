import "./styles.css";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";
import { MoviePage } from "types/movie";

type Props = {
  page: MoviePage;
  onChange: Function;
};

function Pagination({ page, onChange }: Props) {
  return (
    <div className="d-flex align-items-center justify-content-center py-4">
      <div className="page-box d-flex justify-content-between align-items-center">
        <button
          className="page-btn d-flex justify-content-center align-items-center"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p className="page-leg m-0">{`${page.number + 1} de ${
          page.totalPages
        }`}</p>
        <button
          className="page-btn d-flex justify-content-center align-items-center"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow className="right-arrow" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;

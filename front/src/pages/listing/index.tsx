import axios from "axios";
import Movies from "components/movies";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 2,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
      .then((res) => {
        const data = res.data as MoviePage;
        // setPageNumber(data.number);
        setPage(data);
      });
  }, [pageNumber]);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div
              key={movie.id}
              className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3"
            >
              <Movies movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;

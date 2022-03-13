import axios from "axios";
import Movies from "components/movies";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movie?size=12&page=1`).then((res) => {
      const data = res.data as MoviePage;
      setPageNumber(data.number);
    });
  }, []);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Movies />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;

import Movies from "components/movies";
import Pagination from "components/pagination";

function Listing() {
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

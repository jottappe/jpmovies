import { ReactComponent as FullStar } from "assets/images/full-star.svg";
import { ReactComponent as HalfStar } from "assets/images/half-star.svg";
import { ReactComponent as EmptyStar } from "assets/images/empty-star.svg";

function Stars() {
  return (
    <div className="stars-container">
      <FullStar />
      <FullStar />
      <FullStar />
      <HalfStar />
      <EmptyStar />
    </div>
  );
}

export default Stars;

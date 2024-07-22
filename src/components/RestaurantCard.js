import { Link } from "react-router-dom"; // Provides 'to' route -> when clicked the URL changes to it
import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  id,
  name = "",
  imageId = "",
  cuisines = [],
  rating = "",
}) => {
  return (
    <Link
      to={"/restaurant/" + id}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="card">
        <img src={IMG_CDN_URL + imageId} />
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{rating} stars</h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;

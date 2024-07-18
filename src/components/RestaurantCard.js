import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name = "",
  imageId = "",
  cuisines = [],
  rating = "",
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{rating} stars</h5>
    </div>
  );
};

export default RestaurantCard;

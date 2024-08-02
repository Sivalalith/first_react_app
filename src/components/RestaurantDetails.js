import { useParams } from "react-router-dom"; // to read dynamic URL params
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./ShimmerUI";
import useRestaurantInfo from "../utils/useRestaurantInfo";

// individual restaurant info
const RestaurantDetails = () => {
  const params = useParams();
  const id = params.resId;

  const restaurantInfoJson = useRestaurantInfo(id);

  // in initial render -> show
  if (!restaurantInfoJson) {
    return <Shimmer items={1} />;
  }

  // restaurant basic info and menu info
  const restaurantBasicDetails =
    restaurantInfoJson?.data?.cards[2]?.card?.card?.info;

  const restaurantMenu =
    restaurantInfoJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[2]?.card?.card?.itemCards;

  return (
    <div className="flex">
      <div className="ml-2 mr-6">
        <h1>Restaurant id: {id}</h1>
        <h2 className="font-bold">{restaurantBasicDetails.name}</h2>
        <img
          src={IMG_CDN_URL + restaurantBasicDetails.cloudinaryImageId}
          className="w-[300px]"
        />
        <h3>{restaurantBasicDetails.areaName}</h3>
        <h3>{restaurantBasicDetails.cuisines.join(", ")}</h3>
        <h3>{restaurantBasicDetails.costForTwoMessage}</h3>
        <h3>{restaurantBasicDetails.avgRating + " stars"}</h3>
      </div>
      <div className="m-2">
        <h1 className="font-bold">Menu</h1>
        <ul>
          {restaurantMenu.map((item, value) => {
            console.log(item.card.info.name);
            return <li key={value}>{item.card.info.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // to read dynamic URL params
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./ShimmerUI";
import { FETCH_RESTAURANT_INFO_URL } from "../constants";

// individual restaurant info
const RestaurantDetails = () => {
  const params = useParams();
  const id = params.resId;

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo(FETCH_RESTAURANT_INFO_URL + id);
  }, []);

  async function getRestaurantInfo(url) {
    const data = await fetch(url);
    const json = await data.json();

    setRestaurantInfo(json);
  }

  // in initial render -> show
  if (!restaurantInfo) {
    return <Shimmer items={1} />;
  }

  // restaurant basic info and menu info
  return (
    <div className="restaurant-info">
      <div className="restaurant-detailed-info">
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurantInfo?.data?.cards[2]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurantInfo?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          className="restaurant-img"
        />
        <h3>{restaurantInfo?.data?.cards[2]?.card?.card?.info?.areaName}</h3>
        <h3>
          {restaurantInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(
            ", "
          )}
        </h3>
        <h3>
          {restaurantInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
        </h3>
        <h3>
          {restaurantInfo?.data?.cards[2]?.card?.card?.info?.avgRatingString +
            " stars"}
        </h3>
      </div>
      <div className="restaurant-menu-info">
        <h1 style={{ marginLeft: "20px" }}>Menu</h1>
        <ul>
          {restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (item, value) => {
              console.log(item.card.info.name);
              return <li key={value}>{item.card.info.name}</li>;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;

import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_INFO_URL } from "../constants";

const useRestaurantInfo = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo(FETCH_RESTAURANT_INFO_URL + id);
  }, []);

  async function getRestaurantInfo(url) {
    const data = await fetch(url);
    const json = await data.json();

    setRestaurantInfo(json);
  }

  return restaurantInfo;
};

export default useRestaurantInfo;

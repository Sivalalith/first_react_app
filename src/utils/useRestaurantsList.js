import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_LIST_URL } from "../constants";

const useRestaurantsList = () => {
  // local state variables to hold data between renders
  const [searchText, setSearchText] = useState("");
  const [viewRestaurants, setViewRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // executes callback func. only once after initial render (here, fetching restaurants data from Swiggy public API)
  useEffect(() => {
    getData(FETCH_RESTAURANTS_LIST_URL);
  }, []);

  // func to fetch data from given URL
  async function getData(url) {
    const data = await fetch(url);
    const json = await data.json();

    const restaurantJson =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurantJsonInfo = restaurantJson.map(
      (restaurant) => restaurant.info
    );

    setAllRestaurants(restaurantJsonInfo);
    setViewRestaurants(restaurantJsonInfo);
  }

  return [
    searchText,
    setSearchText,
    allRestaurants,
    viewRestaurants,
    setViewRestaurants,
  ];
};

export default useRestaurantsList;

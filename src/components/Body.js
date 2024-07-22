import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { FETCH_RESTAURANTS_LIST_URL } from "../constants";

// filter the restaurants to find one matching the 'searchInput'
function filterData(searchInput, restaurants) {
  const filteredRestaurantList = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchInput)
  );
  return filteredRestaurantList;
}

// Body component
const Body = () => {
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

  // conditional rendering
  if (allRestaurants.length === 0) {
    return (
      <>
        {/* search container */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // filter the data
              const data = filterData(searchText, allRestaurants);
              // set the state - restaurants
              setViewRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        {/* Shimmer UI (to be displayed before initial render -> for UX reasons) */}
        <Shimmer items={20} />
      </>
    );
  } else {
    return (
      <>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // filter the data
              const data = filterData(searchText, allRestaurants);
              // set the state - restaurants
              setViewRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        {/* restaurant cards */}
        <div className="card-list">
          {viewRestaurants.length === 0 ? (
            <h1>No restaurants matched with your filter!</h1>
          ) : (
            viewRestaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  id={restaurant.id}
                  name={restaurant.name}
                  imageId={restaurant.cloudinaryImageId}
                  cuisines={restaurant.cuisines}
                  rating={restaurant.avgRatingString}
                  key={restaurant.id}
                />
              );
            })
          )}
        </div>
      </>
    );
  }
};

export default Body;

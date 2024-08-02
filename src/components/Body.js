import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

// filter the restaurants to find one matching the 'searchInput'
function filterData(searchInput, restaurants) {
  const filteredRestaurantList = restaurants.filter((restaurant) =>
    restaurant?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
  return filteredRestaurantList;
}

// Body component
const Body = () => {
  const [
    searchText,
    setSearchText,
    allRestaurants,
    viewRestaurants,
    setViewRestaurants,
  ] = useRestaurantsList();

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 You are currently offline! Please reconnect.</h1>;
  }

  const { user, setUser } = useContext(UserContext);

  // conditional rendering
  if (allRestaurants.length === 0) {
    return (
      <>
        {/* search container */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="mx-4 border-solid border-black"
          ></input>
          <button
            onClick={() => {
              // filter the data
              const data = filterData(searchText, allRestaurants);
              // set the state - restaurants
              setViewRestaurants(data);
            }}
            className="mx-4 border-solid px-2 py-1 bg-blue-600 rounded text-white"
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
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="mx-4 border-solid border-black"
          ></input>
          <button
            onClick={() => {
              // filter the data
              const data = filterData(searchText, allRestaurants);
              // set the state - restaurants
              setViewRestaurants(data);
            }}
            className="mx-4 border-solid px-2 py-1 bg-blue-600 rounded text-white"
          >
            Search
          </button>
          <input
            className="p-2"
            value={user.name}
            onChange={(e) => {
              setUser({ name: e.target.value, email: "new@email.com" });
            }}
          ></input>
        </div>
        {/* restaurant cards */}
        <div className="flex flex-wrap">
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

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnline from "../utils/useOnline";

// filter the restaurants to find one matching the 'searchInput'
function filterData(searchInput, restaurants) {
  const filteredRestaurantList = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchInput)
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

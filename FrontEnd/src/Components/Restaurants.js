import { API_URL } from "../Constants/constants";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurants = ({ searchText }) => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [topRatedRestaurants, setTopRatedRestaurants] = useState(false);
  const isOnline = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    const restaurants =
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

    setAllRestaurants(restaurants);
  };

  const restaurantsToDisplay = topRatedRestaurants
    ? allRestaurants.filter(
        (restaurant) => Number(restaurant?.info?.avgRating) > 4.4,
      )
    : allRestaurants;

  if (!isOnline) {
    return (
      <div>
        <h1>
          Seems like you are offline. Please check your internet connection!
        </h1>
      </div>
    );
  } else if (allRestaurants === null) {
    return <Shimmer />;
  }

  return (
    <>
      <button
        className="filter-btn"
        onClick={() => {
          setTopRatedRestaurants((prevState) => !prevState);
        }}
      >
        {topRatedRestaurants
          ? "Show All Restaurants"
          : "Show Top Rated Restaurants"}
      </button>
      <div className="restaurants-container">
        {restaurantsToDisplay.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.promoted? 
            (<RestaurantCardPromoted resData={restaurant}/>): 
            (<RestaurantCard resData={restaurant} />)}            
          </Link>
        ))}
      </div>
    </>
  );
};
export default Restaurants;

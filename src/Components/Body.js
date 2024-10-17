import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockfile";

export default Body = () => {
  const [restaurantList, setRestaurantList] = useState(resObj);

  return (
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log("first", filteredRestaurants);
            setRestaurantList(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

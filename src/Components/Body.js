import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import resObj from "../utils/mockfile";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_MAIN_API } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_MAIN_API);

    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!onlineStatus) {
    return (
      <h1>
        Looks like your internet connection is broken!! Please check your
        connection.
      </h1>
    );
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className=" flex items-center justify-center ">
        <div className="m-4 flex items-center w-auto px-4">
          <input
            type="text"
            className="border-2 border-black w-72 rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="px-4 py-2 m-4 bg-green-100 rounded-lg border border-black">
            <button
              onClick={() => {
                const filteredSearch = restaurantList.filter((res) =>
                  res.info?.name.toLowerCase().includes(searchText)
                );
                setFilteredRestaurants(filteredSearch);
              }}
            >
              search
            </button>
          </div>
        </div>
        <div className="px-4 py-2 m-4 bg-green-100 rounded-lg border border-black">
          <button
            onClick={() => {
              const filteringRes = restaurantList.filter(
                (res) => res.info.avgRating > 4.5
              );
              setRestaurantList(filteringRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

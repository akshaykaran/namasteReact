import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resObj from "../utils/mockfile";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_MAIN_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("restaurantList", restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText) {
      const optimizedSearch = setTimeout(() => {
        const filtered = restaurantList.filter((restaurant) =>
          restaurant?.info?.name
            .toLowerCase()
            .includes(searchText.toLowerCase())
        );

        setFilteredRestaurants(filtered);
      }, 1000);
      return () => clearTimeout(optimizedSearch);
    } else {
      setRestaurantList(restaurantList);
    }
  }, [searchText, restaurantList]);

  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:5000/swiggy-data");
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurantList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!onlineStatus) {
    return (
      <h1 className="flex justify-center text-9xl font-bold tracking-tighter  border-8 border-white">
        Looks like your internet connection is broken!! Please check your
        connection.
      </h1>
    );
  }

  return (
    <div>
      <div className=" flex items-center justify-center h-36 p-10 bg-gray-800">
        <div className=" flex items-center w-2/3 px-4">
          <input
            type="text"
            placeholder="Enter Restaurant Name to Search"
            className="px-8 py-3 m-4 border-2 border-black rounded-xl w-full"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-8 py-3 m-4 font-bold text-black rounded-xl bg-white transition-all duration-300 ease-in-out hover:bg-orange-500 hover:scale-105 hover:shadow-lg"
            // onClick={() => {
            //   const filteredSearch = restaurantList.filter((res) =>
            //     res.info?.name.toLowerCase().includes(searchText)
            //   );
            //   setFilteredRestaurants(filteredSearch);
            // }}
          >
            Search
          </button>
        </div>
        <div className="w-1/3 flex justify-end">
          <button
            className="px-8 py-3 m-4 font-bold text-black rounded-xl bg-white transition-all duration-300 ease-in-out hover:bg-orange-500 hover:scale-105 hover:shadow-lg"
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
      <div>
        {searchText.length > 0 ? (
          <div>
            {filteredRestaurants.length > 0 ? (
              <div className="w-full flex justify-center items-center flex-wrap">
                {filteredRestaurants.map((restaurant) => {
                  return (
                    <Link
                      key={restaurant.info.id}
                      to={"/restaurants/" + restaurant.info.id}
                    >
                      <RestaurantCard
                        resData={restaurant}
                        key={restaurant?.info?.id}
                      />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <Shimmer />
            )}
          </div>
        ) : (
          <div>
            {restaurantList.length > 0 ? (
              <div className="w-full flex justify-center items-center flex-wrap">
                {restaurantList.map((restaurant) => {
                  return (
                    <Link
                      key={restaurant.info.id}
                      to={"/restaurants/" + restaurant.info.id}
                    >
                      <RestaurantCard
                        resData={restaurant}
                        key={restaurant?.info?.id}
                      />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <Shimmer />
            )}
          </div>
        )}

        {/* {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))} */}
        {/* {Array.isArray(filteredRestaurants) &&
        filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <Shimmer />
        )} */}
      </div>
    </div>
  );
};

export default Body;

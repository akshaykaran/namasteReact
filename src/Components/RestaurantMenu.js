import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resid } = useParams();

  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <Shimmer />;

  const { name } = resInfo?.cards[2]?.card?.card?.info || "Restaurant name";

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;

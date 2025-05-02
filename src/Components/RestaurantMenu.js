import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(0);
  const { resid } = useParams();

  const resInfo = useRestaurantMenu(resid);

  if (resInfo === null) return <Shimmer />;

  const { name } = resInfo?.cards[2]?.card?.card?.info || "Restaurant name";

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center my-6">
      <h1 className="font-bold text-5xl border-b-4 border-orange-500">
        {name}
      </h1>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={index}
          showItemsList={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;

import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItemsList, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-6 cursor-pointer rounded-lg"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>{"🔽"}</span>
        </div>

        {showItemsList && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

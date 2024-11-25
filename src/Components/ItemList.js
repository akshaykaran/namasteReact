import React from "react";
import { CARD_IMG } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between border-b-2 border-gray-300"
        >
          <div className="text-left w-9/12 py-2">
            <div>
              <span className="font-bold my-2">{item?.card?.info?.name}</span>
              <span> -₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-sm my-4">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12">
            <button
              className="bg-black text-white m-2 p-2 rounded-lg absolute shadow-lg"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img
              src={CARD_IMG + item?.card?.info?.imageId}
              className="w-36 h-32 p-2 m-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

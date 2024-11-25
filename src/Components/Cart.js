import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center font-bold m-4 p-4 ">
      <div className="flex justify-center items-center mx-40">
        <h1 className="mr-96">Cart</h1>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1 className="mt-10">Add items to the cart! The Cart is empty</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

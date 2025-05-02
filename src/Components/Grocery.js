import React from "react";
import groceries from "../assets/images/groceries1.jpg";

function Grocery() {
  return (
    <div className="m-4 flex justify-center items-center">
      <img src={groceries} alt="groceries" className="h-[29rem]" />
      <p className=" text-7xl font-bold tracking-tighter">
        Our veggies are still checking out... <br />
        Page under construction!
      </p>
    </div>
  );
}

export default Grocery;

import React from "react";
import Body from "./Body";
import veggie from "../assets/images/Veggies_new.png";
import sushi from "../assets/images/Sushi_replace.png";
import cardimg1 from "../assets/images/cardimg1.png";
import cardimg2 from "../assets/images/cardimg2.png";
import cardimg3 from "../assets/images/cardimg3.png";

function Home() {
  return (
    <div className="bg-orange-500 h-dvh ">
      <div className="flex pt-10">
        <div className="w-1/3 mx-20">
          <p className="flex justify-center text-9xl font-bold tracking-tighter  border-8 border-white">
            Order food. Discover best restaurants. Call your Pantry!
          </p>
        </div>

        <div className="w-2/3 flex-col">
          <img
            src={cardimg1}
            alt="food"
            className="size-96 transition-all duration-300 hover:scale-105 "
          />
          <img
            src={cardimg2}
            alt="food"
            className="size-96 transition-all duration-300 hover:scale-105 "
          />
        </div>
        <img
          src={cardimg3}
          alt="food"
          className="size-96 mt-48 mr-10 transition-all duration-300 hover:scale-105 "
        />
      </div>
      <Body />
    </div>
  );
}

export default Home;

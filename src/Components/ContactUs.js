import React from "react";
import order from "../assets/images/order.jpg";

function ContactUs() {
  return (
    <div
      style={{ backgroundImage: `url(${order})` }}
      className="h-[30rem]  text-center"
    >
      <h1 className="font-bold text-5xl m-4 p-4">Contact Us</h1>
      <div className="flex justify-center border border-black p-10 m-10 bg-slate-50 bg-opacity-70 rounded-xl">
        <form>
          <input
            type="text"
            className="border border-black m-4 p-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-black m-4 p-2"
            placeholder="Message"
          />
          <button className="px-8 py-3 m-4 font-bold text-white rounded-xl bg-black transition-all duration-300 ease-in-out hover:bg-orange-500 hover:scale-105 hover:shadow-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

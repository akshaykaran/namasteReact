import React from "react";

function ContactUs() {
  return (
    <div>
      <h1 className="font-bold text-2xl m-4 p-4">Contact Us</h1>
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
        <button className="border border-black m-4 p-2 rounded-lg bg-gray-200">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;

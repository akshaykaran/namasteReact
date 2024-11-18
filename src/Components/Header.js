import { LOGO_IMG } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginName, setLoginName] = useState("LOGIN");

  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <div className="flex justify-between items-center bg-pink-100 shadow-lg h-24 ">
        <img className="w-28 h-20 ml-4" src={LOGO_IMG} alt="Company logo" />
        <ul className="flex items-center m-4">
          <li className="p-4 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="p-4 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100">
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li className="p-4 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100">
            Cart
          </li>
          <button
            className="px-4 py-2 m-4 bg-blue-300 font-bold rounded-lg border border-black hover:border-2 ease-in-out duration-100 "
            onClick={() =>
              loginName === "LOGIN"
                ? setLoginName("LOGIN")
                : setLoginName("LOGOUT")
            }
          >
            {loginName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

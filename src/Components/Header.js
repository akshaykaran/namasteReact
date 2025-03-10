// import { LOGO_IMG } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logo_ub from "../assets/images/logo-UB.png";

const Header = () => {
  const [loginName, setLoginName] = useState("Logout");

  const { loggedinUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartItems", cartItems);

  return (
    <div className="sticky top-0">
      <div className="flex justify-between items-center bg-orange-500 shadow-lg h-24 px-20">
        <div className="flex text-white p-4 m-4 items-end h-24 w-1/3">
          <img className="w-28 h-20 ml-4" src={logo_ub} alt="Company logo" />
          <p className="font-extrabold">URBAN PANTRY</p>
        </div>
        <div className=" h-24 w-2/3 m-4">
          <div className="flex list-none justify-end mr-36">
            <li className="px-4 py-2 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100 text-white h-10">
              User Name: {loggedinUser}
            </li>
            <li className="p-2 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100 text-white h-10 mr-3">
              {onlineStatus ? "Online 🟢" : "Offline 🔴"}
            </li>
          </div>
          <div className="flex justify-end h-12 tracking-wider">
            <ul className="flex items-center">
              <li className="px-4 py-2 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100 text-white text-xl">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 py-2 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100 text-white text-xl">
                <Link to="/about">About</Link>
              </li>
              <li className="px-4 py-2 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100 text-white text-xl">
                <Link to="/contacts">Contact Us</Link>
              </li>
              <li className="px-4 py-2 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100 text-white text-xl">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="px-4 py-2 font-bold hover:border-b-4 border-red-700 ease-in-out duration-100 text-white text-xl">
                <Link to="/cart">Cart \{cartItems.length}/</Link>
              </li>
              <button
                className="px-8 py-3 m-4 font-bold text-white rounded-xl bg-black transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
                onClick={() =>
                  loginName === "Login"
                    ? setLoginName("Logout")
                    : setLoginName("Login")
                }
              >
                {loginName}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

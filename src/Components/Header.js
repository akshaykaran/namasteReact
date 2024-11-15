import { LOGO_IMG } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginName, setLoginName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <div className="header-container">
        <img className="company-logo" src={LOGO_IMG} alt="Company logo" />
        <ul className="nav-items">
          <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              loginName === "login"
                ? setLoginName("logout")
                : setLoginName("login")
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

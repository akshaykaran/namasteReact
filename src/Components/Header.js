import { LOGO_IMG } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginName, setLoginName] = useState("Login");

  return (
    <div>
      <div className="header-container">
        <img className="company-logo" src={LOGO_IMG} alt="Company logo" />
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
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

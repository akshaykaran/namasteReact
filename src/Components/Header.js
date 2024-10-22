import { LOGO_IMG } from "../utils/Constants";
import { useState } from "react";

const Header = () => {
  const [loginName, setLoginName] = useState("Login");

  return (
    <div>
      <div className="header-container">
        <img className="company-logo" src={LOGO_IMG} alt="Company logo" />
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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

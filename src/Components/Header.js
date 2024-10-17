import { LOGO_IMG } from "../utils/Constants";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <img className="company-logo" src={LOGO_IMG} alt="Company logo" />
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

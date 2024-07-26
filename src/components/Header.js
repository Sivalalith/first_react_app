import { Link } from "react-router-dom"; // Provides 'to' route -> when clicked the URL changes to it

// header component
const Header = () => {
  return (
    <div className="header">
      <img src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

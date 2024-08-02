import { Link } from "react-router-dom"; // Provides 'to' route -> when clicked the URL changes to it

// header component
const Header = () => {
  return (
    <div className="flex justify-between mb-6">
      <img
        src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg"
        className="h-20 mx-4 mt-2"
      />
      <div className="flex items-center p-2 mr-20">
        <ul className="flex">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <Link className="px-2">Login</Link>
      </div>
    </div>
  );
};

export default Header;

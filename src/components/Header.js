import { Link } from "react-router-dom"; // Provides 'to' route -> when clicked the URL changes to it
import { useSelector } from "react-redux";

// header component
const Header = () => {
  // selecting only a part of store to which we are subscribing i.e. "cart.items"
  const cartItems = useSelector((appStore) => appStore.cart.items);

  return (
    <div className="flex justify-between mb-6 bg-green-100 shadow-lg">
      <img
        src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg"
        className="h-28 w-28 mb-1"
      />
      {/* navbar items -> Home, About Us, Contact Us and Instamart */}
      <div className="flex items-center p-2">
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
        <Link to="/cart" className="px-5">
          Cart🛒 - {cartItems.length} items
        </Link>
        <Link className="px-5">Login</Link>
      </div>
    </div>
  );
};

export default Header;

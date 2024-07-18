import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header (Navbar)
 * - Logo
 * - Nav links (ul)
 *   - Home
 *   - About Us
 *   - Contact Us
 *
 * Body
 * - Restaurant List (ul)
 *   - Restaurant cards
 *     - Image
 *     - Name
 *     - Cuisine tags
 *     - Rating
 *
 * Footer
 * - Links
 *
 */

// app layout component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// root element set -> from here React works (like an entry point to the UI)
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the app layout on to the screen
root.render(<AppLayout />);

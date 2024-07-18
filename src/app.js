import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // to configure routes for our app

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

// the configuration for routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

// root element set -> from here React works (like an entry point to the UI)
const root = ReactDOM.createRoot(document.getElementById("root"));

// render a layout on to the screen according to the route
root.render(<RouterProvider router={router} />);

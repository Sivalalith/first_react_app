import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // to configure routes for our app
import RestaurantDetails from "./components/RestaurantDetails";

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
      <Outlet />
      <Footer />
    </>
  );
};

// the configuration for routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

// root element set -> from here React works (like an entry point to the UI)
const root = ReactDOM.createRoot(document.getElementById("root"));

// render a layout on to the screen according to the route
root.render(<RouterProvider router={router} />);

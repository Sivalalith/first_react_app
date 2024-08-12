import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // to configure routes for our app
import RestaurantDetails from "./components/RestaurantDetails";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; // to "provide" access to our main redux store
import store from "./utils/appStore"; // our main redux store

// lazy-load the component only when required/called
const Instamart = lazy(() => {
  return import("./components/Instamart");
});

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
  // dummy user info
  const [user, setUser] = useState({
    name: "Lalith",
    email: "lalith@email.com",
  });
  return (
    // access to the redux store provided to entire app by enclosing the entire "app" within it
    <Provider store={store}>
      {/* passing user info to be available to required components without 'prop drilling' */}
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

// the configuration for routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      //nested routing
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
      {
        path: "instamart",
        element: (
          <Suspense fallback={<p>Loading... 🔃</p>}>
            {/*fallback UI is displayed until the Instamart component is lazy-loaded */}
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// root element set -> from here React works (like an entry point to the UI)
const root = ReactDOM.createRoot(document.getElementById("root"));

// render a layout on to the screen according to the route
root.render(<RouterProvider router={router} />);

import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";

const About2 = () => {
  return (
    <div className="about">
      <h1>About Us page</h1>
      <h2>Welcome to the About Us page.</h2>
      <p>Here you can find info about us. Will update soon....🔜</p>
      <Outlet />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About-constructor");
  }

  componentDidMount() {
    console.log("About-componentDidMount");
  }

  render() {
    console.log("About-render");
    return (
      <div className="about">
        <h1>About Us page</h1>
        <h2>Welcome to the About Us page.</h2>
        <p>Here you can find info about us. Will update soon....🔜</p>
        <Outlet />
      </div>
    );
  }
}

export default About;

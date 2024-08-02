import { Outlet } from "react-router-dom";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
          {({ user }) => (
            <p>
              {user.name}-{user.email}
            </p>
          )}
        </UserContext.Consumer>
        <Outlet />
      </div>
    );
  }
}

export default About;

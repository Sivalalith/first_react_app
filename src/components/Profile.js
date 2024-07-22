import { useEffect, useState } from "react";
import React from "react";

const Profile2 = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo("https://api.github.com/users/sivalalith");
  }, []);

  async function getUserInfo(url) {
    const data = await fetch(url);
    const json = await data.json();
    setUserInfo(json);
  }

  return (
    <div>
      <h2>Profile section</h2>
      {console.log(userInfo.login, userInfo.avatar_url, userInfo.public_repos)}
      <h3>Name: {userInfo.login}</h3>
      <img
        src={userInfo.avatar_url}
        style={{ height: "200px", width: "200px" }}
      />
      <h3>Number of public repos: {userInfo.public_repos}</h3>
    </div>
  );
};

// user profile info fetched from Github
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    this.getUserInfo = this.getUserInfo.bind(this);
    console.log("Profile-constructor");
  }

  componentDidMount() {
    console.log("Profile-componentDidMount");
    this.getUserInfo("https://api.github.com/users/sivalalith");
  }

  async getUserInfo(url) {
    const data = await fetch(url);
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentWillUnmount() {
    console.log("Profile - componentWillUnmount");
  }

  render() {
    console.log("Profile-render");
    return (
      <div>
        <h2>Profile section</h2>
        <h3>Name: {this.state.userInfo.login}</h3>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Number of public repos: {this.state.userInfo.public_repos}</h3>
      </div>
    );
  }
}

export default Profile;

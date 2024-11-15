import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        avatar_url: "https://dummyphoto.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaykaran");
    const json = await data.json();

    console.log("json", json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="userCard">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>location: {location}</h3>
        <h4>Contact: @akshayVinayak</h4>
      </div>
    );
  }
}

export default UserClass;

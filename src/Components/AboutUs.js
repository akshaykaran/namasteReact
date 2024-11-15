import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("component Did mount Parent");
  }

  render() {
    return (
      <div className="about-container">
        AboutUs
        {/* <User /> */}
        <UserClass />
      </div>
    );
  }
}

export default AboutUs;

// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";

// class AboutUs extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     console.log("component Did mount Parent");
//   }

//   render() {
//     return (
//       <div className="about-container">
//         AboutUs
//         {/* <User /> */}
//         <UserClass />
//       </div>
//     );
//   }
// }

// export default AboutUs;

import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [userInfo, setUserInfo] = useState({
    name: "dummy name",
    location: "dummy location",
    avatar_url: "https://dummyphoto.com",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetch("https://api.github.com/users/akshaykaran");
      const json = await data.json();
      console.log("json", json);
      setUserInfo(json);
    };

    fetchUserData();
  }, []);
  const { name, location, avatar_url } = userInfo;
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-5xl m-4 p-4 ">About Us</h1>
      </div>

      <div className="flex gap-12 p-10 justify-center items-center">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-56 h-56 p-2 rounded-full border-2 border-black"
        />
        <h1 className="border-2 border-black rounded-2xl p-2">
          Creator: {name}
        </h1>
        <h3 className="border-2 border-black rounded-2xl p-2">
          location: {location}
        </h3>
        <h4 className="border-2 border-black rounded-2xl p-2">
          Contact: akshaykaran2@gmail.com
        </h4>
      </div>
    </div>
  );
};

export default AboutUs;

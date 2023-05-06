import React from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserHome from "../../components/UserHome/UserHome";
function Homepage() {
  return (
    <React.Fragment>
      <UserNavbar />
      <UserHome/>
    </React.Fragment>
  );
}

export default Homepage;

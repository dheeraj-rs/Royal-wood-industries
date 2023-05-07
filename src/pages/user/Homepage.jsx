import React from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserShoplist from "../../components/UserShoplist/UserShoplist";
import UserBanner from "../../components/UserBanner/UserBanner";
function Homepage() {
  return (
    <React.Fragment>
      <UserNavbar />
      <UserBanner/>
      <UserShoplist/>
    </React.Fragment>
  );
}

export default Homepage;

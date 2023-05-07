import React from "react";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeShoplist from "../../components/HomeShoplist/HomeShoplist";
import HomeService from "../../components/HomeService/HomeService";
import HomeCopyright from "../../components/HomeCopyright/HomeCopyright";
function Homepage() {
  return (
    <React.Fragment>
      <HomeNavbar />
      <HomeBanner />
      <HomeShoplist />
      <HomeService/>
      <HomeCopyright/>
    </React.Fragment>
  );
}

export default Homepage;

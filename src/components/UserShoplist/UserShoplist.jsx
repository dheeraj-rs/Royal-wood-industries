import ShoplistContainer from "./ShoplistContainer"
import Shoplistnav from "./Shoplistnav"

function UserShoplist() {
  return (
    <div className=" w-screen h-auto border-b-2 flex flex-col items-center justify-center ">
      <Shoplistnav />
      <ShoplistContainer />
    </div>
  )
}

export default UserShoplist
import BannerContainer from "./BannerContainer"
import BannerCount from "./BannerCount"

function UserBanner() {
    return (
         <div className=" w-screen h-[93vh] flex justify-center text-[14px]">
            <BannerContainer />
            <BannerCount />
        </div>
    )
}

export default UserBanner
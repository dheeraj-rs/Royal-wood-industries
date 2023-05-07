import slide from "../../assets/slide1.png";
function BannerContainer() {
    return (
        <div className="w-[88%] h-[73%] bg-white mt-[100px] z-40">
            <div className="w-[100%] h-[100%] bg-[#9292921f] flex">
                <div className=" w-[50%] h-full flex flex-col justify-end items-center">
                    <div className=" w-[80%] h-[33%]">
                        <p className=" text-[30px] leading-3 tracking-[2px]">THINK DIFFDRENT.</p>
                        <p className="pt-10 text-[#929292cb]">Royal is a unique & captivating theme designed</p>
                        <p className="text-[#929292cb]">specificaly for all type of shops and online store.</p>
                    </div>
                </div>
                <div className=" w-[50%] h-full flex items-center justify-center">
                    <img src={slide} alt="" className=" w-[423px] h-[452px]" />
                </div>
            </div>
        </div>
    )
}

export default BannerContainer
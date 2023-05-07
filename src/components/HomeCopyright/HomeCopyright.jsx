import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function HomeCopyright() {
    return (
        <div className=" w-screen h-[7vh] border-t-2 flex">
            <div className=" w-[50%] h-full flex items-center text-[13px]">
                <p className=" pl-16">Copyright @ Royalwood insdustry works. Made wtih by Dheeraj.</p>
            </div>
            <div className="w-[50%] h-full flex justify-end pr-16 items-center gap-5 text-[13px] ">
                <p>Follow Us</p>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
            </div>
        </div>
    )
}

export default HomeCopyright
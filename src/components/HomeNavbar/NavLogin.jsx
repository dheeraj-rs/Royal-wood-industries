import { HeartIcon, UserIcon } from '@heroicons/react/24/outline'
function NavLogin() {
    return (
        <div className=" w-[25%] h-[100%]">
            <ul className=" w-full h-full flex gap-5 items-center text-[13px] tracking-[.5px] font-semibold pl-10">
                <li className=' flex items-center gap-1'>CART <span className=' text-[10px] mb-[-5px]'>({'$0'})</span></li>
                <li className=' flex items-center gap-1'><HeartIcon className=" h-5 w-5" aria-hidden="true" /><span className=' text-[10px] mb-[-5px]'>({'1'})</span></li>
                <li className=' flex items-center'><button type='submit' className="flex w-full justify-center leading-5 gap-1"><UserIcon className="h-5 w-5" />LOGIN</button></li>
            </ul>
        </div>
    )
}

export default NavLogin
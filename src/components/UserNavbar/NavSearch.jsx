import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
function NavSearch() {
    return (
        <div className="w-[450px] h-[60px] absolute right-0 top-[100px] flex items-center justify-center backdrop-blur-sm">
            <div className=' absolute top-[-60px] right-[30px] visible'><MagnifyingGlassIcon className="h-6 w-6 stroke-[3px] cursor-pointer" aria-hidden="true" /></div>
            <form className="flex gap-3 w-[100%] h-[100%] justify-center items-center" role="search">
                <input className=" w-[100%] h-[80%] p-3 text-[#e2e2e2] outline-none backdrop-blur-sm bg-transparent shadow-md" type="search" placeholder="Search ..." aria-label="Search" />
                <button className=" w-[80px] h-[80%] bg-[#373737] text-white rounded-md text-[13px] shadow-md" type="submit">Search</button>
            </form>
        </div>
    )
}

export default NavSearch
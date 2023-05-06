import NavIogo from './NavIogo'
import NavList from './NavList'
import NavLogin from './NavLogin'
import NavSearch from './NavSearch'
function UserNavbar() {
    return (
        <div className=' w-screen h-[100px] flex items-center justify-center fixed top-0'>
            <div className="w-[90%] h-[100%] text-[#000] flex items-center justify-start relative backdrop-blur-sm shadow-md">
                <NavList />
                <NavIogo />
                <NavLogin />
                <NavSearch />
            </div>  
        </div>
    )
}

export default UserNavbar
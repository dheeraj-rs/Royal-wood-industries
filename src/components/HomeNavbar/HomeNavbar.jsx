import NavIogo from './NavIogo'
import NavList from './NavList'
import NavLogin from './NavLogin'
import NavSearch from './NavSearch'
function HomeNavbar() {
    return (
        <div className=' w-screen h-[100px] flex items-center justify-center fixed top-0 z-[100]'>
            <div className="w-[88%] h-[100%] text-[#000] flex items-center justify-start relative backdrop-blur-sm">
                <NavList />
                <NavIogo />
                <NavLogin />
                <NavSearch />
            </div>  
        </div>
    )
}

export default HomeNavbar
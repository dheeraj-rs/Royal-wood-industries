import { Link} from "react-router-dom"
import LoginCard from "./LoginCard"
import SignupCard from "./SignupCard"

function LoginContainer() {
  return (
    <div className=" w-screen h-screen bg-[#00000086] flex flex-col justify-center items-center fixed top-0 left-0 z-[100]">
      <div className=" w-[300px] h-[50px]  bg-[#ffffffe4] flex">
          <div className="w-[50%] h-full flex items-center justify-center text-[14px] tracking-[2px]"><Link to="/login/switch"><p>LOGIN</p></Link></div>
          <div className="w-[50%] h-full flex items-center justify-center text-[14px] tracking-[2px] bg-[#88888819]"><Link to="/signup/switch"><p>SIGN UP</p></Link></div>
        </div>
         <LoginCard/>
         <SignupCard/>
    </div>
  )
}

export default LoginContainer
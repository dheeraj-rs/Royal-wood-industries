function LoginCard() {
  return (
    <div className=" w-[300px] h-[316px] bg-[#ffffffe4] flex flex-col items-center gap-2">
        <input type="text" placeholder="User Name" className=" w-[240px] h-[50px] mt-8 border border-gray-300 pl-4 text-[13px] outline-gray-300" />
        <input type="text" placeholder="Password" className=" w-[240px] h-[50px] border border-gray-300 pl-4 text-[13px] outline-gray-300" />
        <div className=" w-[240px] h-[30px] flex items-center text-[#929292cb] gap-2"><input type="checkbox" /><p className="text-[13px]">Remember me</p></div>
        <div className=" w-[240px] h-[30px] flex items-center  text-[#929292cb]"><p className="text-[13px]">Lost Your Password?</p></div>
        <button className="w-[240px] h-[56px] bg-[#141414] text-[#e4e4e4] text-[12px] tracking-[2px]">LOGIN</button>
      </div>
  )
}

export default LoginCard
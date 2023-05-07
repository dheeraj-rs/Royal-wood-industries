function SignupCard() {
    return (
        <div className=" w-[300px] h-[491px] bg-[#ffffffe4] flex flex-col items-center gap-2 hidden">
            <input type="text" placeholder="User Name" className=" w-[240px] h-[50px] mt-8 border border-gray-300 pl-4 text-[13px] outline-gray-300" />
            <input type="Email" placeholder="Email" className=" w-[240px] h-[50px] border border-gray-300 pl-4 text-[13px] outline-gray-300" />
            <input type="text" placeholder="Password" className=" w-[240px] h-[50px] border border-gray-300 pl-4 text-[13px] outline-gray-300" />
            <input type="text" placeholder="Repeat Password" className=" w-[240px] h-[50px] border border-gray-300 pl-4 text-[13px] outline-gray-300" />
            <div className=" w-[240px] h-[126px] flex items-start text-[#929292cb] gap-2">
                <p className="text-[14px] leading-6 font-light">Your personal data will be used to
                    support your experience throughout
                    this website, to manage access to
                    your account, and for other purposes
                    described in our <span className="text-[#222222]">privacy policy.</span></p></div>
            <button className="w-[240px] h-[56px] bg-[#141414] text-[#e4e4e4] text-[12px] tracking-[2px]">LOGIN</button>
        </div>
    )
}

export default SignupCard
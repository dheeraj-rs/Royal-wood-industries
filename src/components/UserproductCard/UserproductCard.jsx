import p1 from '../../assets/product-1.jpg'
function UserproductCard() {
  return (
    <div className=" w-[337px] h-[479px] flex-col flex justify-center items-center">
        <div className=" w-[85%] h-[73%] bg-[#9292921f]">
            <img src={p1} alt="" className='w-full h-full' />
        </div>
        <div className="w-[85%] h-[27%] flex flex-col items-center pt-7 text-[13px]">
            <p>DECO ACCESSORY</p>
            <p className='text-[#636363]'>$1300</p>
        </div>
    </div>
  )
}

export default UserproductCard
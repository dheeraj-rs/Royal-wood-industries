import { ChevronDownIcon } from "@heroicons/react/24/outline"

function Shoplistnav() {
  return (
    <div className=" w-[91%] h-[50px] flex ">
      <div className=" w-[92%] h[100%]">
        <ul className="w-full h-full flex gap-10 text-[13px]">
          <li>ALL</li>
          <li>LATEST</li>
          <li>POPULARITY</li>
        </ul>
      </div>
      <div className=" w-[8%] h[100%] flex justify-center"><button className=" flex gap-3 text-[13px]" >FILTER<ChevronDownIcon className="h-3.5 w-3.5 stroke-[2px] cursor-pointer mt-1" /></button></div>
    </div>
  )
}

export default Shoplistnav
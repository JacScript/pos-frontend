import React from 'react'
import { RiDeleteBin2Fill} from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";

const CartInfo = () => {
  return (
    <div className="px-4 py-2">
    <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
      Order Details
    </h1>
    <div className="mt-4 overflow-y-scroll scrollbar-hide h-[280px]">
      <div className="bg-[#050505] rounded-lg p-3 mb-2 ">
        <div className="flex items-center justify-between">
          <h1 className="text-[#ababab] font-semibold tracking-wide tetx-md">
            Wali Maharage
          </h1>
          <p className="text-[#ababab] font-semibold">x2</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer " size={20}/>
            <FaNotesMedical className="text-[#ababab] cursor-pointer " size={20}/>
          </div>
          <p className="text-[#f5f5f5] text-md font-bold">Tsh 2500</p>
        </div>
      </div>

      <div className="bg-[#050505] rounded-lg p-3 mb-2 ">
        <div className="flex items-center justify-between">
          <h1 className="text-[#ababab] font-semibold tracking-wide tetx-md">
            Wali Maharage
          </h1>
          <p className="text-[#ababab] font-semibold">x2</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer " size={20}/>
            <FaNotesMedical className="text-[#ababab] cursor-pointer " size={20}/>
          </div>
          <p className="text-[#f5f5f5] text-md font-bold">Tsh 2500</p>
        </div>
      </div>

      <div className="bg-[#050505] rounded-lg p-3 mb-2 ">
        <div className="flex items-center justify-between">
          <h1 className="text-[#ababab] font-semibold tracking-wide tetx-md">
            Wali Maharage
          </h1>
          <p className="text-[#ababab] font-semibold">x2</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer " size={20}/>
            <FaNotesMedical className="text-[#ababab] cursor-pointer " size={20}/>
          </div>
          <p className="text-[#f5f5f5] text-md font-bold">Tsh 2500</p>
        </div>
      </div>

      <div className="bg-[#050505] rounded-lg p-3 mb-2 ">
        <div className="flex items-center justify-between">
          <h1 className="text-[#ababab] font-semibold tracking-wide tetx-md">
            Wali Maharage
          </h1>
          <p className="text-[#ababab] font-semibold">x2</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer " size={20}/>
            <FaNotesMedical className="text-[#ababab] cursor-pointer " size={20}/>
          </div>
          <p className="text-[#f5f5f5] text-md font-bold">Tsh 2500</p>
        </div>
      </div>

      <div className="bg-[#050505] rounded-lg p-3 mb-2 ">
        <div className="flex items-center justify-between">
          <h1 className="text-[#ababab] font-semibold tracking-wide tetx-md">
            Wali Maharage
          </h1>
          <p className="text-[#ababab] font-semibold">x2</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <RiDeleteBin2Fill className="text-[#ababab] cursor-pointer " size={20}/>
            <FaNotesMedical className="text-[#ababab] cursor-pointer " size={20}/>
          </div>
          <p className="text-[#f5f5f5] text-md font-bold">Tsh 2500</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartInfo
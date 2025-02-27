import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-16 flex justify-around items-center px-2">
      {/* Home Button */}
      <button
        aria-label="Home"
        className="flex justify-center items-center bg-[#343434] max-w-[200px] px-4 py-2 rounded-[20px] text-[#f5f5f5]"
      >
        <FaHome className="mr-2" size={20} />
        <p>Home</p>
      </button>

      {/* Orders Button */}
      <button
        aria-label="Orders"
        className="flex justify-center items-center text-[#ababab] max-w-[200px] px-4 py-2"
      >
        <MdOutlineReorder className="mr-2" size={20} />
        <p>Orders</p>
      </button>

      {/* Tables Button */}
      <button
        aria-label="Tables"
        className="flex justify-center items-center text-[#ababab] max-w-[200px] px-4 py-2"
      >
        <MdTableBar className="mr-2" size={20} />
        <p>Tables</p>
      </button>

      {/* Others Button */}
      <button
        aria-label="Others"
        className="flex justify-center items-center text-[#ababab] max-w-[200px] px-4 py-2"
      >
        <CiCircleMore className="mr-2" size={20} />
        <p>Others</p>
      </button>

      {/* Floating Action Button (Dish) */}
      <button
        aria-label="Menu"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 bg-[#f6b100] text-[#f5f5f5] rounded-full shadow-lg"
      >
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;

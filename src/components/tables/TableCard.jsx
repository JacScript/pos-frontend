import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { getRandomBG } from "../..";

const TableCard = ({ name, initials, status, key }) => {
  return (
    <div className="w-[300px] bg-[#050505] p-4 rounded-lg mb-4 hover:bg-[#1f1f1f] cursor-pointer">
      <div className="flex justify-between items-center px-1">
        <h1 className="text-[#f5f5f5] font-semibold text-xl">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40] "
              : "text-[#fb6100] bg-yellow-300 "
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-4">
        <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-2xl`}>
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;

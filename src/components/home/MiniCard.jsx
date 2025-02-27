import React from "react";

const MiniCard = ({ title, icon, number, footNum }) => {
  return (
    <div className="bg-[#050505] p-2 rounded-lg w-[50%]">
      <div className="flex items-start justify-between">
        <h1 className="text-[#f5f5f5] text-base font-semibold tracking-wide">{title}</h1>
        <button className={`${title === 'Total Earnings' ? "bg-[#02ac3a]" : "bg-[#f68100]"} p-2 rounded-lg text-[#f5f5f5] text-xl  `}>{icon}</button>
      </div>
      <div className="text-[#f5f5f5]">
        <h1 className="text-xl font-bold mt-2">{number}</h1>
        <h1 className="text-base "> <span className="text-[#02ac3a]"> {footNum}</span> than yesterday</h1>
      </div>
    </div>
  );
};

export default MiniCard;

import React from "react";

const BillInfo = () => {
  return (
    <>
      <div className="flex items-center  justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Item (4)</p>
        <h1 className="text-md font-bold text-[#f5f5f5]">Tsh 75000</h1>
      </div>
      <div className="flex items-center  justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Tax(5.25%)</p>
        <h1 className="text-md font-bold text-[#f5f5f5]">Tsh 14000</h1>
      </div>

     <div className="flex items-center gap-3 px-5 mt-4">
         <button className="bg-[#050505] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Cash</button>
         <button className="bg-[#050505] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Online</button>
     </div>
     <div className="flex items-center gap-3 px-5 mt-4">
         <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">Print Receipt</button>
         <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold">Place Order</button>
     </div>
    </>
  );
};

export default BillInfo;

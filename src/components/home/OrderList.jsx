import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-6 mb-3">
      <button className="text-center max-md:p-1 p-3 bg-[#f6b100] text-xl max-md:text-base fonr-bold rounded-lg">
        AM
      </button>
      <div className="flex justify-between items-center w-[100%] ">
        <div className="flex flex-col items-start gap-1 max-md:gap-[2px]">
          <h1 className="text-[#f5f5f5] text-lg max-md:text-base font-semibold tracking-wide ">
            Jamerz M
          </h1>
          <p className="text-[#ababab] text-sm">8 Items</p>
        </div>

            <div>
                <h1 className="text-[#f6b100] text-semibold max-md:text-xs border border-[#f6b100] p-1 rounded-lg">Table No: 1</h1>
            </div>

        <div className="flex flex-col items-end gap-2 max-md:gap-[4px]">
          <p className="text-green-600 ">
            <FaCheckDouble className="inline mr-2" />
            Ready
          </p>
          <p className="text-[#ababab] text-sm flex items-center ">
            <FaCircle className="inline mr-2 text-green-600" /> Ready to serve
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

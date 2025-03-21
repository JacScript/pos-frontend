import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";
import { getAvatarName, formatDateAndTime } from "../../utils";

const OrderCard = ({ key, order }) => {
  // console.log(order);
  return (
    <div className="sm:w-[500px]  lg:w-[500px]  bg-[#050505] p-4 rounded-lg mb-4">
    {/* <div className="sm:w-[500px]  lg:w-[500px]  bg-[#050505] p-4 rounded-lg mb-4"> */}
      <div className="flex items-center gap-6 mb-3">
        <button className="text-center p-3 bg-[#f6b100] text-xl font-bold rounded-lg">
          {getAvatarName(order.customerDetails.name)}
        </button>
        <div className="flex justify-between items-center w-[100%] ">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide ">
              {order.customerDetails.name}
            </h1>
            <p className="text-[#ababab] text-sm">
              #{order.orderNumber} Dine In
            </p>
            <p className="text-[#ababab] text-sm">
              Table : {order.table.tableNo}
            </p>
          </div>

          {/* <div className="flex flex-col items-end gap-2">
            <p className="text-green-600 bg-[#2e4a40] px-2 rounded-lg">
              <FaCheckDouble className="inline mr-2" />
              Ready
            </p>
            <p className="text-[#ababab] text-sm flex items-center ">
              <FaCircle className="inline mr-2 text-green-600" /> Ready to serve
            </p>
          </div> */}

          <div className="flex flex-col items-end gap-2">
            {order.orderStatus === "Ready" ? (
              <>
                <p className="text-green-600 bg-[#2e4a40] px-2 py-1 flex items-center rounded-lg">
                  <FaCheckDouble className="inline mr-2" />
                  {order.orderStatus}
                </p>
                <p className="text-[#ababab] text-sm flex items-center ">
                  <FaCircle className="inline mr-2 text-green-600" /> Ready to
                  serve
                </p>
              </>
            ) : (
              <>
                <p className="text-yellow-600 bg-[#4a452e] px-2 py-1 flex items-center rounded-lg">
                  <FaCircle className="inline mr-2" />
                  {order.orderStatus}
                  <p></p> 
                </p>
                <p className="text-[#ababab] text-sm flex items-center ">
                  <FaCircle className="inline mr-2 text-green-600" />
                   Preparing your order
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 text-[#ababab]">
        <p>{formatDateAndTime(order.createdAt)}</p>
        <p>{order.items.length} Items</p>
      </div>
      <hr className="w-full border-t-1 border-gray-500  mt-2" />
      <div className="text-[#f5f5f5] text-lg font-semibold  flex items-center justify-between mt-2">
        <h1 className="">Total</h1>
        <p className="">
          <span>Tsh:</span>{order.bills.totalWithTax}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;

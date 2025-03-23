import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { getOrders } from "../../https";

const RecentOrders = () => {
  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!!", { variant: "error" });
  }
// console.log(resData.data.data)
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#050505] w-full h-[500px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-base text-[#f5f5f5] font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="#" className="text-[#025cca] text-sm">
            View All
          </a>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent order"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
          />
        </div>

        {/* Order List */}
        <div className="px-6 mt-4 overflow-y-scroll h-[380px] scrollbar-hide">
          {resData?.data.data.length > 0 ? (
            resData?.data.data.map((order, idx) => {
              return <OrderList key={idx} id={order._id} order={order} />;
            })
          ) : (
            <>
              {/* <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList /> */}
              <p className="col-span-3 text-white flex items-center justify-center">
                No orders available!!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;

import React, { useEffect, useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getOrders } from "../https";

const Orders = () => {
  
  const [status, setStatus] = useState("all");

  useEffect(() => {
    document.title = "POS | Orders"
  })

  const {data: resData, isError} = useQuery({
       queryKey: ["orders"],
       queryFn : async () => {
        return await getOrders()
       },
       placeholderData: keepPreviousData
  })

  if(isError){
      enqueueSnackbar("Something went wrong!!", {variant: "error"})
  } 

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <BackButton/>
        <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
          Orders
        </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button onClick={() => setStatus("all")} className={`text-[#ababab] max-md:text-xs text-lg max-md:px-2 px-4 py-2 ${status === "all" && "bg-[#383838]"} font-semibold rounded-lg`}>
            All
          </button>
          <button onClick={() => setStatus("progress")} className={`text-[#ababab] max-md:text-xs text-lg px-4 max-md:px-2 py-2 ${status === "progress" && "bg-[#383838]"} font-semibold rounded-lg`}>
            In Progress
          </button>
          <button onClick={() => setStatus("ready")} className={`text-[#ababab] max-md:text-xs text-lg px-4 max-md:px-2 py-2 ${status === "ready" && "bg-[#383838]"} font-semibold rounded-lg`}>
            Ready
          </button>
          <button onClick={() => setStatus("completed")} className={`text-[#ababab] max-md:text-xs text-lg px-4 max-md:px-2 py-2 ${status === "completed" && "bg-[#383838]"} font-semibold rounded-lg`}>
            Complete
          </button>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-6 px-12 py-4 overflow-y-scroll h-[calc(80vh-5rem)] scrollbar-hide">
       {
        resData?.data.data.length > 0 ? (
          resData.data.data.map((order) => {
            retrun (
              <OrderCard key={order._id}/>
            )
          })
        )
       }
      
      </div> */}
      <div className="flex flex-wrap justify-center gap-6 px-12 py-4 overflow-y-scroll  scrollbar-hide">
  {resData?.data?.data?.length > 0 ? (
    resData.data.data.map((order) => (
      <OrderCard key={order._id} order={order} />
    ))
  ) : (
    <p className=" col-span-3 text-gray-500">No orders found.</p>
  )}
</div>

      <BottomNav />
    </section>
  );
};

export default Orders;

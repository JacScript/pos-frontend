import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
  
  const [status, setStatus] = useState("all");

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
          <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg px-4 py-2 ${status === "all" && "bg-[#383838]"} font-semibold rounded-lg`}>
            All
          </button>
          <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-lg px-4 py-2 ${status === "progress" && "bg-[#383838]"} font-semibold rounded-lg`}>
            In Progress
          </button>
          <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg px-4 py-2 ${status === "ready" && "bg-[#383838]"} font-semibold rounded-lg`}>
            Ready
          </button>
          <button onClick={() => setStatus("completed")} className={`text-[#ababab] text-lg px-4 py-2 ${status === "completed" && "bg-[#383838]"} font-semibold rounded-lg`}>
            Complete
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 px-12 py-4 overflow-y-scroll h-[calc(80vh-5rem)] scrollbar-hide">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <BottomNav />
    </section>
  );
};

export default Orders;

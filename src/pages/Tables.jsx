import React, { useState } from "react";
import TableCard from "../components/tables/TableCard";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { tables } from "../constants";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https";

const Tables = () => {
  const [status, setStatus] = useState("all");

  const { data:resData, isError} = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      return await getTables();
    },
    placeholderData: keepPreviousData,
  });

  if(isError){
      enqueueSnackbar("Something went wrong!", {variant: error})
  }

  // console.log(resData);

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
            Tables
          </h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg px-4 py-2 ${
              status === "all" && "bg-[#383838]"
            } font-semibold rounded-lg max-md:text-xs max-lg:text-base`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg px-4 py-2 ${
              status === "booked" && "bg-[#383838]"
            } font-semibold rounded-lg max-md:text-xs max-lg:text-base`}
          >
            Booked
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-10 justify-center overflow-y-scroll h-[calc(80vh-5rem)] scrollbar-hide">
        {
          resData?.data?.data?.map((table) => {
            return (
              <TableCard  key={table._id} id={table._id} name={table.tableNo} status={table.status} initials={table?.currentOrder?.customerDetails.name} seats={table.seats}/>
            )
          })
        }
        
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;

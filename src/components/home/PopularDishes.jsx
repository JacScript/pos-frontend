import React from "react";
import { popularDishes } from "../../constants";
import { getOrders } from "../../https";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar} from "notistack"

const PopularDishes = () => {


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
    <div className="mt-6 px-4">
      <div className="bg-[#050505]  w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-base text-[#f5f5f5] font-semibold tracking-wide">
            Popular Dishes{" "}
          </h1>
          <a href="#" className="text-[#025cca] text-sm">
            View All
          </a>
        </div>

        <div className="overflow-y-scroll h-[680px] scrollbar-hide ">
            {
                popularDishes?.map((dish) => (
                    <div key={dish.id} className="flex items-center gap-4 max-md:mx-2 mx-6 px-6 py-3 max-md:py-2 border-b border-[#1f1f1f]">
                        <div className="flex items-center gap-4 max-md:gap-[10px]">
                            <h1 className="text-[#f5f5f5] font-bold text-xl  mr-5">{dish.id < 10  ? `0${dish.id}` : dish.id}</h1>
                            <img src={dish.image} alt={dish.name} className="w-12 h-12 max-md:w-10 max-md:h-10 object-cover rounded-lg"/>
                            <div>
                                <h1 className="text-[#f5f5f5] text-lg  max-md:base font-semibold tracking-wide">{dish.name}</h1>
                                <p className="text-[#ababab] text-sm"><span>Orders: </span>{dish.numberOfOrders}</p>
                            </div>
                        </div>
                        {/* <div>
                            <h1 className="text-[#f6b100] text-semibold border border-[#f6b100] p-1 rounded-lg">₹{dish.price}</h1>
                        </div> */}
                    </div>
                )) 
            }
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;

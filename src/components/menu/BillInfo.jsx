import React from "react";
import { useSelector } from 'react-redux';
import { getTotalPrice } from "../../redux/slices/cartSlice";

const BillInfo = () => {
  const cartInfo = useSelector( state => state.cart);
  const total = useSelector(getTotalPrice)
 const taxRate = 5.25;
 const tax = (total * taxRate ) / 100;
 const totalPriceWithTax = total + tax;



  return (
    <>
      <div className="flex items-center  justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-1">Item {cartInfo.length}</p>
        <h1 className="text-md font-bold text-[#f5f5f5]">Tsh {total.toFixed(2)} </h1>
      </div>
      <div className="flex items-center  justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-1">Tax(5.25%)</p>
        <h1 className="text-md font-bold text-[#f5f5f5]">Tsh {tax.toFixed(2)}</h1>
      </div>

      <div className="flex items-center  justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-1">Total With tax </p>
        <h1 className="text-md font-bold text-[#f5f5f5]">Tsh {totalPriceWithTax.toFixed()}</h1>
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

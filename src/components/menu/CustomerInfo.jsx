import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { formatDate, getAvatarName } from '../../utils';


const CustomerInfo = () => {
    const [dateTime, setDateTime] = useState(new Date());
  

  const customerInfo = useSelector(state => state.customer);
  

  return (
    <div className="flex items-center justify-between px-4 py-2">
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
              {customerInfo?.customerName || "Customer Name"}
            </h1>
            <p className="text-xs text-[#ababab] font-medium max-md:mt-1">
              #{customerInfo.orderId || "N/A"}  / Dine in
            </p>
            <p className="text-xs text-[#ababab] font-medium max-md:mt-1">
             {formatDate(dateTime )}
            </p>
          </div>
          <button className="bg-[#f6b100] max-md:p-3 p-1 text-xl font-bold rounded-lg">
            {getAvatarName(customerInfo.customerName)}
          </button>
        </div>
  )
}

export default CustomerInfo
import React from "react";
import { orders } from "../../constants";
import { GrUpdate } from "react-icons/gr"
import { formatDateAndTime } from "../../utils";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders, updateOrder } from "../../https";
import { enqueueSnackbar } from "notistack";

const RecentOrders = () => {
  const queryClient = useQueryClient();

  const handleStatusChange = ({orderId,orderStatus}) => {
    orderStatusUpdateMutation.mutate({orderId, orderStatus})
  };

  const orderStatusUpdateMutation = useMutation({
    mutationFn: ({orderId, orderStatus}) => updateOrder({orderId, orderStatus}),
    onSuccess: (data) => {
      enqueueSnackbar("Order status updated successfully", {variant: "success"});
      queryClient.invalidateQueries("orders");//Refresh Order list
    }, 
    onError: (error) => {
      // console.log(error);
      enqueueSnackbar("Failed to update order status", {variant: "error"});
    }
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
  // const handleStatusChange = () => {};

  return (
    <div className="container mx-auto bg-[#050505] p-4 rounded-lg">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto overflow-y-scroll h-[580px]">
        <table className="w-full text-left text-[#f5f5f5]">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {resData?.data.data.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >
                <td className="p-4">#{order.orderNumber}</td>
                <td className="p-4">{order.customerDetails.name}</td>
                <td className="p-4">
                  <select
                    className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
                      order.orderStatus === "Ready"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                    value={order.orderStatus}
                    onChange={(e) => handleStatusChange({orderId: order._id, orderStatus:e.target.value})}
                  >
                    <option className="text-yellow-500" value="In Progress">
                      In Progress
                    </option>
                    <option className="text-green-500" value="Ready">
                      Ready
                    </option>
                  </select>
                </td>
                <td className="p-4">{formatDateAndTime(order.createdAt)}</td>
                <td className="p-4">{order.items.length} Items</td>
                <td className="p-4">Table - {order.table.tableNo}</td>
                <td className="p-4">Tsh {order.bills.totalWithTax.toFixed(2)}</td>
                <td className="p-4 text-center">
                  <button className="text-blue-400 hover:text-blue-500 transition">
                    <GrUpdate size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCustomer } from "../../redux/slices/customerSlice";
import { getTotalPrice, removeAllItems } from "../../redux/slices/cartSlice";
import { useMutation } from "@tanstack/react-query";
import {createOrder, updateTable  } from "../../https/index"
import { enqueueSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import Invoice from "../invoice/Invoice";

const BillInfo = () => {
  const cartInfo = useSelector((state) => state.cart);
  const customerData = useSelector((state) => state.customer);
  const total = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalWithTax = total + tax;

  // console.log(customerData);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showInvoice, setSelectedInvoice] = useState(false);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

 

  // console.log(generateOrderNumber())

  const tableUpdateMutation = useMutation({
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess : (reqData) => {
      //  console.log(reqData);
      enqueueSnackbar(reqData.data.message, {variant: "success"});
       dispatch(removeCustomer());
       setSelectedPayment(null)
       dispatch(removeAllItems());
    }, 
    onError: (error) => {
      console.log(error);
    }
  })

  const orderMutation = useMutation({
    mutationFn: (reqData) => createOrder(reqData), // Fix function name
    onSuccess: (resData) => {
      const { data} = resData.data;
      // const res = data;
      // console.log(res);
      


      //UPDATE TABLE
      const tableData = {
        status : "Booked",
        orderId : data._id,
        tableId: data.table
      }

      setTimeout(() => {
          tableUpdateMutation.mutate(tableData);
      }, 1500)

      enqueueSnackbar("Order Created!", {variant: "success"});
      // history.push("/orders")
    },
    onError: (error) => {
       const { response } = error;
             enqueueSnackbar(response.data.message, { variant: "error" });
      // return console.error("Order error:", error);
      // alert("Failed to place order. Please try again.");
    },
  });




  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 900) + 100;
  };



  const handlePlaceOrder = async () => {
    if (cartInfo?.length === 0) {
      enqueueSnackbar("Your cart is empty! Please add items before placing an order.", { variant: "error" });
      // alert("Your cart is empty! Please add items before placing an order.");
      return;
    }

  

    if (!selectedPayment) {
      enqueueSnackbar("Please select a payment method.", { variant: "error" });
      // alert("Please select a payment method.");
      return;
    }
    const orderData = {
      customerDetails: {
        name: customerData?.customerName || "Unknown",
        phone: customerData?.customerPhone || "N/A",
        guests: customerData?.guests || 1,
      },
      orderNumber: generateOrderNumber(),
      orderStatus: "In progress",
      paymentMethod: selectedPayment,
      bills: {
        total: total,
        tax: tax,
        totalWithTax: totalWithTax,
      },
      items: cartInfo,
      table: customerData?.table?.tableId || "N/A",
    };

    // console.log(orderData);
    orderMutation.mutate(orderData);
  };



  // const orderMutation = useMutation({
  //   mutationFn: (reqData) => addOrder( reqData),
  //   onSuccess: (resData) => {
  //     const { data} = resData.data;
  //     console.log(data);
  //     enqueueSnackbar("Order Placed Successfully", {variant: "success"}); 
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   }
  // })

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-1">
          Items: {cartInfo.length}
        </p>
        <h1 className="text-md font-bold text-[#f5f5f5]">
          Tsh {total.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-1">Tax (5.25%)</p>
        <h1 className="text-md font-bold text-[#f5f5f5]">
          Tsh {tax.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-1">
          Total With Tax
        </p>
        <h1 className="text-md font-bold text-[#f5f5f5]">
          Tsh {totalWithTax.toFixed(2)}
        </h1>
      </div>

      {/* Payment Selection */}
      <div className="flex items-center gap-3 px-5 mt-4">
        {["Cash", "Online"].map((paymentMethod) => (
          <button
            onClick={() => handlePaymentSelection(paymentMethod)}
            key={paymentMethod}
            className={`px-4 py-3 w-full cursor-pointer rounded-lg font-semibold transition-all 
              ${
                selectedPayment === paymentMethod
                  ? "bg-indigo-700 text-white"
                  : "bg-[#050505] text-[#ababab]"
              }`}
            disabled={cartInfo.length === 0} // Disable if cart is empty
          >
            {paymentMethod}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          onClick={handlePlaceOrder}
          className={`px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg 
            ${cartInfo?.length === 0 ? "bg-gray-600 cursor-not-allowed" : "bg-[#025cca]"}`}
          disabled={cartInfo.length === 0} // Disable if cart is empty
        >
          Print Receipt
        </button>
        <button
        // onClick={handlePlaceOrder}
          className={`px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold 
            ${cartInfo?.length === 0 ? "bg-gray-600 cursor-not-allowed" : "bg-[#f6b100]"}`}
          disabled={cartInfo?.length === 0} // Disable if cart is empty
        >
          Place Order
        </button>
      </div>
      {showInvoice && (
        <Invoice orderInfo={orderInfo} setShowInvoice={setShowInvoice} />
      )

      }
    </>
  );
};

export default BillInfo;



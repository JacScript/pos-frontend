import React, { useEffect, useRef } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartInfo = useSelector((state) => state.cart); // Ensure this matches your store structure
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartInfo.length]); // Ensure effect runs when cart length changes

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-base text-[#e4e4e4] font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-4 overflow-y-scroll scrollbar-hide h-[280px]" ref={scrollRef}>
        {cartInfo.length  > 0 ? (
          cartInfo?.map((item) => (
            <div key={item.id} className="bg-[#050505] rounded-lg p-3 mb-2">
              <div className="flex items-center justify-between">
                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
                  {item.name}
                </h1>
                <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <RiDeleteBin2Fill
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                  <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20} />
                </div>
                <p className="text-[#f5f5f5] text-md font-bold">Tsh {item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[#f5f5f5] text-sm h-[280px] flex justify-center items-center">
            Your cart is empty.Start adding items!
          </p>
        ) 
      
      }
      </div>
    </div>
  );
};

export default CartInfo;











































// import React, { useEffect, useRef } from "react";
// import { RiDeleteBin2Fill } from "react-icons/ri";
// import { FaNotesMedical } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { removeItem } from "../../redux/slices/cartSlice";

// const CartInfo = () => {
//   const cartInfo = useSelector((state) => state.cart);
//   const scrollRef = useRef();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         top: scrollRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [cartInfo]);

// const handleRemoveItem = (itemId) => {
//   dispatch(removeItem(itemId));

// }
//   return (
//     <div className="px-4 py-2">
//       <h1 className="text-base text-[#e4e4e4] font-semibold tracking-wide">
//         Order Details
//       </h1>
//       <div className="mt-4 overflow-y-scroll scrollbar-hide h-[280px]" ref={scrollRef}>
//         {cartInfo?.length === 0 ? (
//           <p className="text-[#f5f5f5] text-sm h-[280px] flex justify-center items-center">
//             Your cart is empty. Start adding items!
//           </p>
//         ) : (
//           cartInfo?.map((item) => (
//             <div key={item.id} className="bg-[#050505] rounded-lg p-3 mb-2">
//               <div className="flex items-center justify-between">
//                 <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
//                   {item.name}
//                 </h1>
//                 <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
//               </div>
//               <div className="flex items-center justify-between mt-3">
//                 <div className="flex items-center gap-3">
//                   <RiDeleteBin2Fill
//                    onClick={() => handleRemoveItem(item.id)}
//                   className="text-[#ababab] cursor-pointer" size={20} />
//                   <FaNotesMedical className="text-[#ababab] cursor-pointer" size={20} />
//                 </div>
//                 <p className="text-[#f5f5f5] text-md font-bold">Tsh {item.price}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartInfo;











































// import React from "react";
// import { RiDeleteBin2Fill } from "react-icons/ri";
// import { FaNotesMedical } from "react-icons/fa";
// import { useSelector } from "react-redux";

// const CartInfo = () => {
//   const cartInfo = useSelector((state) => state.cart);

//   console.log(cartInfo)


//   return (
//     <div className="px-4 py-2">
//       <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
//         Order Details
//       </h1>
//       <div className="mt-4 overflow-y-scroll scrollbar-hide h-[280px]">
//         {cartInfo.length === 0 ? (
//           <p className=" text-[#f5f5f5] text-sm h-[280px] flex justify-center items-center">Your cart is empty. Start Adding items!! </p>
//         ) : 
//           cartInfo?.map((item) => {
//             return (
//               <div className="bg-[#050505] rounded-lg p-3 mb-2 ">
//                 <div className="flex items-center justify-between">
//                   <h1 className="text-[#ababab] font-semibold tracking-wide tetx-md">
//                     {item.name}
//                   </h1>
//                   <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
//                 </div>
//                 <div className="flex items-center justify-between mt-3">
//                   <div className="flex items-center gap-3">
//                     <RiDeleteBin2Fill
//                       className="text-[#ababab] cursor-pointer "
//                       size={20}
//                     />
//                     <FaNotesMedical
//                       className="text-[#ababab] cursor-pointer "
//                       size={20}
//                     />
//                   </div>
//                   <p className="text-[#f5f5f5] text-md font-bold">Tsh {item.price}</p>
//                 </div>
//               </div>
//             );
//           }
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartInfo;

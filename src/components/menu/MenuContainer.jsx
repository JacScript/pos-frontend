// import React, { useState } from "react";
// import { GrRadialSelected } from "react-icons/gr";
// // import { menus } from "../../constants";
// import { FaShoppingCart } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addItems } from "../../redux/slices/cartSlice";

// const MenuContainer = ({menuData}) => {
//   console.log(menuData?.data?.data)
//   const [selected, setSelected] = useState(menuData?.[0] || {});
//   // const [selected, setSelected] = useState(menus[0]);
//   const [itemCount, setItemCount] = useState(0);
//   const [itemId, setItemId] = useState(0);
//   const dispatch = useDispatch();

//   const increment = (id) => {
//     setItemId(id);
//     if (itemCount >= 6) return;
//     setItemCount((prev) => prev + 1);
//   };

//   const decrement = (id) => {
//     setItemId(id);
//     if (itemCount <= 0) return;
//     setItemCount((prev) => prev - 1);
//   };

//   // const handleAddToCart = (item) => {
//   //   if(itemCount === 0) return;
     
//   //   const {name, price} = item;
//   //   const newObj = {id: new Date(), name, pricePerQuantity: price, quantity: itemCount, price: price * itemCount }; 
//   //   dispatch(addItems(newObj));
//   //   setItemCount(0);
//   //  }; 


//   const handleAddToCart = (item) => {
//     if (itemCount <= 0) return; // Prevent invalid quantity

//     const { name, price } = item;
//     const newObj = {
//         id: Date.now(), // Generates a unique numeric ID
//         name,
//         pricePerQuantity: price,
//         quantity: itemCount,
//         price: price * itemCount
//     }; 

//     dispatch(addItems(newObj)); // Ensure this matches your Redux action name
//     setItemCount(0);
// };



//   return (
//     <>
//       <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] max-sm:grid-cols-1 max-xl:grid-cols-2">
//         {menuData?.data?.data.menus.map((menu) => {
//           return (
//             <div
//               key={menu.id}
//               className="flex flex-col items-start justify-between  p-4 rounded-lg cursor-pointer h-[100px]"
//               style={{ backgroundColor: menu.bgColor }}
//               onClick={() => {
//                 setSelected(menu);
//                 setItemId(0);
//                 setItemCount(0);
//               }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <h1 className="text-[#f5f5f5] text-lg  font-semibold">
//                   {menu.icon} {menu.name}
//                 </h1>
//                 {selected.id === menu.id && (
//                   <GrRadialSelected className="text-[#f5f5f5] text-2xl" />
//                 )}
//               </div>
//               <p className="text-[#ababab] text-sm font-semibold">
//                 {menu.items.length} Items
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

//       <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2 px-10 py-4 w-[100%]">
//         {selected?.items?.map((item) => {
//           return (
//             <div
//               key={item.id}
//               className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[140px] hover:bg-[#2a2a2a] bg-[#050505]"
//             >
//               <div className="flex justify-between items-start w-full ">
//                 <h1 className="text-[#f5f5f5] text-lg  font-semibold">
//                   {item.icon} {item.name}
//                 </h1>
//                 <button 
//                  onClick={() => handleAddToCart(item)}
//                 className="bg-[#2e4a40] text-[#2aca3a] p-2 rounded-lg">
//                   <FaShoppingCart size={20} />
//                 </button>
//               </div>
//               <div className="flex items-center justify-between w-full">
//                 <p className="text-[#ababab] text-xl font-bold">
//                   Tsh {item.price}
//                 </p>
//                 <div className="flex items-center justify-between bg-[#1f1f1f] px-3  gap-6 py-1 rounded-lg">
//                   <button
//                     onClick={() => decrement(item.id)}
//                     className="text-yellow-500 text-2xl font-bold"
//                   >
//                     &minus;
//                   </button>
//                   <span className="text-white">
//                     {item.id === itemId ? itemCount : "0"}
//                   </span>
//                   <button
//                     onClick={() => increment(item.id)}
//                     className="text-yellow-500 text-2xl font-bold"
//                   >
//                     &#43;
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default MenuContainer;


import React, { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = ({ menuData }) => {
  // console.log(menuData?.data?.data); // Check the structure of menuData
  const [selected, setSelected] = useState(menuData?.data?.data?.menus?.[0] || {});
  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();

  const increment = (id) => {
    if (itemCount >= 6) return; // Limit to 6 items max
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  const handleAddToCart = (item) => {
    if (itemCount <= 0) return; // Prevent invalid quantity

    const { name, price } = item;
    const newObj = {
      id: Date.now(), // Generates a unique numeric ID
      name,
      pricePerQuantity: price,
      quantity: itemCount,
      price: price * itemCount
    };

    dispatch(addItems(newObj)); // Ensure this matches your Redux action name
    setItemCount(0); // Reset item count after adding to cart
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] max-sm:grid-cols-1 max-xl:grid-cols-2">
        {menuData?.data?.data?.menus?.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[100px]"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemCount(0); // Reset item count when a new menu is selected
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-[#f5f5f5] text-2xl" />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2 px-10 py-4 w-[100%]">
        {selected?.items?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[140px] hover:bg-[#2a2a2a] bg-[#050505]"
            >
              <div className="flex justify-between items-start w-full ">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {item.icon} {item.name}
                </h1>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-[#2e4a40] text-[#2aca3a] p-2 rounded-lg"
                >
                  <FaShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#ababab] text-xl font-bold">
                  Tsh {item.price}
                </p>
                <div className="flex items-center justify-between bg-[#1f1f1f] px-3 gap-6 py-1 rounded-lg">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-yellow-500 text-2xl font-bold"
                  >
                    &minus;
                  </button>
                  <span className="text-white">{itemCount}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-yellow-500 text-2xl font-bold"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;


// import React, { useState } from "react";
// import { FaHome } from "react-icons/fa";
// import { MdOutlineReorder, MdTableBar } from "react-icons/md";
// import { CiCircleMore } from "react-icons/ci";
// import { BiSolidDish } from "react-icons/bi";
// import { useHistory } from "react-router-dom";
// import Modal from "./Modal";

// const BottomNav = () => {
//   const history = useHistory();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [guestCount, setGuestCount] = useState(0);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const increment = () => {
//     if(guestCount >= 6) return;
//       setGuestCount((prev) => prev + 1);
//   }

//   const decrement = () => {
//     if(guestCount <=0) return;
//     setGuestCount((prev) => prev - 1);
//   }

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-16 flex justify-around items-center px-2">
//       {/* Home Button */}
//       <button
//         onClick={() => history.push("/")}
//         aria-label="Home"
//         className="flex justify-center items-center bg-[#343434] max-w-[200px] px-4 py-2 rounded-[20px] text-[#f5f5f5]"
//       >
//         <FaHome className="mr-2" size={20} />
//         <p>Home</p>
//       </button>

//       {/* Orders Button */}
//       <button
//         onClick={() => history.push("/orders")}
//         aria-label="Orders"
//         className="flex justify-center items-center text-[#ababab] max-w-[200px] px-4 py-2"
//       >
//         <MdOutlineReorder className="mr-2" size={20} />
//         <p>Orders</p>
//       </button>

//       {/* Tables Button */}
//       <button
//         onClick={() => history.push("/tables")}
//         aria-label="Tables"
//         className="flex justify-center items-center text-[#ababab] max-w-[200px] px-4 py-2"
//       >
//         <MdTableBar className="mr-2" size={20} />
//         <p>Tables</p>
//       </button>

//       {/* Others Button */}
//       <button
//         aria-label="Others"
//         className="flex justify-center items-center text-[#ababab] max-w-[200px] px-4 py-2"
//       >
//         <CiCircleMore className="mr-2" size={20} />
//         <p>Others</p>
//       </button>

//       {/* Floating Action Button (Dish) */}
//       <button
//         onClick={openModal}
//         aria-label="Menu"
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 bg-[#f6b100] text-[#f5f5f5] rounded-full shadow-lg"
//       >
//         <BiSolidDish size={30} />
//       </button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
//         <div className="mb-4">
//           <label className="block text-[#ababab] mb-1 text-sm font-medium">
//             Customer Name
//           </label>
//           <div className="flex items-center border border-[#333] rounded-lg p-2">
//             <input
//               type="text"
//               name=""
//               placeholder="Enter customer name"
//               id=""
//               className="bg-transparent flex-1 text-white focus:outline-none"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-[#ababab] mb-1 text-sm font-medium">
//             Customer Phone number
//           </label>
//           <div className="flex items-center border border-[#333] rounded-lg p-2">
//             <input
//               type="number"
//               name=""
//               placeholder="07XXXXXXXX"
//               id=""
//               className="bg-transparent flex-1 text-white focus:outline-none"
//             />
//           </div>
//         </div>
//         <div>
//           <label className="block text-[#ababab] mb-1 text-sm font-medium">
//             Guest
//           </label>
//           <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
//           <button onClick={decrement} className="text-yellow-500 text-2xl font-bold">&minus;</button>
//           <span className="text-white">{guestCount} Person</span>
//           <button onClick={increment} className="text-yellow-500 text-2xl font-bold">&#43;</button>
//           </div>
//         </div>
//         <button onClick={() => history.push('/tables')} className="w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700 ">
//           Create Order
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default BottomNav;

import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Modal from "./Modal";
import { setCustomer } from "../../redux/slices/customerSlice";

const BottomNav = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [name , setName] = useState();
  const [phone , setPhone] = useState();
  // const [guests , setGuests] = useState();


  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

  // Function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  const handleCreateOrder = () => {
     //send data to the store
     dispatch(setCustomer({name,phone, guests: guestCount}));

    history.push('/tables');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] h-16 flex justify-around items-center px-2">
      {/* Home Button */}
      <button
        onClick={() => history.push("/")}
        aria-label="Home"
        className={`flex justify-center items-center max-w-[200px] px-4 py-2 rounded-[20px] ${
          isActive("/") ? "bg-[#f6b100] text-[#fff]" : "text-[#f5f5f5]"
        }`}
      >
        <FaHome className="mr-2" size={20} />
        <p>Home</p>
      </button>

      {/* Orders Button */}
      <button
        onClick={() => history.push("/orders")}
        aria-label="Orders"
        className={`flex justify-center items-center max-w-[200px] px-4 py-2 rounded-[20px] ${
          isActive("/orders") ? "bg-[#f6b100] text-[#fff]" : "text-[#ababab]"
        }`}
      >
        <MdOutlineReorder className="mr-2" size={20} />
        <p>Orders</p>
      </button>

      {/* Tables Button */}
      <button
        onClick={() => history.push("/tables")}
        aria-label="Tables"
        className={`flex justify-center items-center max-w-[200px] px-4 py-2 rounded-[20px] ${
          isActive("/tables") ? "bg-[#f6b100] text-[#fff]" : "text-[#ababab]"
        }`}
      >
        <MdTableBar className="mr-2" size={20} />
        <p>Tables</p>
      </button>

      {/* Others Button */}
      <button
        aria-label="Others"
        className={`flex justify-center items-center max-w-[200px] px-4 py-2 rounded-[20px] ${
          isActive("/others") ? "bg-[#f6b100] text-[#fff]" : "text-[#ababab]"
        }`}
      >
        <CiCircleMore className="mr-2" size={20} />
        <p>Others</p>
      </button>

      {/* Floating Action Button (Dish) */}
      <button
      disabled={isActive("/tables") || isActive("/menu")}
        onClick={openModal}
        aria-label="Menu"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-3 bg-[#f6b100] text-[#f5f5f5] rounded-full shadow-lg"
      >
        <BiSolidDish size={30} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div className="mb-4">
          <label className="block text-[#ababab] mb-1 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center border border-[#333] rounded-lg p-2">
            <input
             value={name}
             onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter customer name"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-[#ababab] mb-1 text-sm font-medium">
            Customer Phone number
          </label>
          <div className="flex items-center border border-[#333] rounded-lg p-2">
            <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="07XXXXXXXX"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-1 text-sm font-medium">
            Guest
          </label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-yellow-500 text-2xl font-bold">
              &minus;
            </button>
            <span className="text-white">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-2xl font-bold">
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={handleCreateOrder}
          className="w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;


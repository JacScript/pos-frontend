// import React, { useState } from "react";
// import { FaCheckDouble } from "react-icons/fa";
// import { getRandomBG } from "../..";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const TableCard = ({ name, initials, status, key, seats }) => {
//   const history = useHistory();
//   const handleClick = () => {
//     if(status === 'Booked') return;
//     history.push('/menu')
//   }

//   return (
//     <div  onClick={handleClick} className="w-[300px] bg-[#050505] p-4 rounded-lg mb-4 hover:bg-[#1f1f1f] cursor-pointer">
//       <div className="flex justify-between items-center px-1">
//         <h1 className="text-[#f5f5f5] font-semibold text-xl">{name}</h1>
//         <p
//           className={`${
//             status === "Booked"
//               ? "text-green-600 bg-[#2e4a40] "
//               : "text-[#fb6100] bg-yellow-300 "
//           } px-2 py-1 rounded-lg`}
//         >
//           {status}
//         </p>
//       </div>
//       <div className="flex items-center justify-center my-4">
//         <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-2xl`}>
//           {initials}
//         </h1>
//       </div>
//       <div className="text-[#f5f5f5] flex justify-between items-center">
//         <p>Seats:</p>
//         <p>{seats}</p>
//       </div>
//     </div>
//   );
// };

// export default TableCard;

import React from "react";
import { getAvatarName, getBgColor } from "../../utils/index"; // Ensure correct import path
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa";

const TableCard = ({ id, name, initials, status, seats }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (name) => {
    if (status === "booked") return;

    const table = { tableId: id, tableNo: name}
    dispatch(updateTable({table})); 
    history.push("/menu");
  };

  return (
    <div
      key={id}
      onClick={() => handleClick(name)}
      className="w-[300px] bg-[#050505] p-4 rounded-lg mb-4 hover:bg-[#1f1f1f] cursor-pointer"
    >
      <div className="flex justify-between items-center px-1">
        <h1 className="text-[#f5f5f5] font-semibold text-xl">Table <FaLongArrowAltRight className="text-[#ababab] ml-2 inline "/> {name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "text-[#fb6100] bg-yellow-300"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-4">
        <h1
          className={` text-white rounded-full p-5 text-2xl`}
          style={{ background: initials ? getBgColor() : "#1f1f1f"}}
        >
          {getAvatarName(initials) || "N/A"}
        </h1>
      </div>
      <div className="text-[#f5f5f5] flex justify-between items-center">
        <p>Seats:</p>
        <p>{seats}</p>
      </div>
    </div>
  );
};

export default TableCard;

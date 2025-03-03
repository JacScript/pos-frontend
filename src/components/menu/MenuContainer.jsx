import React, { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0)
  const [itemId, setItemId] = useState(0);


  const increment = (id) => {
    setItemId(id);
    if(itemCount >= 6) return;
      setItemCount((prev) => prev + 1);
  }

  const decrement = (id) => {
    setItemId(id);
    if(itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus?.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[100px]"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu)
                setItemId(0);
                setItemCount(0);
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

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items?.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[140px] hover:bg-[#2a2a2a] bg-[#050505]"
            >
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.icon} {menu.name}
              </h1>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#ababab] text-xl font-bold">
                  Tsh {menu.price}
                </p>
                <div className="flex items-center justify-between bg-[#1f1f1f] px-3  gap-6 py-1 rounded-lg">
                  <button
                    onClick={() => decrement(menu.id)}
                    className="text-yellow-500 text-2xl font-bold"
                  >
                    &minus;
                  </button>
                  <span className="text-white">{menu.id === itemId ? itemCount : "0" }</span>
                  <button
                    onClick={() => increment(menu.id)}
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

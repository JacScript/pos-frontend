import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import BillInfo from "../components/menu/BillInfo";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* left-div */}
      <div className="flex-[4] bg-[#1a1a1a]">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-xl font-bold tracking-wide">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[#f5f5f5] text-2xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">
                  Customer Name
                </h1>
                <p className="text-xs text-[#ababab] font-medium">
                  Table No: 3
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <MenuContainer />
        </div>
      </div>

      {/* right-div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
        {/* Customer info */}
        <CustomerInfo/>

        <hr className="border-[#2a2a2a] border-t-2" />
        {/* Cart Items */}

        <CartInfo/>
        <hr className="border-[#2a2a2a] border-t-2" />


        {/* Billing */}

        <BillInfo/>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;

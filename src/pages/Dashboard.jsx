import React, { useState } from "react";
import { MdCategory, MdTableBar } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/dashboard/Metrics";
import RecentOrder from "../components/dashboard/RecentOrder";
import Report from "../components/dashboard/Report";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs =  ["Metrics", "Orders" , "Report"];

const Dashboard = () => {
const [activeTab, setActiveTab] = useState("Metrics")

  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-4">
        <div className="flex items-center gap-3">
          {buttons.map(({label, icon, action}, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#1b1b1b] hover:bg-[#262626] px-4 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2"
              >
                {label} {icon}
              </div>
            );
          })}
        </div>



        <div className="flex items-center gap-3">
          {tabs.map((tab, idx) => {
            return (
              <div
                key={idx}
                className={`
                  px-8 py-3 cursor-pointer rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2
                  ${activeTab === tab ? "bg-[#262626]" : "bg-[#1a1a1a] hover:bg-[#262626]"}`}
                onClick={() => setActiveTab(tab)}
              >
               {tab}
              </div>
            );
          })}
        </div>
      </div>
     { activeTab === "Metrics" && <Metrics />}
    {  activeTab === "Orders" && <RecentOrder />}
    {  activeTab === "Report" && <Report />}
    </div>
  );
};

export default Dashboard;

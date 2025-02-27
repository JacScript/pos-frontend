import React from "react";
import ButtomNav from "../components/shared/BottonNav";
import Greetings from "../components/home/Greetings";
import {BsCashCoin} from 'react-icons/bs'
import { GrInProgress } from 'react-icons/gr'
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* left-div */}
      <div className="flex-[3] bg-[#1a1a1a]">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard
            title="Total Earnings"
            icon={<BsCashCoin />}
            number={512}
            footNum={1.6}
          />{" "}
          <MiniCard
            title="In progress"
            icon={<GrInProgress />}
            number={16}
            footNum={3.6}
          />
        </div>
        <RecentOrders/>
      </div>

      {/* right-div */}
      <div className="flex-[2] bg-[#1a1a1a]"></div>
      <ButtomNav />
    </section>
  );
};

export default Home;

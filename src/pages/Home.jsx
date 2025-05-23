import React, { useEffect } from "react";
import ButtomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import {BsCashCoin} from 'react-icons/bs'
import { GrInProgress } from 'react-icons/gr'
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

const Home = () => {

   useEffect(() => {
      document.title = "POS | Home"
    })
   

  return (
    <section className="bg-[#1f1f1f] max-md:min-h-screen lg:h-[calc(100vh-5rem)] md:overflow-hidden scrollbar-hide flex  max-lg:flex-col gap-3 "  >
      {/* left-div */}
      {/* <div className="bg-[#1f1f1f] min-h-screen lg:h-[calc(100vh-5rem)] md:overflow-hidden scrollbar-hide flex  max-lg:flex-col gap-3 " > */}

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
      <div className="flex-[2] bg-[#1a1a1a] h-full max-lg:mb-[80px]">
        <PopularDishes/>
      </div>
      {/* </div> */}

      <ButtomNav />
    </section>
  );
};

export default Home;

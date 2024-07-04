import React, { useState } from "react";
import FeatureSelection from "@/components/FeatureSelection";
import Header from "@/components/Header";
// import Image from "next/image";
import MixedChart from "@/components/MixedChart";
import SideBar from "./SideBar";
import EntriesSection from "./EntriesSection";
const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <main>
      <div className="flex">
        <div className=" md:w-[20%] w-[70%] h-screen bg-red-500">
          <SideBar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </div>
        <div className="lg:w-[80%] w-[100vw !important]">
          <Header setShowSidebar={setShowSidebar} />
          <FeatureSelection />
          <MixedChart />
          <EntriesSection />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

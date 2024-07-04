import React from "react";
import * as Icons from "./common/Icons";

type Props = {
  showSidebar: any;
  setShowSidebar: any;
};

const SideBar = ({ showSidebar, setShowSidebar }: Props) => {
  return ( 
    <main
      className={` flex flex-col justify-between lg:h-screen h-full bg-primary md:w-[20%] w-[70%] px-5 fixed top-0 ${
        showSidebar ? "sm:left-0 -left-0 transition-all duration-300" : "sm:left-0 -left-[100%]"
      } overflow-hidden p-6`} 
    >
      <div
        onClick={() => setShowSidebar(false)}
        className="md:hidden absolute top-7 right-7"
      >
        <Icons.CloseIcon />
      </div>
      <div className="flex flex-col gap-2">
        <img src="/svgs/logo.svg" alt="" className="w-32" />
        <div className="sidebar-elements mt-6">
          <img src="/svgs/analytics-icon.svg" alt="" />
          <p className="sidebar-item">Runway Overview</p>
        </div>
        <div className="sidebar-elements">
          <img src="/svgs/financial-icon.svg" alt="" />
          <p className="sidebar-item">Financial Health</p>
        </div>
        <div className="sidebar-elements">
          <img src="/svgs/data-source-icon.svg" alt="" />
          <p className="sidebar-item">Data Sources</p>
        </div>
        <div className="h-[1px] w-full bg-[#303030]"></div>

        <div className="flex justify-between items-center">
          <p className="text-[12px] font-normal text-[#9B9B9B]">
            Linked scenarios
          </p>
          <img src="/svgs/add-icon.svg" alt="" />
        </div>
        <div className="sidebar-elements">
          <img src="/svgs/scenarios-icon.svg" alt="" />
          <p className="sidebar-item">Sample scenario</p>
        </div>
        <div className="sidebar-elements">
          <img src="/svgs/scenarios-icon.svg" alt="" />
          <p className="sidebar-item">B2B SaaS Ravenue</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[1px] w-full bg-[#303030]"></div>
        <div className="sidebar-elements">
          <img src="/svgs/bank-icon.svg" alt="" />
          <p className="sidebar-item">Lunara Banking</p>
        </div>
        <div className="sidebar-elements">
          <img src="/svgs/upgrade-icon.svg" alt="" />
          <p className="sidebar-item">Upgrade to plus</p>
        </div>
        <div className="flex items-center gap-3 bg-[#212121] py-2 px-3 rounded-[4px]">
          <img src="/svgs/solace-icon.svg" alt="" />
          <div>
            <h1>Solace</h1>
            <p className="text-gray-400">Selena James</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SideBar;

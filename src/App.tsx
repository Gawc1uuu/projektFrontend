import React from "react";
import Sidebar from "./components/Sidebar";
import worldIcon from "./assets/woldicon.svg";
import routerIcon from "./assets/Routericon.svg";
import apIcon from "./assets/Accesspoint.svg";
import userIcon from "./assets/userIcon.svg";
import errorIcon from "./assets/erroricon.svg";

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className=" flex-grow flex justify-center mt-32">
        <div className="w-[70%] bg-white rounded-xl p-10 overflow-y-auto">
          <div className="flex justify-around items-center mt-10 space-x-2">
            <div className="relative">
              <img className="w-20 md:w-24" src={worldIcon.toString()} alt="" />
              <img
                className="absolute
               top-12 left-10 w-16"
                src={errorIcon.toString()}
                alt=""
              />
            </div>
            <div className="border-t-4 border-gray-500 w-14 md:w-24"></div>
            <div>
              <img
                className="w-20 md:w-24"
                src={routerIcon.toString()}
                alt=""
              />
            </div>
            <div className="border-t-4 border-gray-500 w-14 md:w-24"></div>
            <div>
              <img className="w-20 md:w-24" src={apIcon.toString()} alt="" />
            </div>
            <div className="border-t-4 border-gray-500 w-14 md:w-24"></div>
            <div>
              <img className="w-20 md:w-24" src={userIcon.toString()} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

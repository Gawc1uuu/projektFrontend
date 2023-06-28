import React, { useState } from "react";
import openIcon from "../assets/open.svg";
import statusIcon from "../assets/status-icon.svg";
import cloudIcon from "../assets/cloud-icon.svg";
import logoutIcon from "../assets/logoutBlue.svg";
import toolsIcon from "../assets/tools-icon.svg";
import settiningsIcon from "../assets/settinigsiconblue.svg";
import unionIcon from "../assets/Union.svg";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Status", src: statusIcon },

    { title: "Settinings", src: settiningsIcon },
    { title: "Tools", src: toolsIcon },
    { title: "Cloud", src: cloudIcon },
    { title: "OneMesh", src: unionIcon },
    { title: "Logout", src: logoutIcon },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20 "
      } p-5 pt-8 h-screen bg-gray-100 absolute duration-300 flex flex-col items-center`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-6 h-6 rounded-full bg-white absolute cursor-pointer -right-3 top-9 border-2 border-blue-900 "
      >
        <img
          src={openIcon.toString()}
          className={`w-4 ${
            !open ? "rotate-0" : "-rotate-180"
          } duration-500 transition`}
          alt=""
        />
      </div>
      <div className="flex gap-x-4 mb-5">
        <img className="w-[100px]" src={logo.toString()} alt="" />
      </div>
      <ul className="flex flex-col items-center justify-center space-y-4">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`h-15 ${
              open ? "w-72" : "w-20 justify-center"
            } text-gray-700 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-200 hover:bg-opacity-50 rounded-md`}
          >
            <img className={`w-[50px]`} src={menu.src.toString()} alt="" />

            {open ? <span>{menu.title}</span> : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

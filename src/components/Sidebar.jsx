import React from "react";
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GoInbox } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/*Twitter icon*/}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://www.omnicoreagency.com/wp-content/uploads/2015/10/Twitter-Logo.png.webp"
        />
      </div>

      {/*Menu*/}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem className="hoverEffect" text="Home" Icon={IoMdHome} />
        <SidebarMenuItem text="Explore" Icon={FaHashtag} />
        <SidebarMenuItem text="Notifications" Icon={FaRegBell} />
        <SidebarMenuItem text="Messages" Icon={GoInbox} />
        <SidebarMenuItem text="Bookmarks" Icon={CiBookmark} />
        <SidebarMenuItem text="Lists" Icon={FaRegClipboard} />
        <SidebarMenuItem text="Profile" Icon={FaRegUser} />
        <SidebarMenuItem text="More" Icon={TbDotsCircleHorizontal} />
      </div>
      {/*Button*/}

      <button className="bg-blue-500 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline">
        Tweet
      </button>

      {/* Miniprofile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          className="w-10 h-10 rounded-full xl:mr-2"
          src="https://kpi.fei.tuke.sk/sites/www2.kpi.fei.tuke.sk/files/presentation_images/susc23-1.jpg"
          alt=""
        />

        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Username</h4>
          <p className="to-gray-500">@username</p>
        </div>
        <HiDotsHorizontal size={30} className="xl:ml-8  hidden xl:inline" />
      </div>
    </div>
  );
}

"use client";
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
import Miniprofile from "./Miniprofile";
import { signOut, signIn, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-10">
      {/*Twitter icon*/}
      <div className="hoverEffect hover:bg-blue-100 xl:px-1 flex items-center space-x-2">
        <Image
          width="50"
          height="50"
          src="https://www.omnicoreagency.com/wp-content/uploads/2015/10/Twitter-Logo.png.webp"
        />
        <h1 className="font-bold text-3xl p-4">Twintter</h1>
      </div>

      {/*Menu*/}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={IoMdHome} />
        <SidebarMenuItem text="Explore" Icon={FaHashtag} />
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={FaRegBell} />
            <SidebarMenuItem text="Messages" Icon={GoInbox} />
            <SidebarMenuItem text="Bookmarks" Icon={CiBookmark} />
            <SidebarMenuItem text="Lists" Icon={FaRegClipboard} />
            <SidebarMenuItem text="Profile" Icon={FaRegUser} />
            <SidebarMenuItem text="More" Icon={TbDotsCircleHorizontal} />
          </>
        )}
      </div>
      {/*Button*/}
      {session ? (
        <button className="bg-blue-500 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline">
          Tweet
        </button>
      ) : (
        <button
          onClick={signIn}
          className="bg-blue-500 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline"
        >
          Sign in
        </button>
      )}

      <Miniprofile />
    </div>
  );
}

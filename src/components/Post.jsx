"use client";
import { useEffect } from "react";
import { CiChat1, CiChat2, CiShare1 } from "react-icons/ci";
import { FaChartBar, FaHeart, FaTrash } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import {
  HiChartBar,
  HiChat,
  HiChatAlt,
  HiDotsHorizontal,
} from "react-icons/hi";

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
      <img
        src={post.userImg}
        alt="profile-pic"
        className="rounded-full h-11 w-11 mr-4"
      />
      {/* right side */}
      <div className="">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex space-x-1 whitespace-nowrap items-center">
            {/* name */}
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            {/* username */}
            <span className="text-sm sm:text-[15px] text-gray-800">
              @{post.username}
            </span>
            {/* timestamp */}
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          {/* dot icon */}
          <HiDotsHorizontal
            size={30}
            className="hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2"
          />
        </div>

        {/* post text */}

        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>
        {/* post image */}
        <img className="rounded-2xl mr-2" src={post.img} alt="post-image" />
        {/* icons */}
        <div className="flex p-2 justify-between text-gray-500">
          <HiChat
            className="hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            size={30}
          />
          <FaTrash
            className="hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
            size={30}
          />
          <GoHeart
            className="hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
            size={30}
          />
          <CiShare1
            className="hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            size={30}
          />
          <FaChartBar
            className="hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            size={30}
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import {
  HiEmojiHappy,
  HiOutlineEmojiHappy,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { useSession } from "next-auth/react";

export default function Input() {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <img
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
            src={session?.user?.image}
            alt="profile-pic"
          />
          <div className="w-full divide-y divide-gray-200">
            <div className="">
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                placeholder="What's on your mind ?"
                rows="2"
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex ">
                <HiOutlinePhotograph
                  size={30}
                  className="hoverEffect p-2 text-sky-500 hover:bg-sky-100"
                />
                <HiOutlineEmojiHappy
                  size={30}
                  className="hoverEffect p-2 text-sky-500 hover:bg-sky-100"
                />
              </div>
              <button
                disabled
                className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

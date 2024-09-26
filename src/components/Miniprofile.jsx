"use client";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Miniprofile() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto mb-10">
      {session && (
        <div className="flex">
          <img
            onClick={() => signOut()}
            className="w-10 h-10 rounded-full xl:mr-2"
            src={session.user?.image}
            alt="user-img"
          />

          <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold">{session.user?.name}</h4>
            <p className="to-gray-500">@{session.user?.username}</p>
          </div>
          <HiDotsHorizontal size={30} className="xl:ml-2  hidden xl:inline" />
        </div>
      )}
    </div>
  );
}

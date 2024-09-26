"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="">
      <div className="flex justify-center mt-20">
        <img
          className="w-96 h-96 rotate-6"
          src="https://onstipe.com/wp-content/themes/customtheme/assets/images/live-twitter-wall.png"
          alt="twintter"
        />
        <div className="grid items-center ">
          <img
            className="w-96 h-80"
            src="https://download.logo.wine/logo/Twitter/Twitter-Logo.wine.png"
            alt="logo"
          />
          <p className="italic text-xl">
            This project is created for learning purposes.
          </p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="rounded-full bg-blue-500 p-3 text-white font-bold hover:brightness-90"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

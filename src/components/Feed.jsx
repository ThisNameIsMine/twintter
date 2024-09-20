import React from "react";
import { TbSparkles } from "react-icons/tb";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="xl:ml-[300px] border-l border-r xl:min-w-[600px] sm:ml-[73px] flex-grow max-w-xl border-gray-200">
      {/* TweetBox */}
      <div className="flex py-2 px-3 sticky border-b top-0 z-50 bg-white border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <TbSparkles size={30} />
        </div>
      </div>
      {/* TweetBox */}
      <Input />
    </div>
  );
}

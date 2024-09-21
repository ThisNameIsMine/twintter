import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Widgets() {
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center mt-3 p-3 bg-red-300 rounded-full relative">
          <CiSearch size={20} className="text-gray-500 z-50 " />
          <input
            type="text"
            placeholder="Search Twitter"
            className="bg-gray-100 p-2 rounded-full absolute inset-0 pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
}

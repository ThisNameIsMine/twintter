"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import News from "./News";

export default function Widgets({ newsResults }) {
  const [articleNum, setArticleNum] = useState(5);
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
      {/* News */}
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4 ">What's happening</h4>
        {newsResults.slice(0, articleNum).map((news) => (
          <News key={news.title} article={news} />
        ))}
        <button
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
          onClick={() => setArticleNum(articleNum + 3)}
        >
          Show more
        </button>
      </div>
    </div>
  );
}

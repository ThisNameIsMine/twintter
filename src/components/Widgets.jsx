"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import News from "./News";
import { AnimatePresence, motion } from "framer-motion";

export default function Widgets({ newsResults, randomUsers }) {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);
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
        <AnimatePresence>
          {newsResults.slice(0, articleNum).map((news) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <News key={news.title} article={news} />
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
          onClick={() => setArticleNum(articleNum + 3)}
        >
          Show more
        </button>
      </div>
      {/* People to follow */}
      <div className="text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%] sticky top-16 ">
        <h4 className="font-bold text-xl px-4">Who to follow:</h4>
        <AnimatePresence>
          {randomUsers.slice(0, randomUserNum).map((user) => (
            <motion.div
              key={user.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <div
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 transition duration-500 ease-out"
                key={user.login.username}
              >
                <img
                  className="rounded-full"
                  src={user.picture.thumbnail}
                  width="40"
                  alt=""
                />
                <div className="truncate ml-4 leading-5">
                  <h4 className="font-bold hover:underline text-[14px] truncate">
                    {user.login.username}
                  </h4>
                  <h5 className="text-[13px] text-gray-500 truncate">
                    {user.name.first + " " + user.name.last}
                  </h5>
                </div>
                <button className="text-white bg-black rounded-full px-2 py-1.5 font-bold text-sm hover:text-blue-400 ml-auto">
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
    </div>
  );
}

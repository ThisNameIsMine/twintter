"use client";
import React from "react";
import { TbSparkles } from "react-icons/tb";
import Input from "./Input";
import Post from "./Post";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  snapshotEqual,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AnimatePresence, motion } from "framer-motion";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "tweets"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );
  console.log(posts);
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
      {/* Posts */}
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Post key={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

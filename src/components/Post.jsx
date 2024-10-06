"use client";
import { deleteDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { CiChat1, CiChat2, CiShare1 } from "react-icons/ci";
import { FaChartBar, FaHeart, FaTrash } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {
  HiChartBar,
  HiChat,
  HiChatAlt,
  HiDotsHorizontal,
} from "react-icons/hi";
import Moment from "react-moment";
import { db, storage } from "../../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
} from "firebase/firestore";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { deleteObject } from "firebase/storage";
import { ref } from "firebase/storage";
import { modalState, postIdState } from "../../atom/modalAtom";
import { useRecoilState } from "recoil";

export default function Post({ post }) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "tweets", post.id, "likes"),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (session === null) return;
    if (hasLiked) {
      await deleteDoc(doc(db, "tweets", post.id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "tweets", post.id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }
  async function deletePost() {
    if (session === null) return;
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "tweets", post.id));
      await deleteObject(ref(storage, `tweets/${post.id}/image`));
    }
  }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
      <img
        src={post.data().userImg}
        alt="pp"
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
              {post.data().name}
            </h4>
            {/* username */}
            <span className="text-sm sm:text-[15px] text-gray-800 lg:text-[15px]">
              @{post.data().username}
            </span>
            {/* timestamp */}
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
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
          {post.data().text}
        </p>
        {/* post image */}
        {post.data().image && (
          <img
            className="rounded-2xl mr-2"
            src={post.data().image}
            alt="post-image"
          />
        )}
        {/* icons */}
        <div className="flex p-2 justify-between text-gray-500">
          <HiChat
            onClick={() => {
              if (!session) {
                signIn();
              } else {
                setPostId(post.id);
                setOpen(!open);
              }
            }}
            className="hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            size={30}
          />
          {session?.user?.uid === post?.data().id && (
            <FaTrash
              onClick={deletePost}
              className="hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
              size={30}
            />
          )}

          <div className="flex items-center">
            {hasLiked ? (
              <GoHeartFill
                onClick={likePost}
                className="hoverEffect p-2 text-red-600 hover:text-gray-200 hover:bg-white"
                size={30}
              />
            ) : (
              <GoHeart
                onClick={likePost}
                className="hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
                size={30}
              />
            )}
            {likes.length > 0 && (
              <span
                className={`text-sm font-bold ${hasLiked && "text-red-600"}`}
              >
                {likes.length}
              </span>
            )}
          </div>

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

"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../atom/modalAtom";
import Modal from "react-modal";
import { XIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState, useRef } from "react";
import { db } from "../../firebase";
import { onSnapshot, doc } from "firebase/firestore";
import Moment from "react-moment";
import { useSession } from "next-auth/react";
import { HiOutlineEmojiHappy, HiOutlinePhotograph } from "react-icons/hi";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    onSnapshot(doc(db, "tweets", postId), (snapshot) => {
      setPost(snapshot);
    });
  }, [postId, db]);

  async function sendComment() {
    if (!input.trim()) return;
    await addDoc(collection(db, "tweets", post.id, "comments"), {
      comment: input,
      name: session.user.name,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });
    setInput("");
    setOpen(false);
    router.push(`/posts/${post.id}`);
  }

  return (
    <div className="">
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          shouldCloseOnOverlayClick={false}
          className="max-w-lg w-[90%] outline-none absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md"
        >
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1.5">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect w-10 h-10 flex items-center justify-center"
              >
                <XMarkIcon className="h-[30px] text-gray-700 " />
              </div>
            </div>
            <div className="p-2 flex items-center space-x-1 relative">
              <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300" />
              <img
                src={post?.data()?.userImg}
                alt="pp"
                className="rounded-full h-11 w-11 mr-4"
              />
              <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                {post?.data()?.name}
              </h4>
              {/* username */}
              <span className="text-sm sm:text-[15px] text-gray-800 lg:text-[15px]">
                @{post?.data()?.username}
              </span>
              {/* timestamp */}
              <span className="text-sm sm:text-[15px] hover:underline">
                <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
              </span>
            </div>
            <p className="text-gray-500 text-[15px] sm:text-[16px] ml-16 mb-2 ">
              {post?.data()?.text}
            </p>

            <div className="flex border-gray-200 p-3 space-x-3">
              <img
                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
                src={session?.user?.image}
                alt="profile-pic"
              />
              <div className="w-full divide-y divide-gray-200">
                <div className="">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                    placeholder="Tweet your reply"
                    rows="2"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2.5">
                  <div className="flex ">
                    <div
                      className=""
                      // onClick={() => filePickerRef.current.click()}
                    >
                      <HiOutlinePhotograph
                        size={30}
                        className="hoverEffect p-2 text-sky-500 hover:bg-sky-100"
                      />
                      {/* <input
                        type="file"
                        hidden
                        ref={filePickerRef}
                        onChange={addPostImage}
                      /> */}
                    </div>
                    <HiOutlineEmojiHappy
                      size={30}
                      className="hoverEffect p-2 text-sky-500 hover:bg-sky-100"
                    />
                  </div>
                  <button
                    disabled={!input.trim()}
                    className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                    onClick={sendComment}
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

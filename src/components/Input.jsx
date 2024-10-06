"use client";
import React from "react";
import {
  HiEmojiHappy,
  HiOutlineEmojiHappy,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { useSession } from "next-auth/react";
import { useState, useRef } from "react";
import { addDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { FaXing } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Input() {
  const { data: session } = useSession();
  const [tweet, setTweet] = useState("");
  const [imageToPost, setImageToPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const sendTweet = async () => {
    if (loading) return;
    setLoading(true);
    const docref = await addDoc(collection(db, "tweets"), {
      id: session.user.uid,
      text: tweet,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });
    const image = ref(storage, `tweets/${docref.id}/image`);
    if (imageToPost) {
      await uploadString(image, imageToPost, "data_url").then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(image);
          await updateDoc(doc(db, "tweets", docref.id), {
            image: downloadURL,
          });
        }
      );
    }
    setTweet("");
    setImageToPost(null);
    setLoading(false);
  };

  const addPostImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      const image = readerEvent.target.result;
      setImageToPost(image);
    };
  };

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
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                placeholder="What's on your mind ?"
                rows="2"
              ></textarea>
            </div>
            {imageToPost && (
              <div className="relative ">
                <FaX
                  className="border h-7 w-7 cursor-pointer bg-sky-200 border-white p-1 text-black rounded-full absolute "
                  onClick={() => setImageToPost(null)}
                />
                <img
                  src={imageToPost}
                  alt="img-to-post"
                  className={`${loading && "animate-pulse"}`}
                />
              </div>
            )}
            {!loading && (
              <div className="flex items-center justify-between pt-2.5">
                <div className="flex ">
                  <div
                    className=""
                    onClick={() => filePickerRef.current.click()}
                  >
                    <HiOutlinePhotograph
                      size={30}
                      className="hoverEffect p-2 text-sky-500 hover:bg-sky-100"
                    />
                    <input
                      type="file"
                      hidden
                      ref={filePickerRef}
                      onChange={addPostImage}
                    />
                  </div>
                  <HiOutlineEmojiHappy
                    size={30}
                    className="hoverEffect p-2 text-sky-500 hover:bg-sky-100"
                  />
                </div>
                <button
                  disabled={!tweet.trim()}
                  className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                  onClick={sendTweet}
                >
                  Tweet
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

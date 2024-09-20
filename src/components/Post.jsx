"use client";
import { useEffect } from "react";

export default function Post({ post }) {
  return (
    <div className="">
      {/* image */}
      <img src={post.userImg} alt="profile-pic" />
      {/* right side */}
      <div className="">
        {/* name */}
        <h4>{post.name}</h4>
        {/* username */}
        <span>{post.username}</span>
        {/* timestamp */}
        <p>{post.timestamp}</p>
      </div>
      {/* header */}
      <div className="">
        {/* post user info */}
        <div className=""></div>
        {/* dot icon */}
      </div>
      {/* post text */}
      {/* post image */}
      {/* icons */}
      <div className=""></div>
    </div>
  );
}

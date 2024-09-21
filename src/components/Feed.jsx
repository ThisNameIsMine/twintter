import React from "react";
import { TbSparkles } from "react-icons/tb";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Elon Musk",
      username: "elonmusk",
      userImg:
        "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png",
      img: "https://www.astronomy.com/uploads/2024/09/starship-test-flight-mission-1200x908.jpg",
      text: "Starship to the moon",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Jeff Bezos",
      username: "jeffbezos",
      userImg:
        "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png",
      img: "https://i.ytimg.com/vi/YGt3gZXVWPw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAoABjUrBgXSQYGfSUMVtO2yjV7Q",
      text: "My new humble purchase.",
      timestamp: "9 hours ago",
    },
  ];
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
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

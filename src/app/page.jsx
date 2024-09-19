import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-7xl mx-auto ">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets: news, people to follow */}
    </main>
  );
}

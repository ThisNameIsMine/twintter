import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";
import { getNewsData, getrandomUsers } from "@/app/utility";

export default async function Home() {
  const newsResults = await getNewsData();
  const randomUsers = await getrandomUsers();
  return (
    <main className="flex min-h-screen mx-auto ">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets: news, people to follow */}
      <Widgets newsResults={newsResults} randomUsers={randomUsers} />
    </main>
  );
}

//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

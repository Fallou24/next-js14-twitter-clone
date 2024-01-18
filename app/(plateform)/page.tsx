import { auth, currentUser } from "@clerk/nextjs";
import Feed from "../ui/home/feed/Feed";
import { redirect } from "next/navigation";

export default async function Home() {
  return <Feed />;
}

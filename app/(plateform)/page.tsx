import { auth, currentUser } from "@clerk/nextjs";
import Feed from "../ui/home/feed/Feed";

export default async function Home() {
  const user = await currentUser()
  
  return <Feed />;
}

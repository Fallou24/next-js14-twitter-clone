import Feed from "../ui/home/feed/Feed";
import RightBar from "../ui/home/rightBar/RightBar";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex gap-2 ">
      <Feed />
      <RightBar />
    </div>
  );
}

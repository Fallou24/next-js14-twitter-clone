import { getUserPost } from "@/app/lib/data";
import Post from "@/app/ui/home/feed/Post";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  const posts = await getUserPost(params.username);
  return (
    <>
      {posts?.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </>
  );
}

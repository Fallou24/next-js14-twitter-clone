import { getUserPost } from "@/app/lib/data";
import Post from "@/app/ui/shared/Post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile',
};

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

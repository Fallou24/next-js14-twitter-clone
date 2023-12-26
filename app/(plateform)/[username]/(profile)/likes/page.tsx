import { getUserLikes } from "@/app/lib/data";
import Post from "@/app/ui/home/feed/Post";
import React from "react";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  const posts = await getUserLikes(params.username);

  return (
    <>
      {posts?.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </>
  );
}

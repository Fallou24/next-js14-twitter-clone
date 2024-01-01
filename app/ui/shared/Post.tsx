import { Post } from "@prisma/client";
import PostContent from "./PostContent";
import { postLikeByUser } from "@/app/lib/data";

export default async function Post({ post }: { post: any }) {
  const isAlreadyLiked = !!(await postLikeByUser(post.id));
  
  return (
    <>
      <PostContent post={post} isAlreadyLiked={isAlreadyLiked} />
      <hr className="border-border-color border-1" />
    </>
  );
}

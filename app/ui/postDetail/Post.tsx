import Image from "next/image";
import PostActions from "../home/feed/PostActions";
import { Post } from "@prisma/client";
type postProps = Post & {
  _count: { likes: number; reply: number };
};
export default function Post({ post }: { post: postProps }) {
  const likes = post._count.likes;
  const replies = post._count.reply;

  return (
    <>
      <article className="flex gap-2 items-top px-4 pt-2 mb-2">
        <p className="h-[45px] min-w-[45px] rounded-full overflow-hidden relative">
          <Image
            src={post.userImg}
            alt="Photo du auteur"
            fill
            className="object-cover"
          />
        </p>
        <div className="w-full">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold">{post.fullName}</h3>
            <p className="text-[#6E767D] text-sm">@{post.username}</p>
            <p className="text-[#6E767D] text-sm">7m</p>
          </div>
          <p className="font-normal mb-1">{post.content}</p>
          {post.postImg && (
            <p className="mb-3 relative h-52">
              <Image
                src={post.postImg}
                alt="Image du post"
                fill={true}
                className="rounded-3xl object-cover"
              />
            </p>
          )}
          <PostActions likes={likes} comments={replies} />
        </div>
      </article>
      <hr className="border-border-color border-1" />
    </>
  );
}

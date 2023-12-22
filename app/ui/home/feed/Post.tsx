"use client";
import Image from "next/image";
import PostActions from "./PostActions";
import { Post } from "@prisma/client";
import Link from "next/link";

export default function Post({ post }: { post:any }) {
  
  const likes = post._count.likes
  const comment = post._count.reply
  const {
    id,
    userImg,
    userId,
    username,
    content,
    createdAt,
    postImg,
    fullName,
  } = post;

  return (
    <>
      <Link href={post.username+"/posts/"+post.id} className="flex items-start gap-2 px-4 pt-2 mb-2 ">
        <p className="h-[45px] min-w-[45px] rounded-full overflow-hidden relative">
          <Image
            src={userImg}
            alt="Photo du auteur"
            fill
            className="object-cover"
          />
        </p>
        <div className="w-full">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold">{fullName}</h3>
            <p className="text-[#6E767D] text-sm">@{username}</p>
            <p className="text-[#6E767D] text-sm">7m</p>
          </div>
          <p className="font-normal mb-1">{content}</p>
          {postImg && (
            <p className="mb-3 relative h-52">
              <Image
                src={postImg}
                alt="Image du post"
                fill={true}
                className="rounded-3xl object-cover"
              />
            </p>
          )}
          <PostActions likes={likes} comments={comment} />
        </div>
      </Link>
      <hr className="border-border-color border-1" />
    </>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import PostActions from "./PostActions";

export default function PostContent({
  post,
  isAlreadyLiked,
}: {
  post: any;
  isAlreadyLiked: boolean;
}) {
  const likes = post._count?.likes;
  const comment = post._count?.reply;
  const {
    id,
    content,
    postImg,
  } = post;
  const router = useRouter();
  return (
    <article
      onClick={() => router.push("/" + post.profile.username + "/posts/" + post.id)}
      className="flex items-start gap-2 px-4 pt-2 mb-2 cursor-pointer"
    >
      <p className="h-[45px] min-w-[45px] rounded-full overflow-hidden relative">
        <Image
          src={post.profile.userImageUrl}
          alt="Photo du auteur"
          fill
          className="object-cover"
        />
      </p>
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold">{post.profile.fullName}</h3>
          <p className="text-[#6E767D] text-sm">@{post.profile.username}</p>
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
        <PostActions
          isAlreadyLiked={isAlreadyLiked}
          likes={likes}
          comments={comment}
          postId={id}
        />
      </div>
    </article>
  );
}

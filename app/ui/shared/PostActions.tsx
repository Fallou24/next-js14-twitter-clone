"use client";
import { likePost } from "@/app/lib/actions";
import clsx from "clsx";
import Image from "next/image";
import Reac from "react";

export default function PostActions({
  likes,
  comments,
  postId,
  isAlreadyLiked,
}: {
  likes: number;
  comments: number;
  postId: string;
  isAlreadyLiked: boolean;
}) {
  return (
    <div className="w-1/2 flex justify-between">
      <p className="flex gap-1 text-[#6E767D] text-sm items-center">
        <Image src="/Reply.svg" alt="reply logo" width={20} height={20} />
        <span>{comments}</span>
      </p>

      <button
        onClick={async (e) => {
          e.stopPropagation();
          await likePost(postId);
        }}
        type="button"
        className=" flex gap-1 text-[#6E767D] text-sm items-center"
      >
        {isAlreadyLiked ? (
          <Image src="/like2.svg" alt="like icon" width={20} height={20} />
        ) : (
          <Image src="/like.svg" alt="like icon" width={20} height={20} />
        )}
        <span className={clsx({ "text-[#F91880]": isAlreadyLiked })}>
          {likes}
        </span>
      </button>
    </div>
  );
}

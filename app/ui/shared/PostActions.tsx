"use client";
import { likePost } from "@/app/lib/actions";
import { postLikeByUser } from "@/app/lib/data";
import clsx from "clsx";
import { Heart } from "lucide-react";
import Image from "next/image";
import React, { useOptimistic, useRef } from "react";

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
  const initialState = {
    isLiked: isAlreadyLiked,
    likes,
  };
  const [state, addOptimisticLike] = useOptimistic(initialState, (state) =>
    state.isLiked
      ? {
          isLiked: false,
          likes: state.likes - 1,
        }
      : {
          isLiked: true,
          likes: state.likes + 1,
        }
  );
  return (
    <div className="w-1/2 flex justify-between">
      <p className="flex gap-1 text-[#6E767D] text-sm items-center">
        <Image src="/Reply.svg" alt="reply logo" width={20} height={20} />
        <span>{comments}</span>
      </p>

      <button
        onClick={async (e) => {
          e.stopPropagation();
          addOptimisticLike(null);
          await likePost(postId);
        }}
        type="button"
        className=" flex gap-1 text-[#6E767D] text-sm items-center"
      >
        {state.isLiked ? (
          <Image src="/like2.svg" alt="like icon" width={20} height={20} />
        ) : (
          <Image src="/like.svg" alt="like icon" width={20} height={20} />
        )}
        <span className={clsx({ "text-[#F91880]": state.isLiked })}>
          {state.likes}
        </span>
      </button>
    </div>
  );
}

import Image from "next/image";
import PostActions from "../home/feed/PostActions";
import { Post } from "@prisma/client";
import Link from "next/link";

export default function RepliesItem({ reply }: { reply: Post }) {
  return (
    <>
      <Link
        href={"/" + reply.username + "/posts/" + reply.id}
        className="flex gap-2 items-top px-4 pt-2 mb-2"
      >
        <p className="h-[45px] min-w-[45px] rounded-full overflow-hidden relative">
          <Image
            src={reply.userImg}
            alt="Photo du auteur"
            fill
            className="object-cover"
          />
        </p>
        <div className="w-full">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold">{reply.fullName}</h3>
            <p className="text-[#6E767D] text-sm">@{reply.username}</p>
            <p className="text-[#6E767D] text-sm">7m</p>
          </div>
          <p className="font-normal mb-1">{reply.content}</p>
          {reply.postImg && (
            <p className="mb-3 relative h-52">
              <Image
                src={reply.postImg}
                alt="Image du post"
                fill={true}
                className="rounded-3xl object-cover"
              />
            </p>
          )}
        </div>
      </Link>
      <hr className="border-border-color border-1" />
    </>
  );
}

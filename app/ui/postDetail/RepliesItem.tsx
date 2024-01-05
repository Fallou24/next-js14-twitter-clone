import Image from "next/image";
import PostActions from "../shared/PostActions";
import { Post, Profile } from "@prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";

type replyPropsType = Post & {
  profile: Profile;
};

export default function RepliesItem({ reply }: { reply: replyPropsType }) {
  return (
    <>
      <Link
        href={"/" + reply.profile.username + "/posts/" + reply.id}
        className="flex gap-2 items-top px-4 pt-2 mb-2"
      >
        <p className="h-[45px] min-w-[45px] rounded-full overflow-hidden relative">
          <Image
            src={reply.profile.userImageUrl}
            alt="Photo du auteur"
            fill
            className="object-cover"
          />
        </p>
        <div className="w-full">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold">{reply.profile.fullName}</h3>
            <p className="text-[#6E767D] text-sm">@{reply.profile.username}</p>
            <p className="text-[#6E767D] text-sm">7m</p>
          </div>
          <p className="font-normal mb-1">{reply.content}</p>
        </div>
      </Link>
      <hr className="border-border-color border-1" />
    </>
  );
}

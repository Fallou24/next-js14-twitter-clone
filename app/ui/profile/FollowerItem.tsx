import { Profile } from "@prisma/client";
import Image from "next/image";
import React from "react";
import FollowButton from "./FollowButton";

export default function FollowerItem({ user }: { user: Profile }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center  my-2">
        <p className="w-[40px] h-[40px] relative overflow-hidden rounded-full">
          <Image
            src={user.userImageUrl}
            alt="Photo du auteur"
            fill
            className="object-cover "
          />
        </p>
        <div>
          <p className="font-medium">{user.fullName}</p>
          <p className="text-gray-100 text-opacity-70 text-sm">
            @{user.username}
          </p>
        </div>
      </div>
      <FollowButton id={user.id} />
    </div>
  );
}

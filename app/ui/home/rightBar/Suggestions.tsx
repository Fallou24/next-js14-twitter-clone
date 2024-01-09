import { Profile } from "@prisma/client";
import Image from "next/image";
import React from "react";
import FollowButton from "../../profile/FollowButton";

export default function Suggestions({
  userToSuggest,
}: {
  userToSuggest: Profile[];
}) {
  return (
    <div className="bg-border-color rounded-xl p-2 mt-4">
      <h2 className="font-bold text-lg mb-1">Suggestions</h2>
      {userToSuggest.map((user) => (
        <div className="flex justify-between items-center " key={user.id}>
          <div className="flex gap-2 items-center  my-2">
            <p className="w-[45px] h-[45px] relative overflow-hidden rounded-full">
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
      ))}
    </div>
  );
}

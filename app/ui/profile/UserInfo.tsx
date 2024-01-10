import Link from "next/link";
import React from "react";

export default function UserInfo({ userInfo }: { userInfo: any }) {
  return (
    <div className="px-4 mt-16">
      <h3 className="font-bold text-2xl">{userInfo.fullName}</h3>
      <p className="text-gray-color mb-4">@{userInfo.username}</p>
      {userInfo.bio && <p className="mb-1">{userInfo.bio}</p>}
      <div className="flex gap-2">
        <Link
          className="hover:underline"
          href={"/" + userInfo.username + "/followings"}
        >
          <span className="font-medium mr-1">{userInfo._count.follower}</span>
          <span className="text-gray-color">abonnements</span>
        </Link>
        <Link
          className="hover:underline"
          href={"/" + userInfo.username + "/followers"}
        >
          <span className="font-medium mr-1">{userInfo._count.following}</span>
          <span className="text-gray-color">abonnés</span>
        </Link>
      </div>
    </div>
  );
}

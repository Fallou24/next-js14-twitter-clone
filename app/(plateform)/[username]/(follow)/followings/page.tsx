import { getUserFollowings } from "@/app/lib/data";
import FollowerItem from "@/app/ui/profile/FollowerItem";
import FollowingList from "@/app/ui/profile/FollowingList";
import React from "react";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  const users = await getUserFollowings(params.username);
  return (
    <div className="px-4">
      {users?.map((user) => (
        <FollowerItem user={user} key={user.id} />
      ))}
    </div>
  );
}

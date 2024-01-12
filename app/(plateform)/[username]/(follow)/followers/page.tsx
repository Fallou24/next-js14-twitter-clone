import { getUserFollowers } from "@/app/lib/data";
import FollowerItem from "@/app/ui/profile/FollowerItem";
import { Profile } from "@prisma/client";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  const users = await getUserFollowers(params.username);

  return (
    <div className="px-4">
      {users?.map((user:Profile) => (
        <FollowerItem user={user} key={user.id} />
      ))}
    </div>
  );
}

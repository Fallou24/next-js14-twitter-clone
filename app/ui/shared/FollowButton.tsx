import { followUser } from "@/app/lib/actions";
import { isFollowed } from "@/app/lib/data";
import { currentUser } from "@clerk/nextjs";
import SugessionButton from "./SugessionButton";

export default async function FollowButton({ id }: { id: string }) {
  const user = await currentUser();

  const followWithId = followUser.bind(null, id);

  const isUserFollowed = await isFollowed(id);

  return (
    <div>
      {id !== user?.id && (
        <form action={followWithId}>
          <SugessionButton isUserFollowed={isUserFollowed!} />
        </form>
      )}
    </div>
  );
}

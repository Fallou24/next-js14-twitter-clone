import { followUser } from "@/app/lib/actions";
import { isFollowed } from "@/app/lib/data";
import { currentUser, useUser } from "@clerk/nextjs";
import clsx from "clsx";

export default async function FollowButton({ id }: { id: string }) {
  const user = await currentUser();

  const followWithId = followUser.bind(null, id);

  const isUserFollowed = await isFollowed(id);

  return (
    <div>
      {id !== user?.id && (
        <form action={followWithId}>
          <button
            className={clsx("text-black rounded-3xl px-6 p-1", {
              "bg-transparent border border-white text-white": isUserFollowed,
              "bg-white": !isUserFollowed,
            })}
          >
            {isUserFollowed ? "Abonné" : "Suivre"}
          </button>
        </form>
      )}
    </div>
  );
}

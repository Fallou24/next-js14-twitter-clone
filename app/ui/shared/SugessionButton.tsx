"use client";

import clsx from "clsx";

export default function SugessionButton({
  isUserFollowed,
}: {
  isUserFollowed: boolean;
}) {
  return (
    <button
    onClick={(e)=>e.stopPropagation()}
      className={clsx("text-black rounded-3xl px-6 p-1", {
        "bg-transparent border border-white text-white": isUserFollowed,
        "bg-white": !isUserFollowed,
      })}
    >
      {isUserFollowed ? "Abonné" : "Suivre"}
    </button>
  );
}

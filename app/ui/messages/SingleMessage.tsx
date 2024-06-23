import { useUser } from "@clerk/nextjs";
import { Message } from "@prisma/client";
import clsx from "clsx";
import React from "react";

export default function SingleMessage({ message }: { message: Message }) {
  const { user } = useUser();
  return (
    <>
      <p
        className={clsx(
          " max-w-xs w-max  rounded-2xl p-2 ml-auto mb-4 rounded-br-none text-sm",
          { "bg-blue-color": message.authorId === user?.id },
          { "bg-gray-color": message.authorId !== user?.id }
        )}
      >
        {message.content}
      </p>
    </>
  );
}

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
          " max-w-xs w-max p-2 mb-4 text-sm",
          { "bg-blue-color ml-auto rounded-2xl rounded-br-none ": message.authorId === user?.id },
          { "bg-gray-color rounded-2xl rounded-bl-none": message.authorId !== user?.id }
        )}
      >
        {message.content}
      </p>
    </>
  );
}

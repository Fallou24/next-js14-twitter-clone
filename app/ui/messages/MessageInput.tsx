"use client";
import { createMessage } from "@/app/lib/actions";
import { useChatStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { BookImage, SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function MessageInput({
  conversationId,
}: {
  conversationId: string;
}) {
  
  const { user } = useUser();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const createMessagewithConvid = createMessage.bind(null, conversationId);
  return (
    <div className="mt-2">
      <form
        action={async (formData: FormData) => {
          const messageText = formData.get("messageText");
          if (user && messageText) {
            ref.current?.reset();
            const message = await createMessagewithConvid(formData);
          }
        }}
        ref={ref}
        className="bg-border-color  flex rounded-3xl items-center gap-2 px-2"
      >
        <label htmlFor="search">
          <BookImage color="#6E767D" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Démarrer un nouveau message"
          name="messageText"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
        <button type="submit">
          <SendHorizontal color="#6E767D" />
        </button>
      </form>
    </div>
  );
}

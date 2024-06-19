"use client";
import React, { useState } from "react";
import SingleMessage from "./SingleMessage";
import MessageInput from "./MessageInput";
import { useChatStore } from "@/store";
import StartConversationModal from "./StartConversationModal";
import { Profile } from "@prisma/client";

export default function ConversationRoom({
  contacts,
}: {
  contacts: Profile[];
}) {
  const currentConversation = useChatStore((state) => state.currentConversaton);
  const [open, setOpen] = useState(false);
  function onClose() {
    setOpen(false);
  }
  if (!currentConversation) {
    return (
      <div className="flex justify-center items-center w-3/5 p-3">
        <div className="w-1/2">
          <h1 className=" text-3xl font-bold leading-8 mb-4">
            Sélectionnez un message.
          </h1>
          <p>
            Faites un choix dans vos conversations existantes, commencez-en une
            nouvelle ou ne changez rien.
          </p>
          <button
            className="bg-blue-color rounded-full font-bold px-6 mt-4 p-4"
            onClick={() => setOpen(true)}
          >
            Nouveau message
          </button>
        </div>
        <StartConversationModal
          open={open}
          onClose={onClose}
          contacts={contacts}
        />
      </div>
    );
  }
  return (
    <div className="w-3/5 p-3">
      <div className="sticky top-3">
        <h1 className="font-medium mb-5">
          {currentConversation?.recipient.fullName}
        </h1>
        <hr className="border-border-color border-1 mb-8" />
      </div>
      <div className="chat__room overflow-auto">
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
      </div>
      <MessageInput />
    </div>
  );
}
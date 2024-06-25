"use client";
import { startConversation } from "@/app/lib/actions";
import { useChatStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { Profile } from "@prisma/client";
import Image from "next/image";
import React from "react";

export default function Contacts({
  contact,
  onClose,
}: {
  contact: Profile;
  onClose: () => any;
}) {
  const startNewConversation = useChatStore((state) => state.startConversation);
  const { user } = useUser();
  return (
    <div
      onClick={async () => {
        onClose();
        const conversation = await startConversation(contact.id);
        if (conversation?.participant1Id === user?.id) {
          const { participant1, ...rest } = conversation;
          rest.recipient = rest.participant2;
          delete rest.participant2;
          startNewConversation(rest);
        } else if (conversation?.participant2Id === user?.id) {
          const { participant2, ...rest } = conversation;
          rest.recipient = rest.participant1;
          delete rest.participant1;
          startNewConversation(rest);
        } else {
          return;
        }
      }}
      className="flex gap-2 items-center  mb-2 p-2 px-4 cursor-pointer hover:bg-white hover:bg-opacity-10 "
    >
      <p className="w-[40px] h-[40px] relative overflow-hidden rounded-full">
        <Image
          src={contact.userImageUrl}
          alt="Photo du auteur"
          fill
          className="object-cover "
        />
      </p>
      <div>
        <p className="font-medium">{contact.fullName}</p>
        <p className="text-gray-100 text-opacity-70 text-sm">
          @{contact.username}
        </p>
      </div>
    </div>
  );
}

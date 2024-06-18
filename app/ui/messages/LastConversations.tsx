import { currentUser } from "@clerk/nextjs";
import { Conversation, Profile } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface Contact extends Conversation {
  participant1:Profile,
  participant2:Profile
}

export default async function LastConversations({conversation}:{conversation:Contact}) {
  const user = await currentUser()
  const contact = conversation.participant1.id === user?.id ? conversation.participant2 : conversation.participant1
  
  return (
    <div className="flex gap-2 items-center my-2 mb-3 mt-3 cursor-pointer hover:bg-white hover:bg-opacity-10 px-3 py-2">
      <p className="relative h-[45px] w-[45px] rounded-full overflow-hidden">
        <Image
          src={contact.userImageUrl}
          alt="Photo du auteur"
          fill
          className="object-cover"
        />
      </p>
      <div>
        <p className="font-medium">
          <span className="mr-2">{contact.fullName}</span>
          <span className="text-gray-100 mr-2 text-opacity-70 text-sm">@{contact.username}</span>
          <span className="text-gray-100 text-opacity-70 text-sm">8 mai</span>
        </p>
        <p className="text-gray-100 text-opacity-70 text-sm">
          Je suis le dernier
        </p>
      </div>
    </div>
  );
}

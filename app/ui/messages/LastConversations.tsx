"use client"
import { useChatStore } from "@/store";
import { currentUser } from "@clerk/nextjs";
import { Conversation, Message, Profile } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface Contact extends Conversation {
  recipient:Profile,
  messages:Message[]
}

export default  function LastConversations({conversation}:{conversation:Contact}) {
  
  const startNewConversation = useChatStore((state)=>state.startConversation)
  
  return (
  <div className="flex gap-2 items-center my-2 mb-3 mt-3 cursor-pointer hover:bg-white hover:bg-opacity-10 px-3 py-2" onClick={()=>{
    startNewConversation(conversation)
  }}>
      <p className="relative h-[45px] w-[45px] rounded-full overflow-hidden">
        <Image
          src={conversation.recipient.userImageUrl}
          alt="Photo du auteur"
          fill
          className="object-cover"
        />
      </p>
      <div>
        <p className="font-medium">
          <span className="mr-2">{conversation.recipient.fullName}</span>
          <span className="text-gray-100 mr-2 text-opacity-70 text-sm">@{conversation.recipient.username}</span>
          <span className="text-gray-100 text-opacity-70 text-sm">8 mai</span>
        </p>
        <p className="text-gray-100 text-opacity-70 text-sm">
          Je suis le dernier
        </p>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Search from "../home/rightBar/Search";
import LastConversations from "./LastConversations";
import SearchPrivateMessage from "./SearchPrivateMessage";
import { MailPlus } from "lucide-react";
import StartConversation from "./StartConversation";
import { Conversation, Message, Profile } from "@prisma/client";
import { getUserConversations } from "@/app/lib/data";
import pusherJs from "pusher-js";
import { useUser } from "@clerk/nextjs";
interface Contact extends Conversation {
  messages:Message[]
}
export default function ConversationList({
  contacts,
  conversations,
}: {
  contacts: Profile[];
  conversations: Contact[];
}) {
  const [conversationList, setConversationList] = useState(conversations);
  useEffect(() => {
    const pusher = new pusherJs(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chatRoom");
    channel.bind("conversations", function (data: Contact) {
      setConversationList((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      pusher.unsubscribe("chatRoom");
    };
  }, []);
  const { user } = useUser();
  const filteredConversations = conversationList.map((conversation: any) => {
    if (conversation.participant1Id === user?.id) {
      const { participant1, ...rest } = conversation;
      rest.recipient = rest.participant2;
      delete rest.participant2;
      return rest;
    } else if (conversation.participant2Id === user?.id) {
      const { participant2, ...rest } = conversation;
      rest.recipient = rest.participant1;
      delete rest.participant1;
      return rest;
    } else {
      return conversation;
    }
  });

  return (
    <div className="w-2/5 border-x border-x-border-color min-h-screen">
      <div className="flex justify-between items-center mb-4 p-3">
        <h1 className="font-bold text-lg">Messages</h1>
        <StartConversation contacts={contacts} />
      </div>
      <SearchPrivateMessage />
      {filteredConversations?.map((conversation: any) => (
        <LastConversations key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
}

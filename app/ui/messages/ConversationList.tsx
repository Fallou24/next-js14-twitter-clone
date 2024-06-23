import React from "react";
import Search from "../home/rightBar/Search";
import LastConversations from "./LastConversations";
import SearchPrivateMessage from "./SearchPrivateMessage";
import { MailPlus } from "lucide-react";
import StartConversation from "./StartConversation";
import { Conversation, Message, Profile } from "@prisma/client";
import { getUserConversations } from "@/app/lib/data";
interface Contact extends Conversation {
  messages:Message[]
}
export default async function ConversationList({
  contacts,
  conversations,
}: {
  contacts: Profile[];
  conversations: Contact[];
}) {
  return (
    <div className="w-2/5 border-x border-x-border-color min-h-screen">
      <div className="flex justify-between items-center mb-4 p-3">
        <h1 className="font-bold text-lg">Messages</h1>
        <StartConversation contacts={contacts} />
      </div>
      <SearchPrivateMessage />
      {conversations?.map((conversation: any) => (
        <LastConversations key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
}

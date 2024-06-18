import React from "react";
import Search from "../home/rightBar/Search";
import LastConversations from "./LastConversations";
import SearchPrivateMessage from "./SearchPrivateMessage";
import { MailPlus } from "lucide-react";
import StartConversation from "./StartConversation";
import { Profile } from "@prisma/client";
import { getUserConversations } from "@/app/lib/data";

export default async function ConversationList({
  contacts,
}: {
  contacts: Profile[];
}) {
  const conversations = await getUserConversations()  
  return (
    <div className="w-2/5 border-x border-x-border-color">
      <div className="flex justify-between items-center mb-4 p-3">
        <h1 className="font-medium text-xl">Messages</h1>
        <StartConversation  contacts={contacts}/>
      </div>
      <SearchPrivateMessage />
      {conversations?.map(conversation=>(
        <LastConversations key={conversation.id} conversation={conversation} />
      ))}
      
     
    </div>
  );
}

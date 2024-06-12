import React from "react";
import Search from "../home/rightBar/Search";
import LastConversations from "./LastConversations";
import SearchPrivateMessage from "./SearchPrivateMessage";
import { MailPlus } from "lucide-react";

export default function ConversationList() {
  return (
    <div className="w-2/5 border-x border-x-border-color">
      <div className="flex justify-between items-center mb-4 p-3">
        <h1 className="font-medium text-xl">Messages</h1>
        <MailPlus />
      </div>
      <SearchPrivateMessage />
      <LastConversations />
      <LastConversations />
      <LastConversations />
      <LastConversations />
    </div>
  );
}

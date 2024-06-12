import React from "react";
import ConversationList from "../ui/messages/ConversationList";
import Conversation from "../ui/messages/Conversation";
import MessageInput from "../ui/messages/MessageInput";
import { getUserMessages } from "../lib/data";

export default async function Messages() {
  const userMessages = await getUserMessages()

  return (
    <div className="relative w-full">
      <div className=" messages flex">
        <ConversationList />
        <Conversation />
      </div>
    </div>
  );
}

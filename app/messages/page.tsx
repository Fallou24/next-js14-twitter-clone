import React from "react";
import ConversationList from "../ui/messages/ConversationList";
import Conversation from "../ui/messages/Conversation";
import MessageInput from "../ui/messages/MessageInput";

export default function Messages() {
  return (
    <div className="relative w-full">
      <div className=" messages flex">
        <ConversationList />
        <Conversation />
      </div>
    </div>
  );
}

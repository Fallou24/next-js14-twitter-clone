import React from "react";
import ConversationList from "../ui/messages/ConversationList";
import Conversation from "../ui/messages/Conversation";
import MessageInput from "../ui/messages/MessageInput";
import { getContacts, getUserMessages } from "../lib/data";

export default async function Messages({
  searchParams,
}: {
  searchParams: { contact: string };
}) {
  const userMessages = await getUserMessages();
  const contacts = await getContacts(searchParams.contact);
  

  return (
    <div className="relative w-full">
      <div className=" messages flex">
        <ConversationList contacts={contacts} />
        <Conversation />
      </div>
    </div>
  );
}

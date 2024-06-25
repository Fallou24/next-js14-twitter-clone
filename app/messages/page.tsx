import React from "react";
import ConversationList from "../ui/messages/ConversationList";
import MessageInput from "../ui/messages/MessageInput";
import { getContacts, getUserConversations } from "../lib/data";
import ConversationRoom from "../ui/messages/ConversationRoom";

export default async function Messages({
  searchParams,
}: {
  searchParams: { contact: string; conversation: string };
}) {
  const contacts = await getContacts(searchParams.contact);
  const conversations =
    (await getUserConversations(searchParams.conversation)) || [];
 
  
  return (
    <div className="relative w-full">
      <div className=" messages flex">
        <ConversationList contacts={contacts} conversations={conversations} />
        <ConversationRoom contacts={contacts} />
      </div>
    </div>
  );
}

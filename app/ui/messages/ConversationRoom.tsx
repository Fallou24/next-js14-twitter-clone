"use client";
import React, {
  startTransition,
  useEffect,
  useOptimistic,
  useState,
} from "react";
import SingleMessage from "./SingleMessage";
import MessageInput from "./MessageInput";
import { useChatStore } from "@/store";
import StartConversationModal from "./StartConversationModal";
import { Message, Profile } from "@prisma/client";
import pusherJs from "pusher-js";

export default function ConversationRoom({
  contacts,
}: {
  contacts: Profile[];
}) {
  const { currentConversation } = useChatStore();
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    function getMessages() {
      try {
        fetch("http://localhost:3000/api/messages/" + currentConversation?.id!)
          .then((res) => res.json())
          .then((data) => {
            setMessages(data);
          });
      } catch (e) {
        console.log(e);
      }
    }
    currentConversation && getMessages();
  }, [currentConversation]);

  useEffect(() => {
    const pusher = new pusherJs(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chat");
    channel.bind("message", function (data: Message) {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const [open, setOpen] = useState(false);
  function onClose() {
    setOpen(false);
  }

  if (!currentConversation) {
    return (
      <div className="flex justify-center items-center w-3/5 p-3">
        <div className="w-1/2">
          <h1 className=" text-3xl font-bold leading-8 mb-4">
            Sélectionnez un message.
          </h1>
          <p>
            Faites un choix dans vos conversations existantes, commencez-en une
            nouvelle ou ne changez rien.
          </p>
          <button
            className="bg-blue-color rounded-full font-bold px-6 mt-4 p-4"
            onClick={() => setOpen(true)}
          >
            Nouveau message
          </button>
        </div>
        <StartConversationModal
          open={open}
          onClose={onClose}
          contacts={contacts}
        />
      </div>
    );
  }
  return (
    <div className="w-3/5 p-3">
      <div className="sticky top-3">
        <h1 className="font-medium mb-5">
          {currentConversation?.recipient.fullName}
        </h1>
        <hr className="border-border-color border-1 mb-8" />
      </div>
      <div className="chat__room overflow-auto">
        {messages?.map((message: Message, index) => (
          <SingleMessage key={index} message={message} />
        ))}
      </div>
      <MessageInput conversationId={currentConversation.id} />
    </div>
  );
}

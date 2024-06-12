import React from "react";
import SingleMessage from "./SingleMessage";
import MessageInput from "./MessageInput";

export default function Conversation() {
  return (
    <div className="w-3/5 p-3">
      <div className="sticky top-3">
        <h1 className="font-medium mb-5">Saliou Sow</h1>
        <hr className="border-border-color border-1 mb-8" />
      </div>
      <div className="chat__room overflow-auto">
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
      </div>
      <MessageInput />
    </div>
  );
}

"use client";
import { MailPlus } from "lucide-react";
import React, { useState } from "react";
import StartConversationModal from "./StartConversationModal";

export default function StartConversation() {
  const [open, setOpen] = useState(false);
  function onClose() {
    setOpen(false);
  }
  return (
    <>
      <div onClick={()=>setOpen(true)} className="cursor-pointer">
        <MailPlus />
      </div>

      <StartConversationModal open={open} onClose={onClose} />
    </>
  );
}

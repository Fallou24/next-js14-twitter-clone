import { Conversation, Message, Profile } from "@prisma/client";
import { create } from "zustand";

type State = {
  id: string;
  participant1Id: string;
  participant2Id: string;
  lastMessageDate: Date;
  updatedAt: Date;
  recipient: Profile;
  messages: Message[];
};

type ChatState = {
  currentConversation: State | undefined;
  startConversation: (conversation: State) => void;
  messages: Message[] | [];
};

export const useChatStore = create<ChatState>((set) => ({
  currentConversation: undefined,
  messages: [],
  startConversation: (newConversation) =>
    set(() => {
      return { currentConversation: newConversation };
    }),
}));

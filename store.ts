import { Conversation, Message, Profile } from "@prisma/client";
import { create } from "zustand";

type State = {
  id: string;
  participant1Id: string;
  participant2Id: string;
  createdAt: Date;
  updatedAt: Date;
  recipient: Profile;
  messages: Message[];
};

type ChatState = {
  currentConversaton: State | undefined;
  startConversation: (conversation: State) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  currentConversaton: undefined,
  startConversation: (newConversation) =>
    set(() => {
      return { currentConversaton: newConversation };
    }),
}));

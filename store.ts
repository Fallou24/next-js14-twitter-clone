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
  setMessages: (messages: Message[]) => void;

  messages: Message[] | [];
  addMessage: (message: Message) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  currentConversation: undefined,
  messages: [],
  setMessages: (messages) => set({ messages }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state?.messages, message] })),
  startConversation: (newConversation) =>
    set(() => {
      return { currentConversation: newConversation };
    }),
}));

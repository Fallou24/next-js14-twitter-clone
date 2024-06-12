import { BookImage, Search, SendHorizontal } from "lucide-react";
import React from "react";

export default function MessageInput() {
  return (
    <div className="mt-2">
      <form
        action=""
        className="bg-border-color  flex rounded-3xl items-center gap-2 px-2"
      >
        <label htmlFor="search">
          <BookImage color="#6E767D" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Démarrer un nouveau message"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
        <button type="submit">
          <SendHorizontal color="#6E767D" />
        </button>
      </form>
    </div>
  );
}

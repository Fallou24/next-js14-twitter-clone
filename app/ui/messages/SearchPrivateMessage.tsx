import { Search } from "lucide-react";
import React from "react";

export default function SearchPrivateMessage() {
  return (
    <form
      action=""
      className="bg-border-color  flex rounded-3xl items-center gap-2 px-2 mb-6 mx-3"
    >
      <label htmlFor="search">
        <Search color="#6E767D" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Recherchez dans les messages privés"
        className="bg-transparent p-2 focus:outline-none w-full text-sm"
      />
    </form>
  );
}

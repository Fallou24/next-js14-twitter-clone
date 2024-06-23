"use client";
import { Search } from "lucide-react";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

export default function SearchPrivateMessage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("conversation", term);
    } else {
      params.delete("conversation");
    }
    replace(`${pathname}?${params.toString()}`);
  }

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
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("conversation")?.toString()}
        placeholder="Recherchez dans les messages privés"
        className="bg-transparent p-2 focus:outline-none w-full text-sm"
      />
    </form>
  );
}

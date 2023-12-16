import { UserButton } from "@clerk/nextjs";
import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";

export default function FeedHeader() {
  return (
    <div className="p-3 px-4 flex justify-between items-center  sticky top-0 z-10 bg-[#121212]">
      <h2 className="font-bold">Home</h2>
      <div className="flex gap-5 items-center">
        <ToggleThemeButton />
        <UserButton />
      </div>
    </div>
  );
}

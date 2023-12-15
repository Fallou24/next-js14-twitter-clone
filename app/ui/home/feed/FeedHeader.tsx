import { UserButton } from "@clerk/nextjs";
import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";

export default function FeedHeader() {
  return (
    <div className="px-4 flex justify-between items-center mb-2">
      <h2 className="font-bold">Home</h2>
      <div className="flex gap-5 items-center">
        <ToggleThemeButton />
        <UserButton />
      </div>
    </div>
  );
}

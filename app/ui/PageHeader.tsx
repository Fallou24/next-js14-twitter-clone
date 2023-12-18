import { UserButton } from "@clerk/nextjs";
import React from "react";
import ToggleThemeButton from "./home/feed/ToggleThemeButton";

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page_header flex justify-between items-center">
      <div>{children}</div>

      <div className="flex gap-5 items-center">
        <ToggleThemeButton />
        <UserButton />
      </div>
    </div>
  );
}

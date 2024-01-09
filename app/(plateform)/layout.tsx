import React from "react";
import Sidebar from "../ui/shared/Sidebar";
import RightBar from "../ui/home/rightBar/RightBar";
import { getUserToSuggest } from "../lib/data";

export default async function PlateformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userToSuggest = await getUserToSuggest();

  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="sticky top-4">
        <Sidebar />
      </div>
      <div className="w-full flex gap-2">
        {children}
        <RightBar userToSuggest={userToSuggest} />
      </div>
    </div>
  );
}

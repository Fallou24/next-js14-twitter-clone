import React from "react";
import Sidebar from "../ui/shared/Sidebar";
import RightBar from "../ui/home/rightBar/RightBar";
import { getUserToSuggest } from "../lib/data";
import { UserButton } from "@clerk/nextjs";

export default async function PlateformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userToSuggest = await getUserToSuggest();

  return (
    <div className="flex max-w-6xl mx-auto ">
      <div className="sticky top-0 max-h-screen flex flex-col justify-between">
        <Sidebar />
        <div className="p-4 ">
          <UserButton  />
        </div>
       
      </div>
      <div className="w-full flex gap-2">
        {children}
        <RightBar userToSuggest={userToSuggest} />
      </div>
    </div>
  );
}

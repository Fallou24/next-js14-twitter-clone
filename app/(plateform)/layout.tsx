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
    <div className="flex max-w-2xl lg:max-w-5xl  mx-auto md:gap-4 gap-0">
      <div className="sticky px-3 top-0 max-h-screen">
        <Sidebar />
      </div>
      <div className="w-full flex gap-4 text-sm md:text-base">
        {children}
        <RightBar userToSuggest={userToSuggest} />
      </div>
    </div>
  );
}

import React from "react";
import Sidebar from "../ui/shared/Sidebar";
import RightBar from "../ui/home/rightBar/RightBar";

export default function PlateformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="sticky top-4">
        <Sidebar />
      </div>
      <div className="w-full flex gap-2">
        {children}
        <RightBar />
      </div>
    </div>
  );
}

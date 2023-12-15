import React from "react";
import Sidebar from "../ui/Sidebar";

export default function PlateformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 max-w-5xl mx-auto">
      <Sidebar />
      {children}
    </div>
  );
}

import React from "react";
import Sidebar from "../ui/Sidebar";

export default function PlateformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 max-w-6xl mx-auto">
      <div className="sticky top-4">
        <Sidebar />
      </div> 
      {children}
    </div>
  );
}

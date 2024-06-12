import React from "react";
import Sidebar from "../ui/shared/Sidebar";

export default async function PlateformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-2xl lg:max-w-5xl  mx-auto md:gap-4 gap-0">
      <div className="sticky px-3  top-0 max-h-screen">
        <Sidebar />
      </div>
      <div className="w-full text-sm md:text-base">{children}</div>
    </div>
  );
}

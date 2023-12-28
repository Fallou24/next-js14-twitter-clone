import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page_header flex justify-between items-center">
      <div>{children}</div>
      <UserButton  />
    </div>
  );
}

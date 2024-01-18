import React from "react";
import Search from "../home/rightBar/Search";
import { UserButton } from "@clerk/nextjs";

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page_header flex justify-between items-center gap-7">
      <div className="hidden lg:block">{children}</div>
      <UserButton afterSignOutUrl="/sign-in" />
      <div className="block lg:hidden">
        <Search />
      </div>
    </div>
  );
}

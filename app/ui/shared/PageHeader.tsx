import React from "react";
import Search from "../home/rightBar/Search";

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page_header flex justify-between items-center">
      <div>{children}</div>
      <div className="block lg:hidden w-1/2">
        <Search />
      </div>
    </div>
  );
}

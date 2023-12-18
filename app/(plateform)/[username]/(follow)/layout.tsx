import PageHeader from "@/app/ui/PageHeader";
import FollowNavbar from "@/app/ui/profile/followNav";
import React from "react";

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  return (
    <div className="page_content">
      <PageHeader>
        <h3 className="font-bold">Fallou Ndiaye</h3>
        <p className="text-gray-color text-sm">@falloundiaye</p>
      </PageHeader>
      <FollowNavbar username={params.username} />
      {children}
    </div>
  );
}

import PageHeader from "@/app/ui/PageHeader";
import ProfileImages from "@/app/ui/profile/ProfileImages";
import UserInfo from "@/app/ui/profile/UserInfo";
import ProfileNavbar from "@/app/ui/profile/profilNavbar";
import ProfileButtons from "@/app/ui/profile/profileButtons";
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
        <p className="text-gray-color text-sm">23 posts</p>
      </PageHeader>
      <ProfileImages />
      <ProfileButtons />
      <UserInfo />
      <ProfileNavbar username={params.username} />
      {children}
    </div>
  );
}

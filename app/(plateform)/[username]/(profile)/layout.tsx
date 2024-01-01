import { getUserPostCount } from "@/app/lib/data";
import PageHeader from "@/app/ui/shared/PageHeader";
import ProfileImages from "@/app/ui/profile/ProfileImages";
import UserInfo from "@/app/ui/profile/UserInfo";
import ProfileNavbar from "@/app/ui/profile/profilNavbar";
import ProfileButtons from "@/app/ui/profile/profileButtons";
import React from "react";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const count = await getUserPostCount(params.username);
  return (
    <>
      <div className="page_content">
        <PageHeader>
          <h3 className="font-bold">{params.username}</h3>
          <p className="text-gray-color text-sm">{count} posts</p>
        </PageHeader>
        <ProfileImages />
        <ProfileButtons />
        <UserInfo />
        <ProfileNavbar username={params.username} />
        {children}
      </div>
    </>
  );
}

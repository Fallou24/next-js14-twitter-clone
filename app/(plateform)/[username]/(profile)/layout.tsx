import PageHeader from "@/app/ui/shared/PageHeader";
import ProfileImages from "@/app/ui/profile/ProfileImages";
import UserInfo from "@/app/ui/profile/UserInfo";
import ProfileNavbar from "@/app/ui/profile/profilNavbar";
import React from "react";
import { getProfileInfo } from "@/app/lib/data";
import FollowButton from "@/app/ui/profile/FollowButton";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const userInfo = await getProfileInfo(params.username);


  const images = {
    userImg: userInfo?.userImageUrl,
    coverImg: userInfo?.coverImg,
  };
  const id = userInfo?.id;
  return (
    <>
      <div className="page_content">
        <PageHeader>
          <h3 className="font-bold">{userInfo?.fullName}</h3>
          <p className="text-gray-color text-sm">
            {userInfo?._count.post} posts
          </p>
        </PageHeader>
        <ProfileImages images={images} />
        <div className="relative">
          <div className="absolute right-4 top-4">
            <FollowButton id={id!} />
          </div>
        </div>

        <UserInfo userInfo={userInfo} />
        <ProfileNavbar username={params.username} />
        {children}
      </div>
    </>
  );
}

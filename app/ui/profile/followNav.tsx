"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function FollowNavbar({ username }: { username: string }) {
  const pathName = usePathname();
  const Links = [
    {
      label: "Abonnements",
      href: "/" + username + "/followings",
      active: pathName === "/" + username+"/followings",
    },
    {
      label: "Abonnés",
      href: "/" + username + "/followers",
      active: pathName === "/" + username + "/followers",
    },
  ];
  return (
    <>
      <div className="px-4 mt-2">
        <nav className="flex justify-center gap-12">
          {Links.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={clsx("text-gray-color pb-2", {
                  "border-b-4 text-white  border-blue-color": link.active,
                })}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <hr className="border-border-color border-1" />
    </>
  );
}

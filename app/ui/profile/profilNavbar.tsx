"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ProfileNavbar({ username }: { username: string }) {
  const pathName = usePathname();
  const Links = [
    {
      label: "Post",
      href: "/" + username,
      active: pathName === "/" + username,
    },
    {
      label: "J'aime",
      href: "/" + username + "/likes",
      active: pathName === "/" + username + "/likes",
    },
  ];
  return (
    <>
      <div className="px-4 mt-2">
        <nav className="flex justify-between w-full md:w-1/2">
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

"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import clsx from "clsx";
import { Feather, HomeIcon, MailIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Sidebar() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  if (!user) {
    redirect("/sign-in");
  }
  function onClose() {
    setOpen(false);
  }
  const sidebarLinks = [
    {
      label: "Home",
      icon: HomeIcon,
      href: "/",
      active: pathName === "/",
    },

    {
      label: "Profile",
      icon: User,
      href: "/" + user.username,
      active: pathName === "/" + user.username,
    },
  ];
  return (
    <>
      <div className="p-2 md:p-4 flex gap-5 flex-col items-center md:items-start sticky top-4">
        <Link href="">
          <Image src="/logo-white.png" alt="logo de X" width={30} height={30} />
        </Link>
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={clsx(
                "flex items-center justify-center w-full gap-2 hover:bg-white hover:bg-opacity-10 hover:rounded-full p-2",
                {
                  "bg-white bg-opacity-10 rounded-full": link.active,
                }
              )}
            >
              <Icon />
              <span className="font-medium hidden md:block">{link.label}</span>
            </Link>
          );
        })}
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-color flex justify-center items-center gap-2 rounded-full p-2 w-full"
        >
          <Feather />
          <span className="font-medium hidden md:block">Tweet</span>
        </button>
      </div>
      <Modal open={open} onClose={onClose} />
    </>
  );
}

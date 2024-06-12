import React, { useEffect, useRef } from "react";
import CreatePost from "../home/feed/CreatePost";
import { createPortal } from "react-dom";
import { Search } from "lucide-react";
import Image from "next/image";
import Contacts from "./Contacts";

export default function StartConversationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  if (!open) {
    return null;
  }
  return createPortal(
    <div className="fixed top-0 left-0 h-screen w-full  z-50 bg-blue-color  bg-opacity-5">
      <div className=" flex justify-center items-start   h-full">
        <div
          ref={modalRef}
          className="bg-black md:w-1/2 w-4/5  mt-12 rounded-3xl"
        >
          <h1 className="text-xl  p-4">Nouveau Message</h1>

          <form
            action=""
            className=" flex rounded-3xl items-center gap-2 px-4 mb-2"
          >
            <label htmlFor="search">
              <Search color="#6E767D" />
            </label>
            <input
              type="text"
              id="search"
              placeholder="Recherchez des personnes"
              className="bg-transparent p-2 focus:outline-none w-full text-sm"
            />
          </form>
          <hr className="border-border-color border-1" />
          <Contacts />
          <Contacts />
          <Contacts />
          <Contacts />
          <Contacts />
        </div>
      </div>
    </div>,
    document.body
  );
}

import React, { useEffect, useRef } from "react";
import CreatePost from "../home/feed/CreatePost";
import ModalCreatePost from "./ModalCreatePost";
import { createPortal } from "react-dom";

export default function Modal({
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
        <div ref={modalRef} className="bg-black md:w-1/2 w-4/5  mt-12  p-4 rounded-3xl">
          <ModalCreatePost onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
}

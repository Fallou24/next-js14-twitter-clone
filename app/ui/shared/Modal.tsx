import React, { useEffect, useRef } from "react";

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
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-white z-50 bg-opacity-10">
      <div className="flex justify-center items-center h-full">
        <div ref={modalRef} className="bg-black w-max z-50 p-4 rounded-md">
          <h3>Editer le profile</h3>
          <form action="">
            <textarea name="" id="" placeholder="Bio"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

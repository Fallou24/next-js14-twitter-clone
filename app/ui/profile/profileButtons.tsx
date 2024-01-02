"use client";
import { useState } from "react";
import Modal from "../shared/Modal";
import { useUser } from "@clerk/nextjs";

export default function ProfileButtons({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  function onCloseModal() {
    setOpen(false);
  }
  return (
    <>
      <div className="flex justify-end gap-2 m-4">
        {id !== user?.id ? (
          <button className="bg-white text-black rounded-3xl px-6 p-1">
            Suivre
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="border border-white rounded-3xl px-6 p-1"
          >
            Editer le profil
          </button>
        )}
      </div>
      <Modal open={open} onClose={onCloseModal} />
    </>
  );
}

"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRef, useState } from "react";
import { createPost } from "@/app/lib/actions";
import PostButton from "./PostButton";

export default function ModalCreatePost({ onClose }: { onClose: () => void }) {
  const { user } = useUser();
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
      <form
        action={(formData) => {
          setValue("");
          onClose();
          createPost(formData);
        }}
      >
        <div className="flex gap-4 items-top">
          <p className="h-[45px] min-w-[45px] rounded-3xl overflow-hidden relative">
            <Image
              src={user?.imageUrl || "/hero.png"}
              alt="Photo du auteur"
              fill
              className="object-cover"
            />
          </p>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What's happening ?"
            className="w-full min-h-[120px] py-2 bg-transparent focus:outline-none resize-none"
            name="content"
            minLength={1}
          ></textarea>
        </div>
        <hr className="border-border-color border-1 mb-3" />
        <div className="flex justify-end">
          <PostButton text={value} />
        </div>
      </form>
    </div>
  );
}

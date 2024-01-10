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
    <div className="flex gap-2 items-top px-4 pt-2 mb-2">
      <p className="h-[45px] min-w-[45px] rounded-full overflow-hidden relative">
        <Image
          src={user?.imageUrl || "/hero.png"}
          alt="Photo du auteur"
          fill
          className="object-cover"
        />
      </p>

      <div className="w-full">
        <form
          action={(formData) => {
            setValue("");
            onClose();
            createPost(formData);
          }}
        >
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What's happening ?"
            className="w-full min-h-[100px] py-2 bg-transparent focus:outline-none resize-none"
            name="content"
            minLength={1}
          ></textarea>
          <div className="flex justify-end">
            <PostButton text={value} />
          </div>
        </form>
      </div>
    </div>
  );
}

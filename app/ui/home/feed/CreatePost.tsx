"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRef, useState } from "react";
import PostButton from "../../shared/PostButton";
import { createPost } from "@/app/lib/actions";

export default function CreatePost() {
  const { user } = useUser();
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-2 items-top px-4 pt-2 mb-2">
      <p className="h-[40px] min-w-[40px] rounded-full overflow-hidden relative">
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
            createPost(formData);
          }}
        >
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What's happening ?"
            className="w-full py-2 bg-transparent focus:outline-none resize-none"
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

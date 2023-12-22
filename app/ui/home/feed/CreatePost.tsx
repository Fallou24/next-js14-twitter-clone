"use client";
import { commentPost, createPost } from "@/app/lib/actions";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import PostButton from "./PostButton";
import { useUser } from "@clerk/nextjs";

export default function CreatePost() {
  const { user } = useUser();
  const [value, setValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
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
          ref={formRef}
          action={async (formData) => {
            await createPost(formData);
            formRef.current?.reset();
          }}
        >
          <textarea
            onChange={(e) => setValue(e.target.value)}
            placeholder="What's happening ?"
            className="w-full py-2 bg-transparent focus:outline-none resize-none"
            rows={1}
            name="content"
          ></textarea>
          <div className="flex justify-between items-center">
            <label htmlFor="post-image">
              <ImageIcon color="#1A8CD8" />
            </label>
            <input type="file" name="file" id="post-image" className="hidden" />
            <PostButton value={value} />
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";
import { createPost } from "@/app/lib/actions";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CreatePost() {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-2 items-top px-4 pt-2 mb-2">
      <p>
        <Image
          src="/hero.png"
          alt="Photo du auteur"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </p>
      <div className="w-full">
        <form action={createPost}>
          <textarea
            value={value}
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
            <input
              type="file"
              name="file"
              id="post-image"
              className="hidden"
            />
            <button type="submit" className="button" disabled={!value}>
              Poster
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

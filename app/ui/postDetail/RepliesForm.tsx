"use client";
import { useUser } from "@clerk/nextjs";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import PostButton from "../shared/PostButton";
import { commentPost } from "@/app/lib/actions";

export default function RepliesForm({ parentId }: { parentId: string }) {
  const { user } = useUser();
  const [value, setValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const commentWithId = commentPost.bind(null, parentId);
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
            await commentWithId(formData);
            formRef.current?.reset();
          }}
        >
          <textarea
            onChange={(e) => setValue(e.target.value)}
            placeholder="Laissez votre commentaire"
            className="w-full py-2 bg-transparent focus:outline-none resize-none"
            rows={1}
            name="content"
          ></textarea>
          <div className="flex justify-end">
            <PostButton text={value} />
          </div>
        </form>
      </div>
    </div>
  );
}

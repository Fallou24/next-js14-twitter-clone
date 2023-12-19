import { MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PostActions() {
  return (
    <div className="w-1/2 flex justify-between">
      <p className="flex gap-1 text-[#6E767D] text-sm items-center">
        <Image src="/Reply.svg" alt="reply logo" width={20} height={20} />
        <span>52</span>
      </p>

      <p className="flex gap-1 text-[#6E767D] text-sm items-center">
        <Image src="/like.svg" alt="reply logo" width={20} height={20} />
        <span>52</span>
      </p>
    </div>
  );
}

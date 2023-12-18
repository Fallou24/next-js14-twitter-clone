import Image from "next/image";
import React from "react";

export default function FollowerList() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center  my-2">
        <p>
          <Image
            src="/hero.png"
            alt="Photo du auteur"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
        </p>
        <div>
          <p className="font-medium">John Doe</p>
          <p className="text-gray-100 text-opacity-70 text-sm">@JohnDoe</p>
        </div>
      </div>
      <button className="bg-white text-black rounded-3xl px-6 p-1">
        Suivre
      </button>
    </div>
  );
}

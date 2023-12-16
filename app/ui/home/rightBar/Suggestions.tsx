import Image from "next/image";
import React from "react";

export default function Suggestions() {
  return (
    <div className="bg-border-color rounded-xl p-2 mt-4">
      <h2 className="font-bold text-lg mb-1">Suggestions</h2>
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
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-100 text-opacity-70 text-sm">@JohnDoe</p>
          </div>
        </div>
        <button className="bg-white text-black rounded-3xl px-6 p-1">
          Suivre
        </button>
      </div>
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
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-100 text-opacity-70 text-sm">@JohnDoe</p>
          </div>
        </div>
        <button className="bg-white text-black rounded-3xl px-6 p-1">
          Suivre
        </button>
      </div>
    </div>
  );
}

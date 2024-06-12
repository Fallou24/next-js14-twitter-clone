import Image from "next/image";
import React from "react";

export default function Contacts() {
  return (
    <div className="flex gap-2 items-center  mb-2 p-2 px-4 cursor-pointer hover:bg-white hover:bg-opacity-10 ">
      <p className="w-[40px] h-[40px] relative overflow-hidden rounded-full">
        <Image
          src="/hero.png"
          alt="Photo du auteur"
          fill
          className="object-cover "
        />
      </p>
      <div>
        <p className="font-medium">Fallu</p>
        <p className="text-gray-100 text-opacity-70 text-sm">@fallou</p>
      </div>
    </div>
  );
}

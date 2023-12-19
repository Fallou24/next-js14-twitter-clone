import Image from "next/image";
import PostActions from "../home/feed/PostActions";

export default function RepliesItem() {
  return (
    <>
      <article className="flex gap-2 items-top px-4 pt-2 mb-2">
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
          <div className="flex gap-2 items-center">
            <h3 className="font-bold">John Doe</h3>
            <p className="text-[#6E767D] text-sm">@JohnDoe</p>
            <p className="text-[#6E767D] text-sm">7m</p>
          </div>
          <p className="font-normal mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            recusandae delectus odio laudantium excepturi eaque.
          </p>
        </div>
      </article>
      <hr className="border-border-color border-1" />
    </>
  );
}

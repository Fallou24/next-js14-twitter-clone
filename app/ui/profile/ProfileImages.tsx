import Image from "next/image";

export default function ProfileImages() {
  return (
    <div className="relative h-56">
      <Image
        src="/post-img.jpg"
        alt="photo de couverture"
        fill={true}
        className="object-cover"
      />
      <p className="absolute left-5 -bottom-[65px] border-4  border-black rounded-full">
        <Image
          src="/hero.png"
          alt="Photo de profile"
          width={130}
          height={130}
          className="rounded-full"
        />
      </p>
    </div>
  );
}

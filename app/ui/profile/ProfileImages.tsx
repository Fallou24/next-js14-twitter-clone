import Image from "next/image";

export default function ProfileImages({
  images,
}: {
  images: {
    userImg: string | undefined;
    coverImg: string | undefined | null;
  };
}) {
  return (
    <div className="relative h-56 bg-gray-700">
      {images.coverImg && (
        <Image
          src="/post-img.jpg"
          alt="photo de couverture"
          fill={true}
          className="object-cover"
        />
      )}
      <p className="absolute left-5 -bottom-[65px] border-4  border-black rounded-full w-[130px] h-[130px] overflow-hidden">
        {images.userImg ? (
          <Image
            src={images.userImg}
            alt="Photo de profile"
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src="/noAvatar.jpeg"
            alt="Photo de profile"
            fill
            className="object-cover"
          />
        )}
      </p>
    </div>
  );
}

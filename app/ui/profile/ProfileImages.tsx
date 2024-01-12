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
    <div className="relative  md:h-56 h-36 bg-gray-700">
      {images.coverImg && (
        <Image
          src="/post-img.jpg"
          alt="photo de couverture"
          fill={true}
          className="object-cover"
        />
      )}
      <p className="absolute left-5 md:-bottom-[65px] -bottom-[40px] border-4  border-black rounded-full md:w-[130px] md:h-[130px]  w-[80px] h-[80px] overflow-hidden">
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

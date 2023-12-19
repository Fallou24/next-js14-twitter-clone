import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function CreatePost() {
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
        <form action="">
          <textarea
            placeholder="What's happening ?"
            className="w-full py-2 bg-transparent focus:outline-none resize-none"
            rows={1}
          ></textarea>
          <div className="flex justify-between items-center">
            <label htmlFor="post-image">
              <ImageIcon color="#1A8CD8" />
            </label>
            <input
              type="file"
              name="postImage"
              id="post-image"
              className="hidden"
            />
            <button type="submit" className="button">
              Poster
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function RepliesForm() {
  return (
    <div className="flex gap-2 items-center px-4 pt-2 mb-2">
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
        <form action="" className="flex justify-between gap-4 items-center">
          <textarea
          rows={1}
            placeholder="Postez une réponse"
            className="w-full h-auto py-2 bg-transparent focus:outline-none resize-none"
          ></textarea>
          <button type="submit"  className="button self-center" disabled>
            Répondre
          </button>
        </form>
      </div>
    </div>
  );
}

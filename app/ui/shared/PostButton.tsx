import React from "react";
import { useFormStatus } from "react-dom";

export default function PostButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="button" disabled={pending || !text}>
      {pending ? "Envoi en cours ..." : "Poster"}
    </button>
  );
}

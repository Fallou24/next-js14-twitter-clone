import React from "react";
import { useFormStatus } from "react-dom";

export default function PostButton({ value }: { value: string | null }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="button" disabled={pending || !value}>
      {pending ? "Envoie en cours ..." : "Poster"}
    </button>
  );
}

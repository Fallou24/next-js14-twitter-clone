"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchResult() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("query")?.toString());
  
  return <div>SearchResult</div>;
}

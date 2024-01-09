"use client";
import { getSearchResult } from "@/app/lib/data";
import { Profile } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toString();
  const [users, setUsers] = useState<Profile[] | undefined>(undefined);
  function getSearchResult() {
    try {
      fetch("http://localhost:3000/api/search?query=" + query)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.data);
        });
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getSearchResult();
  }, [query]);

  return <div>SearchResult</div>;
}

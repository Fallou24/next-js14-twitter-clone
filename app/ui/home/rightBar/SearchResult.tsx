"use client";
import { Profile } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toString();
  const [users, setUsers] = useState<Profile[] | []>([]);

  useEffect(() => {
    function getSearchResult() {
      try {
        fetch(process.env.BASE_URL + "/api/search?query=" + query)
          .then((res) => res.json())
          .then((data) => {
            setUsers(data?.data);
          });
      } catch (e) {
        console.log(e);
      }
    }
    getSearchResult();
  }, [query]);
  if (!query) {
    return null;
  }
  if (!users.length) {
    return (
      <div className="z-30 relative">
        <div className="absolute top-0 left-0 w-full bg-black  max-h-80 overflow-y-scroll shadow shadow-white p-3 rounded-lg">
          Cet utilisateur n'a pas été trouvé
        </div>
      </div>
    );
  }

  return (
    <div className="z-30 relative">
      <div className="absolute top-0 left-0 w-full bg-black max-h-80 overflow-y-auto shadow shadow-white p-3 rounded-lg">
        {users?.map((user) => {
          return (
            <Link
              href={"/" + user.username}
              className="flex gap-2 items-center my-2 mb-4"
              key={user.id}
            >
              <p className="relative h-[45px] w-[45px] rounded-full overflow-hidden">
                <Image
                  src={user.userImageUrl}
                  alt="Photo du auteur"
                  fill
                  className="object-cover"
                />
              </p>
              <div>
                <p className="font-medium">{user.fullName}</p>
                <p className="text-gray-100 text-opacity-70 text-sm">
                  @{user.username}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

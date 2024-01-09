"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchForm({
  showResults,
}: {
  showResults: () => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      action=""
      className="bg-border-color flex rounded-3xl items-center gap-2 px-2"
    >
      <label htmlFor="search">
        <Search color="#6E767D" />
      </label>
      <input
        type="text"
        id="search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onFocus={() => showResults()}
        defaultValue={searchParams.get("query")?.toString()}
        placeholder="Rechercher un utilisateur"
        className="bg-transparent p-2 focus:outline-none w-full"
      />
    </form>
  );
}

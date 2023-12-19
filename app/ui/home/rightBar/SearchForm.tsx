import { Search } from "lucide-react";

export default function SearchForm() {
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
        placeholder="Rechercher un utilisateur"
        className="bg-transparent p-2 focus:outline-none w-full"
      />
    </form>
  );
}

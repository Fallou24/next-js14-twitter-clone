import Search from "./Search";
import Suggestions from "./Suggestions";
import { Profile } from "@prisma/client";

export default function RightBar({
  userToSuggest,
}: {
  userToSuggest: Profile[];
}) {
  return (
    <div className="w-2/5 px-2 pt-4 hidden lg:block">
      <div className="sticky top-4">
        <Search />
        <Suggestions userToSuggest={userToSuggest} />
      </div>
    </div>
  );
}

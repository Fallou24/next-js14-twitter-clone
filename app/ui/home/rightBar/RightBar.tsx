import React from "react";
import SearchForm from "./SearchForm";
import Suggestions from "./Suggestions";
import SearchResult from "./SearchResult";

export default function RightBar() {
  return (
    <div className="w-2/5 px-2 pt-4 hidden lg:block">
      <div className="sticky top-4">
        <SearchForm />
        <SearchResult />
        <Suggestions />
      </div>
    </div>
  );
}

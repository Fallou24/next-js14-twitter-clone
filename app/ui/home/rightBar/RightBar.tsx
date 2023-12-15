import React from "react";
import SearchForm from "./SearchForm";
import Suggestions from "./Suggestions";

export default function RightBar() {
  return (
    <div className="w-2/5 px-2 pt-4 hidden md:block">
      <SearchForm />
      <Suggestions />
    </div>
  );
}

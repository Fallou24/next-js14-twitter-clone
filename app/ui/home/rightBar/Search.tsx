"use client";

import React, { useEffect, useRef, useState } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

export default function Search() {
  const [isVisible, setIsVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  function showResults() {
    setIsVisible(true);
  }
  function hideResults() {
    setIsVisible(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        hideResults();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={searchRef}>
      <SearchForm showResults={showResults} />
      {isVisible && <SearchResult />}
    </div>
  );
}

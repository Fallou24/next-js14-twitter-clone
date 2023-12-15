import React from "react";
import CreatePost from "./CreatePost";

export default function Feed() {
  return (
    <div className="w-full pt-4 md:w-3/5 border-x border-x-border-color">
      <CreatePost />
      <hr className="border-border-color border-1" />
    </div>
  );
}

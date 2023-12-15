import React from "react";
import CreatePost from "./CreatePost";
import FeedHeader from "./FeedHeader";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="w-full pt-4 md:w-3/5 border-x border-x-border-color">
      <FeedHeader />
      <hr className="border-border-color border-1" />
      <CreatePost />
      <hr className="border-border-color border-1" />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

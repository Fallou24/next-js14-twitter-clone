import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import PageHeader from "../../PageHeader";

export default function Feed() {
  return (
    <div className="page_content">
      <PageHeader>
        <h2 className="font-bold text-lg">Home</h2>
      </PageHeader>
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

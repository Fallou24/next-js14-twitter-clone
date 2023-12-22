import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import PageHeader from "../../PageHeader";
import { getAllPost } from "@/app/lib/data";

export default async function Feed() {
  const posts = await getAllPost();

  return (
    <div className="page_content">
      <PageHeader>
        <h2 className="font-bold text-lg">Home</h2>
      </PageHeader>
      <hr className="border-border-color border-1" />
      <CreatePost />
      <hr className="border-border-color border-1" />
      {posts?.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

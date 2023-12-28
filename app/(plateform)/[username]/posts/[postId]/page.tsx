import { getPostById } from "@/app/lib/data";
import PageHeader from "@/app/ui/shared/PageHeader";
import RepliesForm from "@/app/ui/postDetail/RepliesForm";
import RepliesItem from "@/app/ui/postDetail/RepliesItem";
import { notFound } from "next/navigation";
import Post from "@/app/ui/shared/Post";

export default async function page({ params }: { params: { postId: string } }) {
  const postId = params.postId;
  const post = await getPostById(postId);
  const replies = post?.reply;

  if (!post) {
    notFound();
  }
  return (
    <div className="page_content">
      <PageHeader>
        <h2 className="font-bold text-lg">Poster</h2>
      </PageHeader>
      <hr className="border-border-color border-1" />
      <Post post={post} />
      <RepliesForm parentId={post.id} />
      <hr className="border-border-color border-1" />
      {replies?.map((reply) => {
        return <RepliesItem key={reply.id} reply={reply} />;
      })}
    </div>
  );
}

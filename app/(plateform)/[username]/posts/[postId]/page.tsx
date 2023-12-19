import PageHeader from "@/app/ui/PageHeader";
import Post from "@/app/ui/postDetail/Post";
import RepliesForm from "@/app/ui/postDetail/RepliesForm";
import RepliesItem from "@/app/ui/postDetail/RepliesItem";

export default function page() {
  return (
    <div className="page_content">
      <PageHeader>
        <h2 className="font-bold text-lg">Poster</h2>
      </PageHeader>
      <hr className="border-border-color border-1" />
      <Post />
      <RepliesForm />
      <hr className="border-border-color border-1" />
      <RepliesItem />
      <RepliesItem />
      <RepliesItem />
    </div>
  );
}

/** @format */

// pages/posts/[id].tsx
import { posts } from "@/constants";
import { useRouter } from "next/router";

const Post: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="container mx-auto">Post not found</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <div className="mt-4">{post.content}</div>
    </div>
  );
};

export default Post;

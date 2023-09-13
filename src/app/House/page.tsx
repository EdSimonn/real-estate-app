/** @format */

// pages/index.tsx
import { posts } from "@/constants";
import Link from "next/link";

const List = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-4">Blog</h1>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/posts/${post.slug}`}>
              <p className="text-blue-600 hover:underline">{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

import Link from "next/link";
import getAllPosts from "../lib/getAllPosts";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div className="mt-8 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 border-b pb-4">
        All Posts
      </h1>

      <div className="space-y-6">
        {posts.map(post => (
          <h2
            key={post.id}
            className="text-2xl font-medium text-gray-800 hover:text-indigo-600 cursor-pointer transition-colors"
          >
            <Link href={`/posts/${post.id}`} >{post.title}</Link>
          </h2>
        ))}
      </div>
    </div>
  );
}

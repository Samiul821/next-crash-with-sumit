import Comments from "@/app/components/Comments";
import getAllPosts from "@/app/lib/getAllPosts";
import getPosts from "@/app/lib/getPost";
import getPostComment from "@/app/lib/getPostComment";
import { Suspense } from "react";

// Dynamic Metadata Generator
export async function generateMetadata({ params }) {
  const post = await getPosts(params.id);

  return {
    title: post.title,
    description: post.body.slice(0, 160),
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = await getPosts(id);
  const commentsPromise = await getPostComment(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-4">
          {post.title}
        </h1>
        <div className="text-gray-800 leading-relaxed text-lg whitespace-pre-line mb-7">
          {post.body}
        </div>

        <hr />
        <Suspense fallback="<h1>Loading comments...</h1>">
          <Comments promise={commentsPromise} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

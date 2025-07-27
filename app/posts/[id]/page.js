import getPosts from '@/app/lib/getPost';

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getPosts(id);

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-4">
          {post.title}
        </h1>
        <div className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
          {post.body}
        </div>
      </div>
    </div>
  );
}

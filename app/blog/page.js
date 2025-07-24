import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Blog 1", content: "My Travel Experiences" },
    { id: 2, title: "Blog 2", content: "A Day in the Life" },
    { id: 3, title: "Blog 3", content: "Exploring the Mountains" },
    { id: 4, title: "Blog 4", content: "Culinary Delights" },
  ];

  return (
    <main className="mt-10">
      <div>Blogs Page</div>
      <ul className="mt-4 space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-4 border rounded">
            <Link href={`/blog/${blog.id}`}>
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p>{blog.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

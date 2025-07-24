import { notFound } from "next/navigation";
import React from "react";

export default function SingleBlog({ params }) {
  const { id } = params;

  if (id === "5") {
    notFound();
  }
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">Blog ID: {id}</h1>
    </div>
  );
}

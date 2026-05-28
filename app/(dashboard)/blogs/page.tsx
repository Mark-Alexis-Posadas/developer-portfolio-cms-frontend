"use client";

import { useEffect, useState } from "react";
import { createBlog, deleteBlog, getBlogs } from "./api";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCreate = async () => {
    await createBlog({
      title,
      content,
      status: "published",
    });

    setTitle("");
    setContent("");

    fetchBlogs();
  };

  const handleDelete = async (id: number) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Blog Manager</h1>

      <p className="text-gray-500 mt-1">Manage your articles and content</p>

      {/* CREATE FORM */}
      <div className="bg-white border rounded-2xl p-6 mt-6">
        <input
          className="w-full border rounded-lg p-3 mb-4"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border rounded-lg p-3 h-40"
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="mt-4 px-5 py-2 bg-black text-white rounded-lg"
        >
          Publish Blog
        </button>
      </div>

      {/* BLOG LIST */}
      <div className="grid gap-4 mt-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white border rounded-2xl p-5">
            <h2 className="text-lg font-semibold">{blog.title}</h2>

            <p className="text-gray-500 mt-2 line-clamp-3">{blog.content}</p>

            <div className="flex justify-between mt-4">
              <span className="text-xs text-gray-400">{blog.status}</span>

              <button
                onClick={() => handleDelete(blog.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

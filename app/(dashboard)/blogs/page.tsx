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
    if (!title.trim() || !content.trim()) return; // Simple validation block
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
    if (confirm("Are you sure you want to delete this article?")) {
      await deleteBlog(id);
      fetchBlogs();
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Blog Manager
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Compose, publish, and structure your portfolio articles or dev logs.
        </p>
      </div>

      {/* Main Split Layout: Form & List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT COLUMN: CREATE FORM CONTAINER */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs sticky top-24">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Compose Article
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Write and release something new today.
            </p>
          </div>

          <div className="space-y-4">
            {/* Input Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Article Title
              </label>
              <input
                type="text"
                className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-3 transition-all placeholder:text-gray-400 outline-hidden"
                placeholder="e.g., Understanding React Server Components"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Textarea Content */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Body Content
              </label>
              <textarea
                className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-50 focus:border-blue-500 block p-3 h-48 transition-all placeholder:text-gray-400 outline-hidden resize-none"
                placeholder="Markdown or plain text content goes here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Action Button */}
            <button
              onClick={handleCreate}
              className="w-full inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 shadow-sm rounded-xl px-4 py-3 transition-all duration-200 gap-2 cursor-pointer mt-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              Publish Article
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: BLOG ITEMS FEED */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Feed ({blogs.length})
            </h3>
          </div>

          {blogs.length === 0 ? (
            /* Empty State Container */
            <div className="bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl p-12 text-center">
              <p className="text-sm text-gray-400 font-medium">
                No articles published yet.
              </p>
            </div>
          ) : (
            /* Active Blog Grid/List Feed */
            <div className="grid gap-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Title and Options */}
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h2>

                      {/* Styled Status Badge */}
                      <span className="inline-flex items-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full capitalize select-none">
                        {blog.status}
                      </span>
                    </div>

                    {/* Blog Short Description snippet */}
                    <p className="text-sm text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {blog.content}
                    </p>
                  </div>

                  {/* Actions Bar Footer */}
                  <div className="flex justify-end items-center mt-5 pt-4 border-t border-gray-50">
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="inline-flex items-center text-xs font-medium text-gray-400 hover:text-red-500 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition"
                      title="Delete Article"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

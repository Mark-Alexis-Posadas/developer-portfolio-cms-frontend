"use client";
import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="w-64 p-6 border-r bg-white/70 backdrop-blur-xl">
      <h1 className="text-xl font-semibold tracking-tight mb-10">CMS Studio</h1>

      <nav className="flex flex-col gap-2 text-sm">
        <Link
          href="/"
          className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Overview
        </Link>

        <Link
          href="/projects"
          className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Projects
        </Link>

        <Link
          href="/blogs"
          className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Blogs
        </Link>

        <Link
          href="/skills"
          className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Skills
        </Link>
      </nav>

      <div className="absolute bottom-6 text-xs text-gray-400">
        v1.0 • Portfolio CMS
      </div>
    </aside>
  );
}

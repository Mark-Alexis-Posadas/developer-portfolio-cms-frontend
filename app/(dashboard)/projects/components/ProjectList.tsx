"use client";
import Image from "next/image";
export default function ProjectList({ initialProjects, handleDelete }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {initialProjects.map((p) => {
        const imageUrl = p.image?.startsWith("/uploads")
          ? `http://localhost:5000${p.image}`
          : "/placeholder.png";

        console.log(p);
        return (
          <div
            key={p.id}
            className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-sm flex flex-col justify-between"
          >
            {/* Image Section */}
            {p.image && (
              <div className="p-4 pb-0">
                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                  <Image
                    src={imageUrl}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                {p.title}
              </h2>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {p.description}
              </p>

              {p.technologies && (
                <p className="text-xs font-medium text-gray-400 mt-auto mb-5 tracking-wide uppercase">
                  {p.technologies}
                </p>
              )}

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-2">
                <div className="flex gap-2">
                  <a
                    href={p.github_url}
                    target="_blank"
                    className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-lg px-3 py-2"
                  >
                    GitHub
                  </a>

                  <a
                    href={p.live_url}
                    target="_blank"
                    className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-3 py-2"
                  >
                    Live Demo
                  </a>
                </div>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-xs font-medium text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

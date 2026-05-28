"use client";

export default function ProjectList({ initialProjects }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {initialProjects.map((p) => (
        <div
          key={p.id}
          className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-sm flex flex-col justify-between"
        >
          {/* Image Section */}
          {p.image && (
            <div className="p-4 pb-0">
              <img
                src={`http://localhost:5000${p.image}`}
                className="h-48 w-full object-cover rounded-xl"
                alt={p.title}
              />
            </div>
          )}

          {/* Content Section */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Title */}
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
              {p.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {p.description}
            </p>

            {/* Tech Stack / Tags */}
            {p.technologies && (
              <p className="text-xs font-medium text-gray-400 mt-auto mb-5 tracking-wide uppercase">
                {p.technologies}
              </p>
            )}

            {/* Actions Area */}
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                {/* GitHub Link */}
                <a
                  href={p.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 shadow-xs rounded-lg px-3 py-2 transition"
                >
                  GitHub
                </a>

                {/* Live Link */}
                <a
                  href={p.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 shadow-xs rounded-lg px-3 py-2 transition"
                >
                  Live Demo
                  <svg
                    className="w-3.5 h-3.5 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(p.id)}
                className="text-xs font-medium text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition"
                title="Delete Project"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

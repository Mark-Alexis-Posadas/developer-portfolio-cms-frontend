export default function DashboardHome() {
  // Stat cards configurations para malinis at madaling lagyan ng logic o dynamic data mamaya
  const stats = [
    {
      title: "Total Projects",
      count: 12,
      subtext: "Showcased on portfolio",
      color: "text-blue-600 bg-blue-50 border-blue-100",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>
      ),
    },
    {
      title: "Published Blogs",
      count: 5,
      subtext: "Articles and write-ups",
      color: "text-amber-600 bg-amber-50 border-amber-100",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6.125C3 5.504 3.504 5 4.125 5H8.25m4.5 2.5v12.5"
          />
        </svg>
      ),
    },
    {
      title: "Core Skills",
      count: 8,
      subtext: "Tech stack badges listed",
      color: "text-purple-600 bg-purple-50 border-purple-100",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 21l8.954-8.955c.44-.439.44-1.152 0-1.591L13.5 6l-.904.813a2.25 2.25 0 01-3.182 0l-2.6-2.6a2.25 2.25 0 00-3.182 0l-1.59 1.59a2.25 2.25 0 000 3.181l2.6 2.6a2.25 2.25 0 010 3.182z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Heading Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          Welcome back{" "}
          <span className="animate-bounce origin-bottom-right inline-block">
            👋
          </span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Here's what's currently happening with your portfolio CMS metrics.
        </p>
      </div>

      {/* Metrics Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-gray-300/80 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between">
              {/* Stat Info Text */}
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-500 transition-colors">
                  {stat.title}
                </span>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">
                  {stat.count}
                </p>
              </div>

              {/* Dynamic Styled Icon Wrapper */}
              <div
                className={`p-2.5 rounded-xl border ${stat.color} shadow-2xs group-hover:scale-105 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
            </div>

            {/* Subtext Description */}
            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>{stat.subtext}</span>
              {/* Malinis na horizontal arrow decorator */}
              <svg
                className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Placeholder section para sa Quick Actions o Recent Activities mo sa susunod */}
      <div className="p-6 bg-linear-to-r from-gray-50 to-gray-100/50 border border-gray-200/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="text-sm font-semibold text-gray-900">
            Need to update your live site?
          </h4>
          <p className="text-xs text-gray-500 mt-0.5">
            Any changes you make here are synchronized instantly with your
            front-end repository.
          </p>
        </div>
        <div className="w-full sm:w-auto h-px sm:h-8 sm:w-px bg-gray-200" />
        <span className="text-xs font-semibold text-blue-600 bg-white border border-blue-100 px-3 py-1.5 rounded-xl shadow-2xs whitespace-nowrap">
          Production Ready
        </span>
      </div>
    </div>
  );
}

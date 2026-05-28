"use client";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="h-16 flex items-center justify-between p-8 border-b border-gray-200/80 bg-white/70 backdrop-blur-xl sticky top-0 z-40">
      {/* Left Side: Breadcrumb / Title Indicator */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 font-medium">Workspace</span>
        <svg
          className="w-3 h-3 text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <h2 className="text-sm font-semibold text-gray-800 tracking-tight">
          Admin Dashboard
        </h2>
      </div>

      {/* Right Side: User Profile & Logout Action */}
      <div className="flex items-center gap-4">
        {/* User Profile Avatar Placeholder */}
        <div className="flex items-center gap-2.5 pl-4 border-l border-gray-100">
          <div className="h-8 w-8 rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-xs select-none">
            MA
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-gray-800 leading-tight">
              Mark Alexis
            </p>
            <p className="text-[10px] text-gray-400 font-medium">
              System Administrator
            </p>
          </div>
        </div>

        {/* Integrated Logout Button */}
        <button
          onClick={handleLogout}
          className="inline-flex items-center justify-center h-9 w-9 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 cursor-pointer"
          title="Sign Out"
        >
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

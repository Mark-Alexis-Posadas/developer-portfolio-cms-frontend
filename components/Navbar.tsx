"use client";

export default function Navbar() {
  return (
    <header className="h-14 flex items-center justify-between px-8 border-b bg-white/60 backdrop-blur-md">
      <h2 className="text-sm font-medium text-gray-700">Admin Dashboard</h2>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        className="text-sm text-red-500 hover:text-red-600"
      >
        Logout
      </button>
    </header>
  );
}

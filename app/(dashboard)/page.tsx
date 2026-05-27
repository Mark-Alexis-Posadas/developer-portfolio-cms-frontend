export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Welcome back 👋</h1>

      <p className="text-gray-500 mt-1">
        Here's what's happening with your portfolio CMS
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
          <h3 className="text-sm text-gray-500">Projects</h3>
          <p className="text-2xl font-semibold mt-2">12</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
          <h3 className="text-sm text-gray-500">Blogs</h3>
          <p className="text-2xl font-semibold mt-2">5</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
          <h3 className="text-sm text-gray-500">Skills</h3>
          <p className="text-2xl font-semibold mt-2">8</p>
        </div>
      </div>
    </div>
  );
}

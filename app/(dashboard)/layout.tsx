import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#f5f5f7] text-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

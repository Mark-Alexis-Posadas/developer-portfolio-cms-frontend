import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen bg-[#f8f9fa] text-gray-950 overflow-hidden antialiased">
      {/* Fixed/Sticky Sidebar Container */}
      <Sidebar />

      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Floating Navbar */}
        <Navbar />

        {/* Scrollable Viewport Container */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {/* Max-width wrapper para hindi masyadong banat ang mga forms at cards sa malalaking screen */}
          <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

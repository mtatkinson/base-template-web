import { ReactNode } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background">
        <div className="flex h-14 items-center border-b px-4">
          <Link 
            href={ROUTES.dashboard}
            className="font-semibold"
          >
            Dashboard
          </Link>
        </div>
        <nav className="space-y-1 p-4">
          <Link
            href={ROUTES.dashboard}
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Overview
          </Link>
          <Link
            href={ROUTES.profile}
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Profile
          </Link>
          <Link
            href={ROUTES.settings}
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6">
          {children}
        </div>
      </main>
    </div>
  );
} 
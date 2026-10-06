import { BarChart3, FileText, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

interface NavigationItem {
  label: string;
  to: string;
  icon: typeof LayoutDashboard;
}

const citizenNavigation: NavigationItem[] = [
  {
    label: "Overview",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Reports",
    to: "/dashboard/reports",
    icon: FileText,
  },
];

const adminNavigation: NavigationItem[] = [
  {
    label: "Overview",
    to: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Issues",
    to: "/admin/issues",
    icon: FileText,
  },
  {
    label: "Analytics",
    to: "/admin/analytics",
    icon: BarChart3,
  },
];

function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAdminArea = location.pathname.startsWith("/admin");

  const navigation = isAdminArea ? adminNavigation : citizenNavigation;

  const navigationTitle = isAdminArea ? "Administration" : "Citizen Portal";

  const dashboardHome = isAdminArea ? "/admin" : "/dashboard";

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-slate-200 px-5">
          <NavLink to={dashboardHome} className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-600 text-sm font-bold text-white">
              B
            </span>

            <span className="text-lg font-bold tracking-tight text-slate-950">
              Biyo
            </span>
          </NavLink>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {navigationTitle}
          </p>

          <nav className="space-y-1" aria-label={navigationTitle}>
            {navigation.map((item) => (
              <DashboardNavItem key={item.to} item={item} />
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200 p-4">
          <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
              U
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                Biyo User
              </p>

              <p className="truncate text-xs text-slate-500">Account</p>
            </div>
          </div>
        </div>
      </aside>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/40"
            aria-label="Close navigation"
            onClick={() => setMobileMenuOpen(false)}
          />

          <aside className="relative flex h-full w-72 max-w-[85vw] flex-col bg-white shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
              <NavLink
                to={dashboardHome}
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-600 text-sm font-bold text-white">
                  B
                </span>

                <span className="text-lg font-bold tracking-tight text-slate-950">
                  Biyo
                </span>
              </NavLink>

              <button
                type="button"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 p-4">
              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {navigationTitle}
              </p>

              <nav className="space-y-1" aria-label={navigationTitle}>
                {navigation.map((item) => (
                  <DashboardNavItem
                    key={item.to}
                    item={item}
                    onNavigate={() => setMobileMenuOpen(false)}
                  />
                ))}
              </nav>
            </div>
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="size-5" />
          </button>

          <div className="hidden lg:block">
            <p className="text-sm font-medium text-slate-500">
              {navigationTitle}
            </p>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">Biyo User</p>

              <p className="text-xs text-slate-500">
                {isAdminArea ? "Administrator" : "Citizen"}
              </p>
            </div>

            <div className="flex size-9 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
              U
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

interface DashboardNavItemProps {
  item: NavigationItem;
  onNavigate?: () => void;
}

function DashboardNavItem({ item, onNavigate }: DashboardNavItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      end={item.to === "/dashboard" || item.to === "/admin"}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600",
          isActive
            ? "bg-cyan-50 text-cyan-700"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        ].join(" ")
      }
    >
      <Icon className="size-5 shrink-0" />
      <span>{item.label}</span>
    </NavLink>
  );
}

export default DashboardLayout;

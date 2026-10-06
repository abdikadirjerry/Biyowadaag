import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "../components/ui/Button";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Issues", to: "/issues" },
];

function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2"
            aria-label="Biyo home"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-600 text-sm font-bold text-white">
              B
            </span>

            <span className="text-lg font-bold tracking-tight">Biyo</span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600",
                    isActive
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 sm:inline-flex"
            >
              Sign in
            </Link>

            <Link to="/register">
              <Button size="sm">Get started</Button>
            </Link>
          </div>
        </div>

        <nav
          className="border-t border-slate-100 px-4 py-2 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "shrink-0 rounded-lg px-3 py-2 text-sm font-medium",
                    isActive
                      ? "bg-cyan-50 text-cyan-700"
                      : "text-slate-600 hover:bg-slate-100",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/login"
              className={({ isActive }) =>
                [
                  "shrink-0 rounded-lg px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-slate-600 hover:bg-slate-100",
                ].join(" ")
              }
            >
              Sign in
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:px-8">
          <p className="font-semibold text-slate-700">Biyo</p>
          <p>Water issue reporting and management platform.</p>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;

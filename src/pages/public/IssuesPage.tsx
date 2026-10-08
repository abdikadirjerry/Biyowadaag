import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Droplets,
  FileSearch,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

type IssueStatus = "Submitted" | "Under Review" | "In Progress" | "Resolved";

type IssueCategory =
  | "Water Supply"
  | "Water Quality"
  | "Leakage"
  | "Infrastructure";

type Issue = {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  status: IssueStatus;
  location: string;
  reportedAt: string;
  urgency: "Low" | "Medium" | "High";
};

const demoIssues: Issue[] = [
  {
    id: "water-001",
    title: "Water supply interruption",
    description:
      "Residents have reported an interruption to the regular water supply in their neighborhood.",
    category: "Water Supply",
    status: "Under Review",
    location: "Hargeisa, Somaliland",
    reportedAt: "2026-10-05",
    urgency: "High",
  },
  {
    id: "water-002",
    title: "Water pipe leakage",
    description:
      "Water is leaking from a pipe near a residential road and may be affecting nearby access.",
    category: "Leakage",
    status: "In Progress",
    location: "Hargeisa, Somaliland",
    reportedAt: "2026-10-04",
    urgency: "High",
  },
  {
    id: "water-003",
    title: "Concern about water quality",
    description:
      "Residents have raised concerns about the appearance and quality of their supplied water.",
    category: "Water Quality",
    status: "Submitted",
    location: "Hargeisa, Somaliland",
    reportedAt: "2026-10-03",
    urgency: "Medium",
  },
  {
    id: "water-004",
    title: "Damaged water infrastructure",
    description:
      "Damage to water infrastructure has been reported and may require inspection.",
    category: "Infrastructure",
    status: "Under Review",
    location: "Hargeisa, Somaliland",
    reportedAt: "2026-10-02",
    urgency: "Medium",
  },
  {
    id: "water-005",
    title: "Community water supply restored",
    description:
      "A previously reported water supply problem has been marked as resolved in this demonstration.",
    category: "Water Supply",
    status: "Resolved",
    location: "Hargeisa, Somaliland",
    reportedAt: "2026-09-29",
    urgency: "Low",
  },
  {
    id: "water-006",
    title: "Leak near a public water point",
    description:
      "A leak has been reported near a public water collection point and may need maintenance.",
    category: "Leakage",
    status: "Submitted",
    location: "Hargeisa, Somaliland",
    reportedAt: "2026-09-27",
    urgency: "Medium",
  },
];

const categories = [
  "All Categories",
  "Water Supply",
  "Water Quality",
  "Leakage",
  "Infrastructure",
];

const statuses = [
  "All Statuses",
  "Submitted",
  "Under Review",
  "In Progress",
  "Resolved",
];

const statusStyles: Record<IssueStatus, string> = {
  Submitted: "bg-blue-50 text-blue-700 ring-blue-200",
  "Under Review": "bg-amber-50 text-amber-800 ring-amber-200",
  "In Progress": "bg-violet-50 text-violet-700 ring-violet-200",
  Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const urgencyStyles: Record<Issue["urgency"], string> = {
  Low: "bg-slate-100 text-slate-600",
  Medium: "bg-orange-50 text-orange-700",
  High: "bg-rose-50 text-rose-700",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function IssuesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Statuses");

  const filteredIssues = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return demoIssues.filter((issue) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        `${issue.title} ${issue.description} ${issue.location} ${issue.id}`
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCategory =
        category === "All Categories" || issue.category === category;

      const matchesStatus =
        status === "All Statuses" || issue.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setStatus("All Statuses");
  };

  const hasFilters =
    search.trim().length > 0 ||
    category !== "All Categories" ||
    status !== "All Statuses";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900" />
        <div className="absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-sky-200">
              <Droplets className="h-4 w-4" />
              Community water reports
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Explore water issues in the community.
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300 sm:text-lg">
              Browse reported water concerns, explore their current status, and
              find the information available about each issue.
            </p>

            <div className="mt-8">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-400"
              >
                Report an issue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Report summary */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Reports displayed
            </p>
            <p className="mt-1 text-3xl font-bold tabular-nums text-slate-950">
              {filteredIssues.length}
              <span className="ml-2 text-base font-normal text-slate-400">
                of {demoIssues.length} sample reports
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-3 text-sm font-medium text-sky-800">
            <FileSearch className="h-5 w-5" />
            Search and filter reports
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-sky-700" />
            <h2 className="font-bold text-slate-900">Find a report</h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto]">
            <div>
              <label
                htmlFor="issue-search"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Search
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="issue-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search title, location, or ID..."
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="issue-category"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Category
              </label>
              <select
                id="issue-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="issue-status"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Status
              </label>
              <select
                id="issue-status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              >
                {statuses.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={clearFilters}
                disabled={!hasFilters}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 lg:w-auto"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Water issue reports
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Showing {filteredIssues.length}{" "}
              {filteredIssues.length === 1 ? "report" : "reports"} matching your
              filters.
            </p>
          </div>
        </div>

        {filteredIssues.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredIssues.map((issue) => (
              <article
                key={issue.id}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-lg bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
                    {issue.category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${urgencyStyles[issue.urgency]}`}
                  >
                    {issue.urgency} priority
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-7 text-slate-900">
                  {issue.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {issue.description}
                </p>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex items-start gap-2 text-sm text-slate-500">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    <span>{issue.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays className="h-4 w-4 shrink-0 text-slate-400" />
                    <span>Reported {formatDate(issue.reportedAt)}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${statusStyles[issue.status]}`}
                    >
                      {issue.status === "Resolved" ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Clock3 className="h-3.5 w-3.5" />
                      )}
                      {issue.status}
                    </span>

                    <Link
                      to={`/issues/${issue.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
                    >
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <FileSearch className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              No matching reports found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another search term or change the selected category and status
              to see more reports.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              <X className="h-4 w-4" />
              Clear all filters
            </button>
          </div>
        )}

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <strong>Demo data:</strong> These reports are sample records for
          development and testing. They are not verified live incidents, and
          their statuses do not reflect actual water service conditions.
        </div>
      </section>
    </main>
  );
}

export default IssuesPage;

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  Droplets,
  FileSearch,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";

type ReportStatus =
  | "Submitted"
  | "Under Review"
  | "In Progress"
  | "Resolved"
  | "Rejected";

type Report = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: ReportStatus;
  location: string;
  date: string;
  urgency: "Low" | "Medium" | "High";
};

const demoReports: Report[] = [
  {
    id: "water-001",
    title: "Water supply interruption",
    description:
      "Residents have reported an interruption to the usual water supply in the area.",
    category: "Water Supply",
    status: "Under Review",
    location: "Hargeisa",
    date: "Oct 5, 2026",
    urgency: "High",
  },
  {
    id: "water-002",
    title: "Water pipe leakage",
    description:
      "Water is leaking from a pipe and may be affecting nearby roads and properties.",
    category: "Leakage",
    status: "In Progress",
    location: "Hargeisa",
    date: "Oct 4, 2026",
    urgency: "High",
  },
  {
    id: "water-003",
    title: "Concern about water quality",
    description:
      "A resident has raised a concern about the appearance and quality of supplied water.",
    category: "Water Quality",
    status: "Submitted",
    location: "Hargeisa",
    date: "Oct 3, 2026",
    urgency: "Medium",
  },
  {
    id: "water-004",
    title: "Damaged water infrastructure",
    description:
      "Damage to water infrastructure may require inspection and maintenance.",
    category: "Infrastructure",
    status: "Under Review",
    location: "Hargeisa",
    date: "Oct 2, 2026",
    urgency: "Medium",
  },
  {
    id: "water-005",
    title: "Community water supply restored",
    description:
      "This demonstration record represents a water supply issue marked as resolved.",
    category: "Water Supply",
    status: "Resolved",
    location: "Hargeisa",
    date: "Sep 29, 2026",
    urgency: "Low",
  },
  {
    id: "water-006",
    title: "Leak near a public water point",
    description:
      "A reported leak near a public water point may be wasting water.",
    category: "Leakage",
    status: "Submitted",
    location: "Hargeisa",
    date: "Sep 27, 2026",
    urgency: "Medium",
  },
];

const statusStyles: Record<ReportStatus, string> = {
  Submitted: "bg-slate-100 text-slate-700",
  "Under Review": "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Resolved: "bg-emerald-100 text-emerald-800",
  Rejected: "bg-rose-100 text-rose-800",
};

const urgencyStyles: Record<Report["urgency"], string> = {
  Low: "bg-slate-100 text-slate-600",
  Medium: "bg-orange-50 text-orange-700",
  High: "bg-rose-50 text-rose-700",
};

export default function CitizenIssuesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All statuses");
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const filteredReports = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return demoReports.filter((report) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        report.title.toLowerCase().includes(normalizedSearch) ||
        report.description.toLowerCase().includes(normalizedSearch) ||
        report.location.toLowerCase().includes(normalizedSearch) ||
        report.id.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        selectedStatus === "All statuses" || report.status === selectedStatus;

      const matchesCategory =
        selectedCategory === "All categories" ||
        report.category === selectedCategory;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, selectedStatus, selectedCategory]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedStatus("All statuses");
    setSelectedCategory("All categories");
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
            <ClipboardList size={15} />
            Citizen dashboard
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            My Reports
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Search the sample reports and explore their current demonstration
            statuses.
          </p>
        </div>

        <Link
          to="/issues"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        >
          Explore public issues
          <ArrowRight size={17} />
        </Link>
      </div>

      <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <FileSearch size={20} className="mt-0.5 shrink-0 text-amber-700" />
        <div>
          <p className="text-sm font-semibold text-amber-900">
            Sample reports only
          </p>
          <p className="mt-1 text-sm leading-5 text-amber-800">
            These records are for interface development. They are not verified
            live incidents or reports saved to your account. Search and filters
            work locally in this page.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">All reports</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {demoReports.length}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">Submitted</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {
              demoReports.filter((report) => report.status === "Submitted")
                .length
            }
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">In progress</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {
              demoReports.filter((report) => report.status === "In Progress")
                .length
            }
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">Resolved</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {
              demoReports.filter((report) => report.status === "Resolved")
                .length
            }
          </p>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={19} className="text-sky-700" />
            <h2 className="font-bold text-slate-900">Find a report</h2>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="relative md:col-span-1">
              <label htmlFor="report-search" className="sr-only">
                Search reports
              </label>
              <Search
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                id="report-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search title, location or ID..."
                className="min-h-11 w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label htmlFor="report-status" className="sr-only">
                Filter by status
              </label>
              <select
                id="report-status"
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
                className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              >
                <option>All statuses</option>
                <option>Submitted</option>
                <option>Under Review</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Rejected</option>
              </select>
            </div>

            <div>
              <label htmlFor="report-category" className="sr-only">
                Filter by category
              </label>
              <select
                id="report-category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              >
                <option>All categories</option>
                <option>Water Supply</option>
                <option>Water Quality</option>
                <option>Leakage</option>
                <option>Infrastructure</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-slate-100 bg-slate-50/70 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600" aria-live="polite">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {filteredReports.length}
            </span>{" "}
            of {demoReports.length} sample reports
          </p>

          {(searchTerm ||
            selectedStatus !== "All statuses" ||
            selectedCategory !== "All categories") && (
            <button
              type="button"
              onClick={resetFilters}
              className="self-start text-sm font-semibold text-sky-700 hover:text-sky-900 sm:self-auto"
            >
              Clear filters
            </button>
          )}
        </div>

        {filteredReports.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {filteredReports.map((report) => (
              <article
                key={report.id}
                className="p-5 transition hover:bg-slate-50/70 sm:p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                      <Droplets size={22} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-slate-900">
                          {report.title}
                        </h3>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                          {report.id}
                        </span>
                      </div>

                      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                        {report.description}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} />
                          {report.location}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          {report.date}
                        </span>

                        <span className="rounded-full border border-slate-200 px-2.5 py-1">
                          {report.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 lg:shrink-0 lg:flex-col lg:items-end">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[report.status]}`}
                    >
                      {report.status}
                    </span>

                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${urgencyStyles[report.urgency]}`}
                    >
                      {report.urgency} priority
                    </span>

                    <Link
                      to={`/dashboard/reports/${report.id}`}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 hover:text-sky-900"
                    >
                      View details
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="px-5 py-14 text-center sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <FileSearch size={26} />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-900">
              No reports found
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              No sample reports match your search and selected filters. Try
              another keyword or reset your filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

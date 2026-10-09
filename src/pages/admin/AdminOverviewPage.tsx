import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Droplets,
  FileText,
  MapPin,
  ShieldAlert,
  Users,
  Waves,
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
  category: string;
  location: string;
  date: string;
  status: ReportStatus;
  priority: "Low" | "Medium" | "High";
};

const demoReports: Report[] = [
  {
    id: "water-001",
    title: "Water supply interruption",
    category: "Water Supply",
    location: "Hargeisa",
    date: "Oct 5, 2026",
    status: "Under Review",
    priority: "High",
  },
  {
    id: "water-002",
    title: "Water pipe leakage",
    category: "Leakage",
    location: "Hargeisa",
    date: "Oct 4, 2026",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "water-003",
    title: "Concern about water quality",
    category: "Water Quality",
    location: "Hargeisa",
    date: "Oct 3, 2026",
    status: "Submitted",
    priority: "Medium",
  },
  {
    id: "water-004",
    title: "Damaged water infrastructure",
    category: "Infrastructure",
    location: "Hargeisa",
    date: "Oct 2, 2026",
    status: "Under Review",
    priority: "Medium",
  },
  {
    id: "water-005",
    title: "Community water supply restored",
    category: "Water Supply",
    location: "Hargeisa",
    date: "Sep 29, 2026",
    status: "Resolved",
    priority: "Low",
  },
  {
    id: "water-006",
    title: "Leak near a public water point",
    category: "Leakage",
    location: "Hargeisa",
    date: "Sep 27, 2026",
    status: "Submitted",
    priority: "Medium",
  },
];

const statusStyles: Record<ReportStatus, string> = {
  Submitted: "bg-slate-100 text-slate-700",
  "Under Review": "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Resolved: "bg-emerald-100 text-emerald-800",
  Rejected: "bg-rose-100 text-rose-800",
};

const priorityStyles: Record<Report["priority"], string> = {
  Low: "bg-slate-100 text-slate-600",
  Medium: "bg-orange-50 text-orange-700",
  High: "bg-rose-50 text-rose-700",
};

const categoryColors: Record<string, string> = {
  "Water Supply": "bg-sky-600",
  Leakage: "bg-cyan-500",
  "Water Quality": "bg-violet-500",
  Infrastructure: "bg-amber-500",
};

const categories = [
  { name: "Water Supply", count: 2 },
  { name: "Leakage", count: 2 },
  { name: "Water Quality", count: 1 },
  { name: "Infrastructure", count: 1 },
];

const summaryCards = [
  {
    label: "Total reports",
    value: "6",
    note: "All sample records",
    icon: FileText,
    iconStyle: "bg-sky-50 text-sky-700",
  },
  {
    label: "Awaiting review",
    value: "2",
    note: "Submitted and review queue",
    icon: Clock3,
    iconStyle: "bg-amber-50 text-amber-700",
  },
  {
    label: "In progress",
    value: "1",
    note: "Work shown as underway",
    icon: Activity,
    iconStyle: "bg-blue-50 text-blue-700",
  },
  {
    label: "Resolved",
    value: "1",
    note: "Marked resolved in demo",
    icon: CheckCircle2,
    iconStyle: "bg-emerald-50 text-emerald-700",
  },
];

export default function AdminOverviewPage() {
  const attentionReports = demoReports.filter(
    (report) =>
      report.status === "Submitted" || report.status === "Under Review",
  );

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
            <ShieldAlert size={15} />
            Administration
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Admin dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Review reported water issues, monitor their progress, and explore
            the sample service statistics.
          </p>
        </div>

        <Link
          to="/admin/issues"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        >
          Open issue queue
          <ArrowRight size={17} />
        </Link>
      </header>

      <div
        role="note"
        className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4"
      >
        <ShieldAlert size={20} className="mt-0.5 shrink-0 text-amber-700" />
        <div>
          <p className="text-sm font-semibold text-amber-900">
            Demo administration data
          </p>
          <p className="mt-1 text-sm leading-5 text-amber-800">
            All reports, counts, and category totals on this page are sample
            data. They do not represent verified incidents or live operational
            statistics, and this page is not yet protected by real administrator
            authentication.
          </p>
        </div>
      </div>

      <section aria-labelledby="overview-heading">
        <div className="mb-4">
          <h2
            id="overview-heading"
            className="text-lg font-bold text-slate-900"
          >
            Overview
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Summary of the six demonstration reports.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {card.label}
                    </p>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                      {card.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.iconStyle}`}
                  >
                    <Icon size={21} />
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500">{card.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent water issues
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Latest entries in the sample report list.
              </p>
            </div>

            <Link
              to="/admin/issues"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              View issue queue
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Report</th>
                  <th className="px-4 py-3 font-semibold">Priority</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Details</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {demoReports.slice(0, 5).map((report) => (
                  <tr key={report.id} className="transition hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                          <Droplets size={18} />
                        </div>

                        <div className="min-w-0">
                          <p className="max-w-[230px] truncate text-sm font-semibold text-slate-900">
                            {report.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {report.id}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {report.category}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyles[report.priority]}`}
                      >
                        {report.priority}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[report.status]}`}
                      >
                        {report.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <Link
                        to={`/admin/issues/${report.id}`}
                        aria-label={`View ${report.title}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-sky-50 hover:text-sky-700"
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-100 p-4">
            <Link
              to="/admin/issues"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              View all sample issues
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Needs attention
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Submitted or under review.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Clock3 size={20} />
              </div>
            </div>

            <p className="mt-5 text-3xl font-bold text-slate-900">
              {attentionReports.length}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              sample reports awaiting further review
            </p>

            <div className="mt-4 space-y-3">
              {attentionReports.map((report) => (
                <Link
                  key={report.id}
                  to={`/admin/issues/${report.id}`}
                  className="block rounded-xl border border-slate-100 p-3 transition hover:border-sky-200 hover:bg-sky-50/50"
                >
                  <p className="text-sm font-semibold text-slate-800">
                    {report.title}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <MapPin size={13} />
                    {report.location}
                    <span
                      className={`rounded-full px-2 py-1 font-medium ${statusStyles[report.status]}`}
                    >
                      {report.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to="/admin/issues"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              Review issue queue
              <ArrowRight size={16} />
            </Link>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <BarChart3 size={20} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Issue categories</h2>
                <p className="text-xs text-slate-500">Sample distribution</p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {categories.map((category) => {
                const percentage = (category.count / demoReports.length) * 100;

                return (
                  <div key={category.name}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-600">{category.name}</span>
                      <span className="font-semibold text-slate-900">
                        {category.count}
                      </span>
                    </div>

                    <div
                      className="h-2 overflow-hidden rounded-full bg-slate-100"
                      role="progressbar"
                      aria-label={`${category.name} sample reports`}
                      aria-valuenow={category.count}
                      aria-valuemin={0}
                      aria-valuemax={demoReports.length}
                    >
                      <div
                        className={`h-full rounded-full ${categoryColors[category.name]}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/admin/analytics"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              Open analytics
              <ArrowRight size={16} />
            </Link>
          </section>
        </aside>
      </section>

      <section className="rounded-2xl bg-sky-800 p-6 text-white sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <Users size={23} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Keep the issue queue moving</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-sky-100">
                Use the issue queue to inspect individual reports. Status
                updates and administrative actions will be enabled after the
                backend and permissions are implemented.
              </p>
            </div>
          </div>

          <Link
            to="/admin/issues"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-sky-900 transition hover:bg-sky-50"
          >
            Open issue queue
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <Waves size={18} className="mt-0.5 shrink-0 text-slate-500" />
        <p className="text-xs leading-5 text-slate-500">
          Category totals and summary cards are static sample values for now.
          Later, the backend will calculate these values from stored reports.
        </p>
      </div>
    </div>
  );
}

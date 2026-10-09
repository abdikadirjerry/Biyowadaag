import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Droplets,
  FileText,
  MapPin,
  ShieldAlert,
  TrendingUp,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ReportStatus =
  | "Submitted"
  | "Under Review"
  | "In Progress"
  | "Resolved"
  | "Rejected";

type Priority = "Low" | "Medium" | "High";

type DemoReport = {
  id: string;
  title: string;
  category: string;
  status: ReportStatus;
  priority: Priority;
  location: string;
  date: string;
};

const demoReports: DemoReport[] = [
  {
    id: "water-001",
    title: "Water supply interruption",
    category: "Water Supply",
    status: "Under Review",
    priority: "High",
    location: "Hargeisa",
    date: "2026-10-05",
  },
  {
    id: "water-002",
    title: "Water pipe leakage",
    category: "Leakage",
    status: "In Progress",
    priority: "High",
    location: "Hargeisa",
    date: "2026-10-04",
  },
  {
    id: "water-003",
    title: "Concern about water quality",
    category: "Water Quality",
    status: "Submitted",
    priority: "Medium",
    location: "Hargeisa",
    date: "2026-10-03",
  },
  {
    id: "water-004",
    title: "Damaged water infrastructure",
    category: "Infrastructure",
    status: "Under Review",
    priority: "Medium",
    location: "Hargeisa",
    date: "2026-10-02",
  },
  {
    id: "water-005",
    title: "Community water supply restored",
    category: "Water Supply",
    status: "Resolved",
    priority: "Low",
    location: "Hargeisa",
    date: "2026-09-29",
  },
  {
    id: "water-006",
    title: "Leak near a public water point",
    category: "Leakage",
    status: "Submitted",
    priority: "Medium",
    location: "Hargeisa",
    date: "2026-09-27",
  },
];

const statusStyles: Record<ReportStatus, string> = {
  Submitted: "bg-slate-100 text-slate-700",
  "Under Review": "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Resolved: "bg-emerald-100 text-emerald-800",
  Rejected: "bg-red-100 text-red-800",
};

const priorityStyles: Record<Priority, string> = {
  Low: "bg-slate-100 text-slate-700",
  Medium: "bg-amber-100 text-amber-800",
  High: "bg-red-100 text-red-800",
};

const statusColors: Record<ReportStatus, string> = {
  Submitted: "bg-slate-400",
  "Under Review": "bg-amber-500",
  "In Progress": "bg-blue-600",
  Resolved: "bg-emerald-500",
  Rejected: "bg-red-500",
};

const categoryColors: Record<string, string> = {
  "Water Supply": "bg-blue-600",
  Leakage: "bg-cyan-500",
  "Water Quality": "bg-violet-500",
  Infrastructure: "bg-amber-500",
};

const priorityColors: Record<Priority, string> = {
  Low: "bg-slate-400",
  Medium: "bg-amber-500",
  High: "bg-red-500",
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  iconStyle,
  trendIcon: TrendIcon,
}: {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
  iconStyle: string;
  trendIcon?: LucideIcon;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>
        <div className={`rounded-xl p-3 ${iconStyle}`}>
          <Icon size={21} />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
        {TrendIcon && <TrendIcon size={14} />}
        <span>{description}</span>
      </div>
    </div>
  );
}

function BreakdownRow({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="shrink-0 font-semibold text-slate-900">
          {count}{" "}
          <span className="font-normal text-slate-500">
            ({Math.round(percentage)}%)
          </span>
        </span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-label={`${label}: ${count} of ${total} reports`}
        aria-valuenow={count}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const totalReports = demoReports.length;
  const resolvedCount = demoReports.filter(
    (report) => report.status === "Resolved",
  ).length;
  const submittedCount = demoReports.filter(
    (report) => report.status === "Submitted",
  ).length;
  const underReviewCount = demoReports.filter(
    (report) => report.status === "Under Review",
  ).length;
  const inProgressCount = demoReports.filter(
    (report) => report.status === "In Progress",
  ).length;
  const rejectedCount = demoReports.filter(
    (report) => report.status === "Rejected",
  ).length;
  const awaitingReviewCount = submittedCount + underReviewCount;
  const highPriorityCount = demoReports.filter(
    (report) => report.priority === "High",
  ).length;

  const statuses: ReportStatus[] = [
    "Submitted",
    "Under Review",
    "In Progress",
    "Resolved",
    "Rejected",
  ];

  const categories = [
    "Water Supply",
    "Leakage",
    "Water Quality",
    "Infrastructure",
  ];

  const priorities: Priority[] = ["High", "Medium", "Low"];

  const categoryIcons: Record<string, LucideIcon> = {
    "Water Supply": Droplets,
    Leakage: AlertTriangle,
    "Water Quality": ShieldAlert,
    Infrastructure: Wrench,
  };

  const recentReports = [...demoReports].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <div className="mx-auto max-w-7xl space-y-7 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <Link
            to="/admin"
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-700"
          >
            <ArrowLeft size={16} />
            Back to admin dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
              <BarChart3 size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Analytics & Reports
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                An overview of water issue reports and their statuses.
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/admin/issues"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          <FileText size={17} />
          View all issues
          <ArrowRight size={16} />
        </Link>
      </div>

      <div
        role="note"
        className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4"
      >
        <Activity className="mt-0.5 shrink-0 text-amber-700" size={20} />
        <div>
          <p className="text-sm font-semibold text-amber-900">
            Demonstration analytics
          </p>
          <p className="mt-1 text-sm leading-6 text-amber-800">
            All figures and reports on this page are sample data for the Biyo
            project. They are not live statistics or verified water incidents.
          </p>
        </div>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Overview metrics</h2>
          <span className="text-xs text-slate-500">All demo records</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Total reports"
            value={totalReports}
            description="All demonstration records"
            icon={FileText}
            iconStyle="bg-blue-50 text-blue-700"
            trendIcon={TrendingUp}
          />
          <MetricCard
            title="Resolved reports"
            value={resolvedCount}
            description={`${totalReports > 0 ? Math.round((resolvedCount / totalReports) * 100) : 0}% of demo reports`}
            icon={CheckCircle2}
            iconStyle="bg-emerald-50 text-emerald-700"
            trendIcon={ArrowUpRight}
          />
          <MetricCard
            title="Awaiting review"
            value={awaitingReviewCount}
            description="Submitted or under review"
            icon={Clock3}
            iconStyle="bg-amber-50 text-amber-700"
            trendIcon={ArrowDownRight}
          />
          <MetricCard
            title="High priority"
            value={highPriorityCount}
            description="Requires close attention"
            icon={AlertTriangle}
            iconStyle="bg-red-50 text-red-700"
            trendIcon={ShieldAlert}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Reports by status
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                How demonstration reports are distributed.
              </p>
            </div>
            <div className="rounded-xl bg-slate-100 p-2.5 text-slate-600">
              <BarChart3 size={20} />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {statuses.map((status) => {
              const count = demoReports.filter(
                (report) => report.status === status,
              ).length;

              return (
                <BreakdownRow
                  key={status}
                  label={status}
                  count={count}
                  total={totalReports}
                  color={statusColors[status]}
                />
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
            {statuses.map((status) => (
              <div key={status} className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${statusColors[status]}`}
                />
                <span className="text-xs text-slate-500">{status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Reports by category
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Types of issues represented in the sample records.
              </p>
            </div>
            <div className="rounded-xl bg-cyan-50 p-2.5 text-cyan-700">
              <Droplets size={20} />
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {categories.map((category) => {
              const count = demoReports.filter(
                (report) => report.category === category,
              ).length;
              const CategoryIcon = categoryIcons[category];

              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <CategoryIcon size={17} className="text-slate-500" />
                      <span className="text-sm font-medium text-slate-700">
                        {category}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      {count}
                    </span>
                  </div>
                  <BreakdownRow
                    label={`${category} reports`}
                    count={count}
                    total={totalReports}
                    color={categoryColors[category]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Priority breakdown
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Sample reports grouped by urgency.
          </p>

          <div className="mt-6 space-y-5">
            {priorities.map((priority) => {
              const count = demoReports.filter(
                (report) => report.priority === priority,
              ).length;

              return (
                <BreakdownRow
                  key={priority}
                  label={`${priority} priority`}
                  count={count}
                  total={totalReports}
                  color={priorityColors[priority]}
                />
              );
            })}
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldAlert size={18} />
              <p className="text-sm font-semibold">Priority reminder</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              High-priority issues should be reviewed carefully. These
              demonstration values do not represent real emergencies.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent reports
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Latest entries in the demonstration dataset.
              </p>
            </div>
            <Link
              to="/admin/issues"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Open issue queue
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="pb-3 pr-4 font-semibold">Report</th>
                  <th className="pb-3 pr-4 font-semibold">Status</th>
                  <th className="pb-3 pr-4 font-semibold">Priority</th>
                  <th className="pb-3 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.slice(0, 5).map((report) => (
                  <tr
                    key={report.id}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="py-4 pr-4">
                      <Link
                        to={`/admin/issues/${report.id}`}
                        className="font-semibold text-slate-800 transition hover:text-blue-700"
                      >
                        {report.title}
                      </Link>
                      <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <MapPin size={12} />
                        {report.location} · {report.category}
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[report.status]}`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyles[report.priority]}`}
                      >
                        {report.priority}
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-slate-500">
                      {formatDate(report.date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-950">
              Ready to review individual issues?
            </h2>
            <p className="mt-1 text-sm leading-6 text-blue-900">
              Open the admin queue to search reports, filter by priority, and
              inspect individual report details.
            </p>
          </div>
          <Link
            to="/admin/issues"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Manage reports
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ClipboardList,
  Droplets,
  FileText,
  MapPin,
  Plus,
  ShieldCheck,
  Waves,
} from "lucide-react";

type ReportStatus =
  | "Submitted"
  | "Under Review"
  | "In Progress"
  | "Resolved"
  | "Rejected";

type DemoReport = {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  status: ReportStatus;
};

const demoReports: DemoReport[] = [
  {
    id: "water-001",
    title: "Water supply interruption",
    category: "Water Supply",
    location: "Hargeisa",
    date: "Oct 5, 2026",
    status: "Under Review",
  },
  {
    id: "water-002",
    title: "Water pipe leakage",
    category: "Leakage",
    location: "Hargeisa",
    date: "Oct 4, 2026",
    status: "In Progress",
  },
  {
    id: "water-003",
    title: "Concern about water quality",
    category: "Water Quality",
    location: "Hargeisa",
    date: "Oct 3, 2026",
    status: "Submitted",
  },
  {
    id: "water-005",
    title: "Community water supply restored",
    category: "Water Supply",
    location: "Hargeisa",
    date: "Sep 29, 2026",
    status: "Resolved",
  },
];

const statusStyles: Record<ReportStatus, string> = {
  Submitted: "bg-slate-100 text-slate-700",
  "Under Review": "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Resolved: "bg-emerald-100 text-emerald-800",
  Rejected: "bg-rose-100 text-rose-800",
};

const summaryCards = [
  {
    label: "Total reports",
    value: "6",
    description: "All demo submissions",
    icon: ClipboardList,
    iconStyle: "bg-sky-50 text-sky-700",
  },
  {
    label: "Under review",
    value: "2",
    description: "Awaiting assessment",
    icon: Clock3,
    iconStyle: "bg-amber-50 text-amber-700",
  },
  {
    label: "In progress",
    value: "1",
    description: "Work is underway",
    icon: Droplets,
    iconStyle: "bg-blue-50 text-blue-700",
  },
  {
    label: "Resolved",
    value: "1",
    description: "Marked as resolved",
    icon: CheckCircle2,
    iconStyle: "bg-emerald-50 text-emerald-700",
  },
];

export default function CitizenOverviewPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
            <Waves size={15} />
            Citizen dashboard
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Welcome to your dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Follow water-related reports, review their progress, and stay
            informed about issues affecting your community.
          </p>
        </div>

        <Link
          to="/issues"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        >
          <Plus size={18} />
          Explore reports
        </Link>
      </div>

      <div
        role="note"
        className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4"
      >
        <FileText className="mt-0.5 shrink-0 text-amber-700" size={20} />
        <div>
          <p className="text-sm font-semibold text-amber-900">
            Demonstration dashboard
          </p>
          <p className="mt-1 text-sm leading-5 text-amber-800">
            The reports and statistics below are sample data for development.
            They are not connected to a real account or live water-service
            records.
          </p>
        </div>
      </div>

      <section aria-labelledby="report-summary-heading">
        <div className="mb-4">
          <h2
            id="report-summary-heading"
            className="text-lg font-bold text-slate-900"
          >
            Report summary
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            A quick overview of the sample reports.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
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

                <p className="mt-3 text-xs text-slate-500">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent reports
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                A preview of recent demonstration records.
              </p>
            </div>

            <Link
              to="/dashboard/reports"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-900"
            >
              View all reports
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {demoReports.slice(0, 4).map((report) => (
              <Link
                key={report.id}
                to={`/dashboard/reports/${report.id}`}
                className="flex flex-col gap-3 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <Droplets size={20} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-slate-900">
                      {report.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span>{report.category}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {report.location}
                      </span>
                      <span>{report.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[report.status]}`}
                  >
                    {report.status}
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 text-slate-400" />
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-100 p-4 sm:hidden">
            <Link
              to="/dashboard/reports"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              See all reports
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-sky-800 p-6 text-white shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <ShieldCheck size={23} />
            </div>

            <h2 className="mt-5 text-lg font-bold">
              Better water services start with community reports
            </h2>

            <p className="mt-2 text-sm leading-6 text-sky-100">
              Clear information about a water problem can help service teams
              understand where attention may be needed.
            </p>

            <Link
              to="/issues"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-sky-900 transition hover:bg-sky-50"
            >
              Explore public reports
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Quick links</h2>

            <div className="mt-3 space-y-2">
              <Link
                to="/dashboard/reports"
                className="flex items-center justify-between rounded-xl p-3 text-sm text-slate-700 transition hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <ClipboardList size={18} className="text-sky-700" />
                  My reports
                </span>
                <ArrowRight size={16} className="text-slate-400" />
              </Link>

              <Link
                to="/issues"
                className="flex items-center justify-between rounded-xl p-3 text-sm text-slate-700 transition hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <Droplets size={18} className="text-sky-700" />
                  Public issue explorer
                </span>
                <ArrowRight size={16} className="text-slate-400" />
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

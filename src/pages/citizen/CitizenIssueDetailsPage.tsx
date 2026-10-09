import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Droplets,
  FileText,
  MapPin,
  ShieldAlert,
  Circle,
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
  description: string;
  category: string;
  status: ReportStatus;
  location: string;
  date: string;
  urgency: "Low" | "Medium" | "High";
  affectedPeople: string;
};

const demoReports: DemoReport[] = [
  {
    id: "water-001",
    title: "Water supply interruption",
    description:
      "Residents have reported an interruption to the usual water supply in the area. The issue may affect access to water for household and community needs.",
    category: "Water Supply",
    status: "Under Review",
    location: "Hargeisa",
    date: "October 5, 2026",
    urgency: "High",
    affectedPeople: "Community residents",
  },
  {
    id: "water-002",
    title: "Water pipe leakage",
    description:
      "Water is leaking from a pipe and may be affecting nearby roads and properties. The demonstration report is marked as being addressed.",
    category: "Leakage",
    status: "In Progress",
    location: "Hargeisa",
    date: "October 4, 2026",
    urgency: "High",
    affectedPeople: "Nearby residents",
  },
  {
    id: "water-003",
    title: "Concern about water quality",
    description:
      "A resident has raised a concern about the appearance and quality of supplied water. This sample record has not been verified by a water-service authority.",
    category: "Water Quality",
    status: "Submitted",
    location: "Hargeisa",
    date: "October 3, 2026",
    urgency: "Medium",
    affectedPeople: "Not confirmed",
  },
  {
    id: "water-004",
    title: "Damaged water infrastructure",
    description:
      "Damage to water infrastructure may require inspection and maintenance. This record demonstrates how infrastructure reports appear in Biyo.",
    category: "Infrastructure",
    status: "Under Review",
    location: "Hargeisa",
    date: "October 2, 2026",
    urgency: "Medium",
    affectedPeople: "Not confirmed",
  },
  {
    id: "water-005",
    title: "Community water supply restored",
    description:
      "This sample record represents a community water-supply issue that has been marked as resolved in the demonstration interface.",
    category: "Water Supply",
    status: "Resolved",
    location: "Hargeisa",
    date: "September 29, 2026",
    urgency: "Low",
    affectedPeople: "Community residents",
  },
  {
    id: "water-006",
    title: "Leak near a public water point",
    description:
      "A reported leak near a public water point may be wasting water. This sample record has been submitted but has not been verified.",
    category: "Leakage",
    status: "Submitted",
    location: "Hargeisa",
    date: "September 27, 2026",
    urgency: "Medium",
    affectedPeople: "Nearby water-point users",
  },
];

const stages = [
  {
    label: "Submitted",
    description: "The report has been recorded in the demonstration workflow.",
    icon: FileText,
  },
  {
    label: "Under Review",
    description: "The report is awaiting or undergoing assessment.",
    icon: Clock3,
  },
  {
    label: "In Progress",
    description: "Action is shown as underway in the sample workflow.",
    icon: Droplets,
  },
  {
    label: "Resolved",
    description:
      "The report has been marked as resolved in the sample workflow.",
    icon: CheckCircle2,
  },
];

const statusStyles: Record<ReportStatus, string> = {
  Submitted: "bg-slate-100 text-slate-700",
  "Under Review": "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Resolved: "bg-emerald-100 text-emerald-800",
  Rejected: "bg-rose-100 text-rose-800",
};

const urgencyStyles: Record<DemoReport["urgency"], string> = {
  Low: "bg-slate-100 text-slate-700",
  Medium: "bg-orange-50 text-orange-700",
  High: "bg-rose-50 text-rose-700",
};

function getCompletedStageCount(status: ReportStatus) {
  switch (status) {
    case "Submitted":
      return 0;
    case "Under Review":
      return 1;
    case "In Progress":
      return 2;
    case "Resolved":
      return 3;
    case "Rejected":
      return -1;
  }
}

export default function CitizenIssueDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const report = demoReports.find((item) => item.id === id);

  if (!report) {
    return (
      <div className="mx-auto max-w-3xl py-12 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          <FileText size={28} />
        </div>

        <h1 className="mt-5 text-2xl font-bold text-slate-900">
          Report not found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          We couldn't find a demonstration report with that ID. Check the report
          link and try again.
        </p>

        <Link
          to="/dashboard/reports"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
        >
          <ArrowLeft size={17} />
          Back to My Reports
        </Link>
      </div>
    );
  }

  const completedStageCount = getCompletedStageCount(report.status);
  const isRejected = report.status === "Rejected";

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <Link
        to="/dashboard/reports"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-sky-700"
      >
        <ArrowLeft size={17} />
        Back to My Reports
      </Link>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {report.id}
            </span>
            <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-800">
              {report.category}
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {report.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} />
              {report.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={16} />
              {report.date}
            </span>
          </div>
        </div>

        <span
          className={`inline-flex w-fit shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold ${statusStyles[report.status]}`}
        >
          {report.status}
        </span>
      </div>

      <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <ShieldAlert size={20} className="mt-0.5 shrink-0 text-amber-700" />
        <div>
          <p className="text-sm font-semibold text-amber-900">
            Demonstration report
          </p>
          <p className="mt-1 text-sm leading-5 text-amber-800">
            This is sample data for the Biyo interface. The report status and
            timeline are illustrative, not verified service updates. There is no
            connected account or live tracking system yet.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Report description
                </h2>
                <p className="text-sm text-slate-500">
                  Details recorded in this sample.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              {report.description}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Report progress
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                An illustrative workflow showing how a report can move through
                different stages.
              </p>
            </div>

            {isRejected ? (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4">
                <ShieldAlert
                  size={20}
                  className="mt-0.5 shrink-0 text-rose-700"
                />
                <div>
                  <p className="font-semibold text-rose-900">
                    Report marked as rejected
                  </p>
                  <p className="mt-1 text-sm leading-6 text-rose-800">
                    This is a demonstration status. A real system should display
                    the reason and any next steps provided by the reviewing
                    organization.
                  </p>
                </div>
              </div>
            ) : (
              <ol className="mt-6">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;
                  const isComplete = index <= completedStageCount;
                  const isCurrent = index === completedStageCount + 1;

                  return (
                    <li
                      key={stage.label}
                      className="relative flex gap-4 pb-7 last:pb-0"
                    >
                      {index < stages.length - 1 && (
                        <span
                          aria-hidden="true"
                          className={`absolute left-5 top-11 h-[calc(100%-1.25rem)] w-0.5 ${
                            index < completedStageCount
                              ? "bg-emerald-300"
                              : "bg-slate-200"
                          }`}
                        />
                      )}

                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                          isComplete
                            ? "bg-emerald-100 text-emerald-700"
                            : isCurrent
                              ? "bg-sky-100 text-sky-700 ring-4 ring-sky-50"
                              : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {isComplete ? <Check size={19} /> : <Icon size={19} />}
                      </div>

                      <div className="min-w-0 flex-1 pt-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className={`text-sm font-semibold ${
                              isComplete || isCurrent
                                ? "text-slate-900"
                                : "text-slate-500"
                            }`}
                          >
                            {stage.label}
                          </h3>

                          {isComplete && (
                            <span className="text-xs font-medium text-emerald-700">
                              Completed stage
                            </span>
                          )}

                          {isCurrent && (
                            <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-800">
                              Current stage
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {stage.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            )}

            <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
              No verified stage timestamps are available for these sample
              records.
            </p>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Report information
            </h2>

            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Report ID
                </dt>
                <dd className="mt-1 break-all text-sm font-semibold text-slate-900">
                  {report.id}
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Category
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  {report.category}
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Reported location
                </dt>
                <dd className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <MapPin size={16} className="text-slate-400" />
                  {report.location}
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Date submitted
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  {report.date}
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Priority
                </dt>
                <dd className="mt-2">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${urgencyStyles[report.urgency]}`}
                  >
                    {report.urgency}
                  </span>
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Affected people
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  {report.affectedPeople}
                </dd>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Current status
                </dt>
                <dd className="mt-2">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[report.status]}`}
                  >
                    {report.status}
                  </span>
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl bg-sky-800 p-5 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Droplets size={22} />
            </div>

            <h2 className="mt-4 text-base font-bold">
              Explore other water issues
            </h2>
            <p className="mt-2 text-sm leading-6 text-sky-100">
              Visit the public issue explorer to browse other demonstration
              reports.
            </p>

            <Link
              to="/issues"
              className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-sky-900 transition hover:bg-sky-50"
            >
              Browse public reports
              <ArrowLeft className="rotate-180" size={16} />
            </Link>
          </section>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <Circle size={17} className="mt-0.5 shrink-0 text-slate-400" />
            <p className="text-xs leading-5 text-slate-500">
              Updates, attachments, comments, and notifications will require
              backend support in a future part.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

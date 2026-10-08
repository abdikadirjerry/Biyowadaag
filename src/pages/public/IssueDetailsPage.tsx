import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Droplets,
  FileText,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

type IssueStatus = "Submitted" | "Under Review" | "In Progress" | "Resolved";

type Issue = {
  id: string;
  title: string;
  description: string;
  category: string;
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
      "Residents have reported an interruption to the regular water supply in their neighborhood. The report needs to be reviewed to understand the affected area and determine the appropriate response.",
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
      "Water is leaking from a pipe near a residential road and may be affecting nearby access. The issue has been marked as in progress in this demonstration.",
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
      "Residents have raised concerns about the appearance and quality of their supplied water. The concern has been submitted for an initial review.",
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
      "Damage to water infrastructure has been reported and may require inspection. Further assessment is needed to determine the appropriate maintenance work.",
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
      "A previously reported water supply problem has been marked as resolved in this demonstration. The record represents an example of a completed issue.",
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
      "A leak has been reported near a public water collection point and may need maintenance. The report is awaiting its initial review.",
    category: "Leakage",
    status: "Submitted",
    location: "Hargeisa, Somaliland",
    reportedAt: "2026-09-27",
    urgency: "Medium",
  },
];

const statusOrder: IssueStatus[] = [
  "Submitted",
  "Under Review",
  "In Progress",
  "Resolved",
];

const statusDescriptions: Record<IssueStatus, string> = {
  Submitted: "The report has been submitted and is awaiting review.",
  "Under Review": "The report is being reviewed and assessed.",
  "In Progress": "Action has started to address the reported issue.",
  Resolved: "The report has been marked as resolved.",
};

const statusStyles: Record<IssueStatus, string> = {
  Submitted: "bg-blue-50 text-blue-700 ring-blue-200",
  "Under Review": "bg-amber-50 text-amber-800 ring-amber-200",
  "In Progress": "bg-violet-50 text-violet-700 ring-violet-200",
  Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const urgencyStyles: Record<Issue["urgency"], string> = {
  Low: "bg-slate-100 text-slate-700",
  Medium: "bg-orange-50 text-orange-700",
  High: "bg-rose-50 text-rose-700",
};

const statusIcons = {
  Submitted: FileText,
  "Under Review": Clock3,
  "In Progress": Wrench,
  Resolved: CheckCircle2,
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function IssueDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const issue = demoIssues.find((item) => item.id === id);

  if (!issue) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-5 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
            <FileText className="h-8 w-8" />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-slate-950">
            Report not found
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            We couldn't find a water issue with that ID. It may not exist in the
            current demonstration data.
          </p>

          <Link
            to="/issues"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all reports
          </Link>
        </div>
      </main>
    );
  }

  const currentStatusIndex = statusOrder.indexOf(issue.status);
  const StatusIcon = statusIcons[issue.status];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
          <Link
            to="/issues"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All water reports
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-sky-200 ring-1 ring-white/15">
              {issue.category}
            </span>

            <span
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${urgencyStyles[issue.urgency]}`}
            >
              {issue.urgency} priority
            </span>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-slate-400">
                Report ID: {issue.id}
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {issue.title}
              </h1>

              <p className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 shrink-0 text-sky-400" />
                {issue.location}
              </p>
            </div>

            <span
              className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ring-1 ring-inset ${statusStyles[issue.status]}`}
            >
              <StatusIcon className="h-4 w-4" />
              {issue.status}
            </span>
          </div>
        </div>
      </section>

      {/* Details and timeline */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)] lg:px-10">
        <div className="space-y-6">
          {/* Description */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-50 p-3 text-sky-700">
                <FileText className="h-5 w-5" />
              </div>

              <h2 className="text-xl font-bold text-slate-950">
                Report description
              </h2>
            </div>

            <p className="mt-6 leading-8 text-slate-600">{issue.description}</p>

            <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                <div>
                  <h3 className="font-semibold text-amber-950">
                    Demonstration record
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-amber-900">
                    This is sample project data, not a verified incident or a
                    live service update. No real response activity is being
                    reported here.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Timeline */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-50 p-3 text-violet-700">
                <Clock3 className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  Report progress
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Status workflow for this demonstration
                </p>
              </div>
            </div>

            <div className="mt-8">
              {statusOrder.map((step, index) => {
                const StepIcon = statusIcons[step];
                const isComplete = index <= currentStatusIndex;
                const isCurrent = index === currentStatusIndex;
                const isLast = index === statusOrder.length - 1;

                return (
                  <div
                    key={step}
                    className="relative flex gap-4 pb-8 last:pb-0"
                  >
                    {!isLast && (
                      <div
                        className={`absolute bottom-0 left-5 top-10 w-0.5 ${
                          index < currentStatusIndex
                            ? "bg-sky-500"
                            : "bg-slate-200"
                        }`}
                      />
                    )}

                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-white ${
                        isComplete
                          ? "bg-sky-600 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <StepIcon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={`font-semibold ${
                            isComplete ? "text-slate-900" : "text-slate-400"
                          }`}
                        >
                          {step}
                        </h3>

                        {isCurrent && (
                          <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
                            Current status
                          </span>
                        )}
                      </div>

                      <p
                        className={`mt-2 text-sm leading-6 ${
                          isComplete ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        {statusDescriptions[step]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 border-t border-slate-100 pt-5 text-xs leading-5 text-slate-400">
              The timeline represents workflow stages, not verified timestamps
              for each stage. Live status history will be connected later.
            </p>
          </article>
        </div>

        {/* Report information */}
        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">
              Report information
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Reported on</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {formatDate(issue.reportedAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {issue.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
                  <Droplets className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Category</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {issue.category}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Priority</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {issue.urgency}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm">
              <Droplets className="h-5 w-5" />
            </div>

            <h2 className="mt-4 text-lg font-bold text-slate-950">
              See another report?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Return to the public report list to explore other sample water
              issues.
            </p>

            <Link
              to="/issues"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Browse all reports
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default IssueDetailsPage;

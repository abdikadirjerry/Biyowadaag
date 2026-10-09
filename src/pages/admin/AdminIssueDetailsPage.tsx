import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Droplets,
  FileText,
  MapPin,
  MessageSquare,
  ShieldAlert,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

type ReportStatus =
  | "Submitted"
  | "Under Review"
  | "In Progress"
  | "Resolved"
  | "Rejected";

type Priority = "Low" | "Medium" | "High";

type Report = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: ReportStatus;
  priority: Priority;
  location: string;
  date: string;
  reporter: string;
  affectedPeople: number;
  reference: string;
};

const demoReports: Report[] = [
  {
    id: "water-001",
    title: "Water supply interruption",
    description:
      "Residents have reported that water has not been reaching several households in the area. The interruption is affecting daily household activities, and residents need an update on when the supply may return.",
    category: "Water Supply",
    status: "Under Review",
    priority: "High",
    location: "Hargeisa, Somaliland",
    date: "2026-10-05",
    reporter: "Demo Citizen",
    affectedPeople: 120,
    reference: "BIYO-2026-001",
  },
  {
    id: "water-002",
    title: "Water pipe leakage",
    description:
      "A leaking pipe is causing water to collect near a residential street. The issue may waste clean water and could make the surrounding area difficult to use.",
    category: "Leakage",
    status: "In Progress",
    priority: "High",
    location: "Hargeisa, Somaliland",
    date: "2026-10-04",
    reporter: "Demo Citizen",
    affectedPeople: 45,
    reference: "BIYO-2026-002",
  },
  {
    id: "water-003",
    title: "Concern about water quality",
    description:
      "Residents have raised concerns about the appearance and quality of water supplied in their area. The water quality needs to be assessed by the responsible team.",
    category: "Water Quality",
    status: "Submitted",
    priority: "Medium",
    location: "Hargeisa, Somaliland",
    date: "2026-10-03",
    reporter: "Demo Citizen",
    affectedPeople: 80,
    reference: "BIYO-2026-003",
  },
  {
    id: "water-004",
    title: "Damaged water infrastructure",
    description:
      "Part of the local water infrastructure appears damaged and may require inspection and repair by the responsible maintenance team.",
    category: "Infrastructure",
    status: "Under Review",
    priority: "Medium",
    location: "Hargeisa, Somaliland",
    date: "2026-10-02",
    reporter: "Demo Citizen",
    affectedPeople: 60,
    reference: "BIYO-2026-004",
  },
  {
    id: "water-005",
    title: "Community water supply restored",
    description:
      "This demonstration report represents a water supply issue that has been marked as resolved after the reported service interruption.",
    category: "Water Supply",
    status: "Resolved",
    priority: "Low",
    location: "Hargeisa, Somaliland",
    date: "2026-09-29",
    reporter: "Demo Citizen",
    affectedPeople: 35,
    reference: "BIYO-2026-005",
  },
  {
    id: "water-006",
    title: "Leak near a public water point",
    description:
      "Water has been observed leaking near a public water point. The maintenance team may need to inspect the area to identify the source and prevent further water loss.",
    category: "Leakage",
    status: "Submitted",
    priority: "Medium",
    location: "Hargeisa, Somaliland",
    date: "2026-09-27",
    reporter: "Demo Citizen",
    affectedPeople: 25,
    reference: "BIYO-2026-006",
  },
];

const statusOptions: ReportStatus[] = [
  "Submitted",
  "Under Review",
  "In Progress",
  "Resolved",
  "Rejected",
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

const workflow: ReportStatus[] = [
  "Submitted",
  "Under Review",
  "In Progress",
  "Resolved",
];

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 rounded-lg bg-slate-100 p-2 text-slate-600">
        <Icon size={17} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-semibold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function AdminIssueDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const report = demoReports.find((item) => item.id === id);

  const [selectedStatus, setSelectedStatus] = useState<ReportStatus>(
    report?.status ?? "Submitted",
  );
  const [currentStatus, setCurrentStatus] = useState<ReportStatus>(
    report?.status ?? "Submitted",
  );
  const [feedback, setFeedback] = useState("");

  if (!report) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          <FileText size={26} />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-slate-900">
          Report not found
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          This report ID does not match any available demonstration report.
        </p>
        <Link
          to="/admin/issues"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          <ArrowLeft size={16} />
          Back to issue queue
        </Link>
      </div>
    );
  }

  const timelineIndex = workflow.indexOf(currentStatus);

  function handleStatusUpdate() {
    setCurrentStatus(selectedStatus);
    setFeedback(
      `Status updated to "${selectedStatus}" in this demo session. It has not been saved to a database.`,
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <Link
        to="/admin/issues"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
      >
        <ArrowLeft size={17} />
        Back to issue queue
      </Link>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
              {report.reference}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[currentStatus]}`}
            >
              {currentStatus}
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {report.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Report ID: {report.id} · Submitted {formatDate(report.date)}
          </p>
        </div>

        <span
          className={`inline-flex w-fit items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${priorityStyles[report.priority]}`}
        >
          <ShieldAlert size={16} />
          {report.priority} priority
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Report description</h2>
                <p className="text-sm text-slate-500">
                  Details supplied in this demonstration record
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-700">
              {report.description}
            </p>

            <div className="mt-6 grid gap-5 border-t border-slate-100 pt-5 sm:grid-cols-2">
              <DetailItem
                icon={Droplets}
                label="Issue category"
                value={report.category}
              />
              <DetailItem
                icon={MapPin}
                label="Reported location"
                value={report.location}
              />
              <DetailItem
                icon={Clock3}
                label="Submission date"
                value={formatDate(report.date)}
              />
              <DetailItem
                icon={Users}
                label="People potentially affected"
                value={`${report.affectedPeople} (demo estimate)`}
              />
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Status timeline</h2>
                <p className="text-sm text-slate-500">
                  Illustrative workflow, not a verified event history
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {workflow.map((status, index) => {
                const completed =
                  currentStatus !== "Rejected" && index <= timelineIndex;
                const isCurrent = status === currentStatus;

                return (
                  <div key={status} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          completed
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 size={17} />
                        ) : (
                          <span className="text-xs font-bold">{index + 1}</span>
                        )}
                      </div>
                      {index < workflow.length - 1 && (
                        <div
                          className={`mt-1 min-h-5 w-0.5 flex-1 ${
                            completed && index < timelineIndex
                              ? "bg-emerald-300"
                              : "bg-slate-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="font-semibold text-slate-800">{status}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {isCurrent
                          ? "Current status in this demo session"
                          : completed
                            ? "Previous workflow stage (illustrative)"
                            : "Pending workflow stage"}
                      </p>
                    </div>
                  </div>
                );
              })}

              {currentStatus === "Rejected" && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                    <ShieldAlert size={17} />
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Rejected</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Current status in this demo session
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Manage report status
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Choose the latest status after reviewing the issue.
            </p>

            <label
              htmlFor="report-status"
              className="mt-5 block text-sm font-semibold text-slate-700"
            >
              New status
            </label>
            <select
              id="report-status"
              value={selectedStatus}
              onChange={(event) => {
                setSelectedStatus(event.target.value as ReportStatus);
                setFeedback("");
              }}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={handleStatusUpdate}
              disabled={selectedStatus === currentStatus}
              className="mt-4 w-full rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Update status
            </button>

            {feedback && (
              <p
                role="status"
                aria-live="polite"
                className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm leading-6 text-emerald-800"
              >
                {feedback}
              </p>
            )}

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Demo only: changes are held in page state and are not saved to a
              database or shared with citizens.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Reporter information</h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <UserRound size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {report.reporter}
                </p>
                <p className="text-xs text-slate-500">
                  Demo account · Contact details unavailable
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-600">
              <MessageSquare size={17} className="mt-1 shrink-0" />
              <p>
                Citizen messaging and notifications can be connected when the
                backend is implemented.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <div className="flex items-center gap-2 text-blue-800">
              <Wrench size={18} />
              <h2 className="font-bold">Administrator reminder</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-blue-900">
              Review the report details before changing its status. Real status
              history, authorization, and database persistence will be added
              with the backend.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

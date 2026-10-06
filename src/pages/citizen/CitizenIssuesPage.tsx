import EmptyState from "../../components/ui/EmptyState";

function CitizenIssuesPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-cyan-600">Citizen Portal</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
          My Reports
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Track the water issues you have reported.
        </p>
      </div>

      <EmptyState
        title="No reports yet"
        description="Your submitted water issue reports will appear here."
      />
    </div>
  );
}

export default CitizenIssuesPage;

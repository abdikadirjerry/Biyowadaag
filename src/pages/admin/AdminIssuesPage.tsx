import EmptyState from "../../components/ui/EmptyState";

function AdminIssuesPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-cyan-600">Administration</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
          Water Issues
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Review, filter, prioritize, and manage reported water issues.
        </p>
      </div>

      <EmptyState
        title="No issues available"
        description="Issue management functionality will be implemented in Part 12."
      />
    </div>
  );
}

export default AdminIssuesPage;

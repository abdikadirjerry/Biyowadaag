import Card from "../../components/ui/Card";

function AdminOverviewPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-cyan-600">Administration</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Monitor water issues, community impact, and response activity from one
          workspace.
        </p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-slate-900">
          Administration foundation
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Admin dashboard functionality will be implemented in Part 11.
        </p>
      </Card>
    </div>
  );
}

export default AdminOverviewPage;

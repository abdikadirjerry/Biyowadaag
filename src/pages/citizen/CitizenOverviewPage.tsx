import Card from "../../components/ui/Card";

function CitizenOverviewPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-cyan-600">Citizen Portal</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Your water issue reports and activity will appear here.
        </p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard foundation
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Citizen dashboard functionality will be implemented in Part 7.
        </p>
      </Card>
    </div>
  );
}

export default CitizenOverviewPage;

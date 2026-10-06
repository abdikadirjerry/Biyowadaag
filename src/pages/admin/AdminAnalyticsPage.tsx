import Card from "../../components/ui/Card";

function AdminAnalyticsPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-cyan-600">Administration</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
          Analytics
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Understand water issues through statistics and data visualization.
        </p>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-slate-900">
          Analytics foundation
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Statistics and charts will be implemented in Part 13.
        </p>
      </Card>
    </div>
  );
}

export default AdminAnalyticsPage;

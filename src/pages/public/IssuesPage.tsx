import EmptyState from "../../components/ui/EmptyState";

function IssuesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold text-cyan-600">Community issues</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Reported water issues
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Explore water-related issues reported by the community. Issue data
          will be connected in a later development part.
        </p>
      </div>

      <EmptyState
        title="No public issues available yet"
        description="Community issue data will appear here once the issue data layer is implemented."
      />
    </section>
  );
}

export default IssuesPage;

import Card from "../../components/ui/Card";

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-cyan-600">About Biyo</p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          A structured way to understand water issues.
        </h1>

        <p className="mt-5 text-base leading-7 text-slate-600">
          Biyo is designed around real-world water accessibility problems. The
          platform gives citizens a way to report issues while providing
          organizations with tools to monitor, prioritize, and manage those
          reports.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-slate-900">For citizens</h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Report problems, provide locations and useful details, and follow
            the progress of submitted reports.
          </p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-slate-900">
            For organizations
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Review reports, prioritize issues, monitor affected populations, and
            understand geographic patterns.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default AboutPage;

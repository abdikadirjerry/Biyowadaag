import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-700">
              Water issue reporting platform
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Report water problems.
              <span className="block text-cyan-600">
                Help communities respond.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Biyo connects communities and organizations through a structured
              platform for reporting, tracking, and managing water-related
              issues.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/register">
                <Button size="lg" fullWidth>
                  Get started
                </Button>
              </Link>

              <Link to="/issues">
                <Button variant="outline" size="lg" fullWidth>
                  Explore issues
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <p className="text-sm font-semibold text-cyan-600">01</p>

            <h2 className="mt-3 text-lg font-semibold text-slate-900">
              Report
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Citizens can provide useful information about water accessibility
              problems in their communities.
            </p>
          </Card>

          <Card>
            <p className="text-sm font-semibold text-cyan-600">02</p>

            <h2 className="mt-3 text-lg font-semibold text-slate-900">Track</h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Reports can be monitored through clear statuses as organizations
              review and respond to them.
            </p>
          </Card>

          <Card>
            <p className="text-sm font-semibold text-cyan-600">03</p>

            <h2 className="mt-3 text-lg font-semibold text-slate-900">
              Respond
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Organizations can prioritize issues and use data to understand
              community needs.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

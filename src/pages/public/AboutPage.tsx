import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Eye,
  Handshake,
  MapPin,
  ShieldCheck,
  Users,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Eye,
    title: "Visibility",
    description:
      "Make water challenges easier to report, understand, and follow.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Help communities and water service teams communicate through a shared process.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "Support clearer reporting and make the progress of issues easier to track.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Citizens report",
    description:
      "Community members describe a water issue and provide useful location details.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Teams review",
    description:
      "Responsible teams can review reports, assess urgency, and organize their response.",
    icon: Users,
  },
  {
    number: "03",
    title: "Progress is tracked",
    description:
      "Reports can move through review, action, and resolution so their status is easier to follow.",
    icon: CheckCircle2,
  },
];

function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Page hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900" />
        <div className="absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-sky-200">
              <Droplets className="h-4 w-4" />
              About Biyo
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Better communication for{" "}
              <span className="text-sky-400">better water services.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Biyo is a water issue reporting and management platform designed
              to help communities report problems and help service teams
              organize, review, and track those reports.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-400"
              >
                Join Biyo
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/issues"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore reports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
            <div className="inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">
              <Waves className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Our mission
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              To provide a clear and accessible way for people to report water
              challenges, share relevant information, and follow the handling of
              their reports.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
            <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
              <Eye className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Our vision
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              A future where communities and water service teams can work
              together through more transparent reporting and better-organized
              responses to water-related problems.
            </p>
          </article>
        </div>
      </section>

      {/* Problems Biyo addresses */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Why Biyo?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Water problems need a clearer path to action.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              When water problems are difficult to report or follow, important
              details can be harder to organize. Biyo is designed to bring
              reporting and issue management into one workflow.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From supply interruptions and leaks to water quality concerns, the
              platform provides a structured approach to documenting problems
              and tracking their progress.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "A central place to submit water issue reports",
              "Location details to help identify affected areas",
              "Issue categories and urgency information",
              "A structured workflow for reviewing and updating reports",
              "Status tracking throughout the reporting process",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Our principles
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built around community needs
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These principles guide how Biyo approaches water issue reporting
              and management.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{value.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              The process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              How Biyo brings reporting together
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A simple reporting workflow helps organize the information needed
              to manage water issues.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-sky-700">
                      STEP {step.number}
                    </span>

                    <div className="rounded-xl bg-sky-50 p-3 text-sky-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl bg-sky-600 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Droplets className="h-8 w-8" />
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Help make water challenges visible.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-sky-50">
            Explore existing reports or create an account to get started with
            Biyo.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;

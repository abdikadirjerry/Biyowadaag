import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Droplets,
  FileText,
  MapPin,
  ShieldCheck,
  Users,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "Report a water issue",
    description:
      "Submit reports about water shortages, leaks, quality concerns, and damaged infrastructure.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: MapPin,
    title: "Share the location",
    description:
      "Help response teams identify where a problem is happening so they can investigate more effectively.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: CheckCircle2,
    title: "Track your report",
    description:
      "Follow your report as it moves through review, action, and resolution.",
    color: "bg-amber-50 text-amber-700",
  },
];

const steps = [
  {
    number: "01",
    title: "Report the problem",
    description:
      "Tell us what happened, where it happened, and how urgently it needs attention.",
  },
  {
    number: "02",
    title: "The team reviews it",
    description:
      "Your report can be reviewed and prioritized by the responsible water service team.",
  },
  {
    number: "03",
    title: "Follow the progress",
    description:
      "Check the status of your report and stay informed as work progresses.",
  },
];

function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />
        <div className="absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm">
              <Droplets className="h-4 w-4" />
              Better water services start with you
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Every water issue deserves{" "}
              <span className="text-sky-600">to be heard.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Biyo connects communities with water service teams. Report water
              problems, share where they happen, and follow progress toward a
              solution.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                Report a water issue
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/issues"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50"
              >
                Explore public reports
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Community-focused
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Status tracking
              </span>
            </div>
          </div>

          {/* Illustrative water-report card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-sky-200/60 to-cyan-100/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-sky-900/10">
              <div className="bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500 p-7 text-white sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-sky-100">
                      A better way to report
                    </p>
                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                      Water matters.
                    </h2>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-sky-50">
                      Make local water challenges visible to the people who can
                      help.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/15 p-3 ring-1 ring-white/20">
                    <Waves className="h-8 w-8" />
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-white/30">
                    <div className="h-2 w-2/3 rounded-full bg-white" />
                  </div>
                  <span className="text-xs font-medium text-sky-50">
                    From report to resolution
                  </span>
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-sky-50 p-3 text-sky-700">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900">
                      Water supply interruption
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Report a service disruption in your neighborhood.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900">
                      Add the affected location
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Give the response team useful location details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-violet-50 p-3 text-violet-700">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900">
                      Help your community
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Make it easier for water issues to be seen and managed.
                    </p>
                  </div>
                </div>

                <Link
                  to="/issues"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 font-semibold text-white transition hover:bg-slate-800"
                >
                  Explore water reports
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="text-center text-xs text-slate-400">
                  Illustrative example — not a live report.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
              <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Clearer communication
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  One place for water concerns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-10">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-sky-50 p-3 text-sky-700">
              <Droplets className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Make problems visible
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Give communities a clear way to report water concerns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Connect communities
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Bring residents and service teams into one workflow.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                Support accountability
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Make it easier to follow a report from submission to outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              What Biyo offers
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From water concern to clearer action
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Simple tools can help communities communicate problems and help
              service teams organize their response.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div
                    className={`inline-flex rounded-2xl p-3 ${feature.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-700 transition group-hover:gap-3">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Three steps toward a better response
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                Biyo is designed to make reporting straightforward and make the
                progress of water concerns easier to follow.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-700 transition hover:text-sky-800"
              >
                Learn about Biyo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-slate-200 p-5 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 font-bold text-sky-700">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Be part of the solution
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Have a water issue to report?
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Help bring attention to water challenges in your community.
                Start by exploring reports or creating an account.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-400"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/issues"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                View reports
                <ArrowDown className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

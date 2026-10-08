import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Droplets,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "The sign-in interface is ready, but authentication has not been connected yet.",
    );
  }

  return (
    <main className="bg-slate-50 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-2">
        <section className="relative isolate hidden overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900" />
          <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

          <Link to="/" className="inline-flex items-center gap-3">
            <span className="rounded-xl bg-sky-500 p-2.5">
              <Droplets className="h-6 w-6" />
            </span>
            <span className="text-2xl font-bold">Biyo</span>
          </Link>

          <div className="py-12">
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-sky-200">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Your community matters
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight">
              Every report is a step toward better water services.
            </h1>
            <p className="mt-5 leading-7 text-slate-300">
              Sign in to access your account and keep track of your water issue
              reports.
            </p>
          </div>

          <p className="text-sm text-slate-400">
            Water concerns deserve to be heard.
          </p>
        </section>

        <section className="p-6 sm:p-10 lg:p-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 lg:hidden"
          >
            <Droplets className="h-5 w-5" />
            Biyo
          </Link>

          <div className="mt-6 lg:mt-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
              Welcome back
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Sign in to Biyo
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your account details to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="login-password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-sky-700 hover:text-sky-900"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-12 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {message && (
              <p
                role="status"
                className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 font-semibold text-white transition hover:bg-sky-700"
            >
              Sign in
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-sky-700 hover:text-sky-900"
            >
              Create one
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            Frontend demonstration only. Your credentials are not sent to a
            server.
          </p>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;

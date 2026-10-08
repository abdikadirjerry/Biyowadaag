import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Your email has been entered. Password-reset emails will be available after the backend is connected.",
    );
  }

  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-5 py-12 sm:px-8 sm:py-16">
      <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
        >
          <Droplets className="h-5 w-5" />
          Biyo
        </Link>

        <div className="mt-9 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
          <Mail className="h-7 w-7" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-sky-700">
          Account recovery
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Forgot your password?
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Enter the email address associated with your account. Password
          recovery will be connected when the authentication backend is ready.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="recovery-email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email address
            </label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="recovery-email"
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

          {message && (
            <div
              role="status"
              className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-900"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              {message}
            </div>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 font-semibold text-white transition hover:bg-sky-700"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <Link
          to="/login"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-sky-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>

        <p className="mt-7 text-xs leading-5 text-slate-400">
          This is a frontend-only screen. No email is sent and no password is
          changed.
        </p>
      </section>
    </main>
  );
}

export default ForgotPasswordPage;

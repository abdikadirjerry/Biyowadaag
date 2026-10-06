import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";

function ForgotPasswordPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center px-4 py-12 sm:px-6">
      <Card className="w-full">
        <div>
          <p className="text-sm font-semibold text-cyan-600">
            Account recovery
          </p>

          <h1 className="mt-2 text-2xl font-bold text-slate-950">
            Reset your password
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Password recovery functionality will be implemented in Part 5.
          </p>
        </div>

        <div className="mt-6 space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            name="email"
          />

          <Button fullWidth>Send reset link</Button>

          <p className="text-center text-sm text-slate-500">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-semibold text-cyan-700 hover:text-cyan-800"
            >
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </section>
  );
}

export default ForgotPasswordPage;

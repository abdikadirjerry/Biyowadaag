import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <Card className="w-full max-w-md text-center">
        <p className="text-6xl font-bold tracking-tight text-cyan-600">404</p>

        <h1 className="mt-4 text-2xl font-bold text-slate-950">
          Page not found
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-6">
          <Link to="/">
            <Button>Return home</Button>
          </Link>
        </div>
      </Card>
    </main>
  );
}

export default NotFoundPage;

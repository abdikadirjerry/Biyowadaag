import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function IssueDetailsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-6">
        <Link to="/issues">
          <Button variant="ghost" size="sm">
            ← Back to issues
          </Button>
        </Link>
      </div>

      <Card>
        <p className="text-sm font-semibold text-cyan-600">Issue details</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
          Water issue details
        </h1>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          The detailed issue data, status history, location, and affected
          population will be implemented in a later part.
        </p>
      </Card>
    </section>
  );
}

export default IssueDetailsPage;

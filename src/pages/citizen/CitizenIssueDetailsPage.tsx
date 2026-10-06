import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function CitizenIssueDetailsPage() {
  return (
    <div>
      <div className="mb-6">
        <Link to="/dashboard/reports">
          <Button variant="ghost" size="sm">
            ← Back to my reports
          </Button>
        </Link>
      </div>

      <Card>
        <p className="text-sm font-semibold text-cyan-600">My report</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950">
          Report details
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Report tracking, status history, location, and other details will be
          implemented in Part 9.
        </p>
      </Card>
    </div>
  );
}

export default CitizenIssueDetailsPage;

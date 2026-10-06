import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function AdminIssueDetailsPage() {
  return (
    <div>
      <div className="mb-6">
        <Link to="/admin/issues">
          <Button variant="ghost" size="sm">
            ← Back to issues
          </Button>
        </Link>
      </div>

      <Card>
        <p className="text-sm font-semibold text-cyan-600">Administration</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-950">
          Issue details
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Administrative issue management will be implemented in Part 12.
        </p>
      </Card>
    </div>
  );
}

export default AdminIssueDetailsPage;

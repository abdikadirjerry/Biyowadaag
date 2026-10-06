import Alert from "./components/ui/Alert";
import Badge from "./components/ui/Badge";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import EmptyState from "./components/ui/EmptyState";
import ErrorState from "./components/ui/ErrorState";
import Input from "./components/ui/Input";
import LoadingState from "./components/ui/LoadingState";
import Select from "./components/ui/Select";
import Textarea from "./components/ui/Textarea";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10">
          <Badge variant="info">Biyo Design System</Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Reusable UI Foundation
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Biyo's reusable interface components provide a consistent foundation
            for reporting water issues, tracking reports, and managing community
            data.
          </p>
        </header>

        <div className="space-y-8">
          <Card>
            <div className="border-b border-slate-200 pb-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Buttons & Badges
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Consistent actions and status indicators across the platform.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-5">
              <Button>Primary Action</Button>

              <Button variant="secondary">Secondary</Button>

              <Button variant="outline">Outline</Button>

              <Button variant="ghost">Ghost</Button>

              <Button variant="danger">Delete</Button>

              <Button isLoading>Saving</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Reported</Badge>
              <Badge variant="info">Under Review</Badge>
              <Badge variant="warning">In Progress</Badge>
              <Badge variant="success">Resolved</Badge>
              <Badge variant="danger">Critical</Badge>
            </div>
          </Card>

          <Card>
            <div className="border-b border-slate-200 pb-5">
              <h2 className="text-lg font-semibold text-slate-900">
                Form Controls
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Accessible form components with labels, hints, and validation
                states.
              </p>
            </div>

            <div className="grid gap-5 pt-5 md:grid-cols-2">
              <Input
                label="Issue title"
                name="issueTitle"
                placeholder="e.g. Water supply interruption"
                hint="Use a short description of the problem."
              />

              <Input
                label="Location"
                name="location"
                placeholder="Enter the affected area"
              />

              <Select label="Issue category" name="category" defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                <option value="supply">Water supply</option>
                <option value="quality">Water quality</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="leak">Water leakage</option>
              </Select>

              <Input
                label="Affected people"
                name="affectedPeople"
                type="number"
                placeholder="e.g. 150"
              />

              <div className="md:col-span-2">
                <Textarea
                  label="Description"
                  name="description"
                  placeholder="Describe the water-related problem..."
                  hint="Include useful details that can help responders understand the issue."
                />
              </div>

              <Input
                label="Example validation"
                name="validationExample"
                defaultValue="Invalid value"
                error="Please provide a valid value."
              />
            </div>
          </Card>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Feedback States
            </h2>

            <div className="grid gap-4 lg:grid-cols-2">
              <Alert variant="info" title="Information">
                Water issue reports are reviewed by the responsible organization
                before their status changes.
              </Alert>

              <Alert variant="success" title="Report submitted">
                Your water issue has been successfully submitted for review.
              </Alert>

              <Alert variant="warning" title="Action required">
                Please provide a location before submitting this report.
              </Alert>

              <Alert variant="error" title="Submission failed">
                We couldn't submit your report. Please try again.
              </Alert>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <LoadingState message="Loading water issues..." />

            <EmptyState
              title="No water issues reported yet"
              description="When community members report water problems, they will appear here."
              action={<Button size="sm">Report an issue</Button>}
            />
          </div>

          <ErrorState
            message="The water issue data could not be loaded."
            onRetry={() => window.location.reload()}
          />
        </div>
      </div>
    </main>
  );
}

export default App;

import Button from "./Button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this information. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 p-6 text-center"
      role="alert"
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-red-100 text-red-700">
        <span className="text-lg font-bold" aria-hidden="true">
          !
        </span>
      </div>

      <h2 className="mt-4 text-base font-semibold text-red-900">{title}</h2>

      <p className="mt-1 max-w-md text-sm leading-6 text-red-700">{message}</p>

      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          className="mt-5 border-red-300 text-red-700 hover:bg-red-100"
          onClick={onRetry}
        >
          Try again
        </Button>
      )}
    </div>
  );
}

export default ErrorState;

interface LoadingStateProps {
  message?: string;
}

function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div
      className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6"
      role="status"
      aria-live="polite"
    >
      <span
        className="size-6 animate-spin rounded-full border-2 border-cyan-600 border-r-transparent"
        aria-hidden="true"
      />

      <p className="text-sm text-slate-600">{message}</p>
    </div>
  );
}

export default LoadingState;

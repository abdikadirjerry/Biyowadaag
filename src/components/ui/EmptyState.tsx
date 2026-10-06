import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <span className="text-lg" aria-hidden="true">
          —
        </span>
      </div>

      <h2 className="text-base font-semibold text-slate-900">{title}</h2>

      <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export default EmptyState;

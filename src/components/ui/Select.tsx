import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
}

function Select({
  label,
  error,
  hint,
  id,
  className = "",
  children,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <select
        id={selectId}
        className={[
          "min-h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900",
          "outline-none transition",
          "focus:ring-2 focus:ring-offset-0",
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
            : "border-slate-300 focus:border-cyan-500 focus:ring-cyan-100",
          "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
        }
        {...props}
      >
        {children}
      </select>

      {error && (
        <p
          id={`${selectId}-error`}
          className="mt-1.5 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}

      {!error && hint && (
        <p id={`${selectId}-hint`} className="mt-1.5 text-sm text-slate-500">
          {hint}
        </p>
      )}
    </div>
  );
}

export default Select;

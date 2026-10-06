import type { ReactNode } from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  title?: string;
}

const variantClasses: Record<AlertVariant, string> = {
  info: "border-cyan-200 bg-cyan-50 text-cyan-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  error: "border-red-200 bg-red-50 text-red-900",
};

function Alert({ children, variant = "info", title }: AlertProps) {
  return (
    <div
      className={["rounded-lg border p-4", variantClasses[variant]].join(" ")}
      role={variant === "error" ? "alert" : "status"}
    >
      {title && <p className="mb-1 text-sm font-semibold">{title}</p>}

      <div className="text-sm leading-6">{children}</div>
    </div>
  );
}

export default Alert;

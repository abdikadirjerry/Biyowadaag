import type { ReactNode } from "react";

type BadgeVariant = "default" | "info" | "success" | "warning" | "danger";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-slate-100 text-slate-700",
  info: "bg-cyan-50 text-cyan-700",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
};

function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1",
        "text-xs font-semibold",
        variantClasses[variant],
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export default Badge;

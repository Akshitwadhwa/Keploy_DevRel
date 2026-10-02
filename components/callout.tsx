import { Info, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const styles = {
  info: "border-[oklch(0.72_0.07_175)] bg-[oklch(0.96_0.025_175)] text-[oklch(0.28_0.04_190)] dark:border-[oklch(0.48_0.06_175)] dark:bg-[oklch(0.27_0.035_185)] dark:text-[oklch(0.95_0.02_175)]",
  warning:
    "border-[oklch(0.78_0.1_75)] bg-[oklch(0.97_0.03_85)] text-[oklch(0.32_0.05_55)] dark:border-[oklch(0.58_0.09_75)] dark:bg-[oklch(0.3_0.04_70)] dark:text-[oklch(0.96_0.025_90)]",
} as const;

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof styles;
  title?: string;
  children: ReactNode;
}) {
  const Icon = type === "warning" ? TriangleAlert : Info;

  return (
    <aside className={cn("callout", styles[type])} data-type={type} role="note">
      <Icon className="callout-icon" aria-hidden />
      <div className="min-w-0">
        {title ? <p className="callout-title">{title}</p> : null}
        {children}
      </div>
    </aside>
  );
}

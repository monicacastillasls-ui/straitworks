import { ReactNode } from "react";

export default function BrowserFrame({
  children,
  label = "yoursite.com",
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-4 border-b border-white/5 bg-navy-950/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-fog-600/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-fog-600/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-fog-600/50" />
        </div>
        <div className="flex h-6 flex-1 max-w-[220px] items-center rounded-full bg-white/5 px-3">
          <span className="truncate text-[10px] tracking-wide text-fog-500">
            {label}
          </span>
        </div>
      </div>
      <div className="bg-navy-900">{children}</div>
    </div>
  );
}

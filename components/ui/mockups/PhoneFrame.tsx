import { ReactNode } from "react";

export default function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ${className}`}
      aria-hidden="true"
    >
      <div className="relative flex h-7 items-center justify-center bg-navy-950/60">
        <div className="h-3.5 w-20 rounded-full bg-ink" />
      </div>
      <div className="bg-navy-900">{children}</div>
    </div>
  );
}

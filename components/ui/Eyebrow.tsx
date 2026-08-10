export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-electric-light ${className}`}
    >
      <span className="h-px w-6 bg-electric-light" aria-hidden="true" />
      {children}
    </span>
  );
}

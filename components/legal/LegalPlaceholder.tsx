export default function LegalPlaceholder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded bg-electric/15 px-1.5 py-0.5 text-electric-light">
      {children}
    </span>
  );
}

// Small abstract building blocks used to compose interface mockups
// without relying on stock imagery or invented brand logos.

export function Bar({
  width = "100%",
  tone = "light",
  className = "",
}: {
  width?: string;
  tone?: "light" | "mid" | "dim" | "electric";
  className?: string;
}) {
  const tones: Record<string, string> = {
    light: "bg-white/85",
    mid: "bg-fog-300/50",
    dim: "bg-fog-500/30",
    electric: "bg-electric-light/80",
  };
  return (
    <span
      style={{ width }}
      className={`block h-2 rounded-full ${tones[tone]} ${className}`}
      aria-hidden="true"
    />
  );
}

export function Pill({
  width = "5rem",
  filled = false,
  className = "",
}: {
  width?: string;
  filled?: boolean;
  className?: string;
}) {
  return (
    <span
      style={{ width }}
      className={`block h-6 rounded-full ${
        filled ? "bg-electric" : "border border-fog-300/25"
      } ${className}`}
      aria-hidden="true"
    />
  );
}

export function ImageBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-navy-700 via-navy-800 to-ink ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(61,107,255,0.25),transparent_60%)]" />
      <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full border border-white/10" />
    </div>
  );
}

export function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full bg-fog-500/40 ${className}`}
      aria-hidden="true"
    />
  );
}

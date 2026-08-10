function Mark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-current ${className}`}
      aria-hidden="true"
    >
      <span className="absolute h-3.5 w-3.5 rotate-45 rounded-sm border border-current" />
    </span>
  );
}

const palette = ["#0B0F1C", "#3D6BFF", "#F6F7F9", "#9BA3B5"];

export default function BrandBoard() {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      aria-hidden="true"
    >
      {/* Logo lockup */}
      <div className="col-span-2 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-navy-900 p-8 sm:col-span-2">
        <Mark className="text-electric-light" />
        <span className="font-display text-xl tracking-[0.2em] text-white">
          NATURÉA
        </span>
        <span className="text-[10px] uppercase tracking-widest text-fog-500">
          Brand Mark
        </span>
      </div>

      {/* Palette */}
      <div className="col-span-2 flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-900 p-6 sm:col-span-2">
        <span className="text-[10px] uppercase tracking-widest text-fog-500">
          Palette
        </span>
        <div className="mt-4 flex gap-2">
          {palette.map((c) => (
            <span
              key={c}
              style={{ backgroundColor: c }}
              className="h-10 flex-1 rounded-md border border-white/10"
            />
          ))}
        </div>
      </div>

      {/* Business card */}
      <div className="col-span-2 rounded-2xl border border-white/10 bg-navy-900 p-6 sm:col-span-1">
        <span className="mb-4 block text-[10px] uppercase tracking-widest text-fog-500">
          Stationery
        </span>
        <div className="aspect-[1.6/1] rounded-lg bg-ink p-4 text-electric-light">
          <Mark className="h-6 w-6 text-[10px]" />
          <div className="mt-3 space-y-1.5">
            <span className="block h-1.5 w-3/4 rounded-full bg-white/70" />
            <span className="block h-1.5 w-1/2 rounded-full bg-fog-500/40" />
          </div>
        </div>
      </div>

      {/* Packaging */}
      <div className="col-span-1 rounded-2xl border border-white/10 bg-navy-900 p-6">
        <span className="mb-4 block text-[10px] uppercase tracking-widest text-fog-500">
          Packaging
        </span>
        <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-navy-700 to-ink">
          <Mark className="text-electric-light" />
        </div>
      </div>

      {/* Social grid */}
      <div className="col-span-2 rounded-2xl border border-white/10 bg-navy-900 p-6 sm:col-span-1">
        <span className="mb-4 block text-[10px] uppercase tracking-widest text-fog-500">
          Social Media
        </span>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-md bg-gradient-to-br from-navy-700 via-navy-800 to-ink"
            >
              <Mark className="h-6 w-6 text-[10px] text-electric-light" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

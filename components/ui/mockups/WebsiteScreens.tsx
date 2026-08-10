import { Bar, ImageBlock, Pill } from "./blocks";

export function WebDesktopScreen() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <Bar width="4.5rem" tone="light" />
        <div className="flex gap-4">
          <Bar width="2.5rem" tone="dim" />
          <Bar width="2.5rem" tone="dim" />
          <Bar width="2.5rem" tone="dim" />
        </div>
        <Pill width="4.5rem" filled />
      </div>

      <div className="grid grid-cols-5 gap-6 pt-4">
        <div className="col-span-3 flex flex-col justify-center gap-3">
          <Bar width="90%" tone="light" className="h-4" />
          <Bar width="70%" tone="light" className="h-4" />
          <div className="pt-2 space-y-2">
            <Bar width="95%" tone="dim" />
            <Bar width="80%" tone="dim" />
          </div>
          <Pill width="7rem" filled className="mt-3" />
        </div>
        <ImageBlock className="col-span-2 aspect-square" />
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="space-y-3 rounded-lg border border-white/5 p-4"
          >
            <div className="h-6 w-6 rounded-full bg-electric/70" />
            <Bar width="80%" tone="mid" />
            <Bar width="60%" tone="dim" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function WebMobileScreen() {
  return (
    <div className="space-y-5 p-4">
      <div className="flex items-center justify-between">
        <Bar width="3rem" tone="light" />
        <div className="flex flex-col gap-1">
          <span className="block h-0.5 w-4 bg-fog-400" />
          <span className="block h-0.5 w-4 bg-fog-400" />
          <span className="block h-0.5 w-4 bg-fog-400" />
        </div>
      </div>
      <ImageBlock className="h-28 w-full" />
      <div className="space-y-2">
        <Bar width="85%" tone="light" className="h-3.5" />
        <Bar width="60%" tone="light" className="h-3.5" />
      </div>
      <div className="space-y-1.5">
        <Bar width="100%" tone="dim" />
        <Bar width="90%" tone="dim" />
      </div>
      <Pill width="100%" filled />
      <div className="grid grid-cols-2 gap-3 pt-2">
        {[0, 1].map((i) => (
          <div key={i} className="space-y-2 rounded-lg border border-white/5 p-3">
            <div className="h-5 w-5 rounded-full bg-electric/70" />
            <Bar width="70%" tone="mid" />
          </div>
        ))}
      </div>
    </div>
  );
}

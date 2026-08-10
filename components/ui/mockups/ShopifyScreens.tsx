import { Bar, ImageBlock, Pill } from "./blocks";

function NavRow() {
  return (
    <div className="flex items-center justify-between px-6 pt-6">
      <Bar width="4rem" tone="light" />
      <div className="hidden gap-3 sm:flex">
        <Bar width="2rem" tone="dim" />
        <Bar width="2rem" tone="dim" />
        <Bar width="2rem" tone="dim" />
      </div>
      <div className="flex gap-2">
        <div className="h-5 w-5 rounded-full border border-fog-400/40" />
        <div className="h-5 w-5 rounded-full border border-fog-400/40" />
      </div>
    </div>
  );
}

export function ShopifyHomeScreen() {
  return (
    <div className="space-y-6 pb-6">
      <NavRow />
      <div className="mx-6 space-y-3 rounded-xl border border-white/5 p-6">
        <Bar width="60%" tone="light" className="h-4" />
        <Bar width="40%" tone="dim" />
        <Pill width="6rem" filled className="mt-2" />
      </div>
      <div className="grid grid-cols-4 gap-3 px-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <ImageBlock className="aspect-square" />
            <Bar width="80%" tone="mid" />
            <Bar width="40%" tone="electric" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShopifyCollectionScreen() {
  return (
    <div className="space-y-6 pb-6">
      <NavRow />
      <div className="flex items-center justify-between px-6">
        <Bar width="30%" tone="light" className="h-3.5" />
        <Pill width="4.5rem" />
      </div>
      <div className="grid grid-cols-3 gap-4 px-6 sm:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <ImageBlock className="aspect-square" />
            <Bar width="75%" tone="mid" />
            <Bar width="35%" tone="electric" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShopifyProductScreen() {
  return (
    <div className="space-y-6 pb-6">
      <NavRow />
      <div className="grid grid-cols-2 gap-6 px-6">
        <ImageBlock className="aspect-[4/5]" />
        <div className="flex flex-col justify-center gap-3">
          <Bar width="80%" tone="light" className="h-4" />
          <Bar width="30%" tone="electric" className="h-3.5" />
          <div className="flex gap-2 pt-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-7 w-7 rounded-full border border-fog-300/25"
              />
            ))}
          </div>
          <Pill width="100%" filled className="mt-3" />
          <div className="space-y-1.5 pt-2">
            <Bar width="100%" tone="dim" />
            <Bar width="85%" tone="dim" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShopifyCartScreen() {
  return (
    <div className="space-y-6 pb-6">
      <NavRow />
      <div className="space-y-3 px-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg border border-white/5 p-3"
          >
            <ImageBlock className="h-14 w-14 shrink-0" />
            <div className="flex-1 space-y-2">
              <Bar width="70%" tone="mid" />
              <Bar width="35%" tone="dim" />
            </div>
            <Bar width="2.5rem" tone="electric" />
          </div>
        ))}
      </div>
      <div className="mx-6 space-y-3 rounded-lg border border-white/5 p-4">
        <div className="flex items-center justify-between">
          <Bar width="30%" tone="dim" />
          <Bar width="20%" tone="light" />
        </div>
        <Pill width="100%" filled />
      </div>
    </div>
  );
}

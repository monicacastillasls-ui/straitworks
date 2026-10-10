"use client";

import type { TourId } from "@/content/business";
import { selectTour } from "@/lib/tourSelection";

export default function BookTourButton({ id, label, primary }: { id: TourId; label: string; primary?: boolean }) {
  return (
    <a
      href="#booking"
      onClick={(e) => {
        e.preventDefault();
        selectTour(id);
      }}
      className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
        primary
          ? "bg-terracotta text-white hover:bg-terracotta-dark"
          : "border border-sea-900/20 text-sea-900 hover:border-sea-900 hover:bg-sea-900 hover:text-white"
      }`}
    >
      {label}
    </a>
  );
}

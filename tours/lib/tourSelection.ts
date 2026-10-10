import type { TourId } from "@/content/business";

// Lets a tour card preselect its tour in the booking form further down the page.
export const SELECT_TOUR_EVENT = "select-tour";

export function selectTour(id: TourId) {
  window.dispatchEvent(new CustomEvent<TourId>(SELECT_TOUR_EVENT, { detail: id }));
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

// Business details shared by every language.
// TODO: replace every value marked TODO with the client's real details before launch.

export const business = {
  name: "Calpe Private Tours", // TODO: client's brand name
  shortName: "Calpe Tours",
  url: "https://calpeprivatetours.com", // TODO: production domain
  email: "bookings@calpeprivatetours.com", // TODO: real bookings inbox
  // International format, digits only — used to build wa.me links.
  whatsappNumber: "35020000000", // TODO: real WhatsApp number
  phoneDisplay: "+350 200 00000", // TODO
  address: "Casemates Square, Gibraltar GX11 1AA", // TODO
  licence: "Licensed tour operator · Gibraltar Tourist Board", // TODO: real licence ref
  currency: "GBP",
  social: {
    instagram: "https://instagram.com/", // TODO
    facebook: "https://facebook.com/", // TODO
    tripadvisor: "https://tripadvisor.com/", // TODO
  },
};

export type TourId =
  | "rock-tour"
  | "full-experience"
  | "cruise-tour"
  | "siege-tunnels"
  | "dolphins-rock"
  | "tailor-made";

export type TourTheme = "sunset" | "sea" | "stone" | "night" | "dolphin" | "map";

export type TourSpec = {
  id: TourId;
  // Price per vehicle (up to maxGuests) in GBP; null = price on request.
  priceFrom: number | null;
  durationMinutes: number | null;
  maxGuests: number;
  theme: TourTheme;
  featured?: boolean;
};

// TODO: confirm prices, durations and group sizes with the client.
export const tours: TourSpec[] = [
  { id: "rock-tour", priceFrom: 120, durationMinutes: 90, maxGuests: 6, theme: "sunset", featured: true },
  { id: "full-experience", priceFrom: 210, durationMinutes: 180, maxGuests: 6, theme: "stone" },
  { id: "cruise-tour", priceFrom: 150, durationMinutes: 120, maxGuests: 6, theme: "sea" },
  { id: "siege-tunnels", priceFrom: 140, durationMinutes: 120, maxGuests: 6, theme: "night" },
  { id: "dolphins-rock", priceFrom: 260, durationMinutes: 240, maxGuests: 6, theme: "dolphin" },
  { id: "tailor-made", priceFrom: null, durationMinutes: null, maxGuests: 16, theme: "map" },
];

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

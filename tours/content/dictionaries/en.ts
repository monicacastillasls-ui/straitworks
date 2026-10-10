import type { TourId } from "@/content/business";

// English copy. `es.ts` must match this shape — TypeScript enforces it.
// Reviews below are SAMPLE placeholders: replace them with genuine
// customer reviews (e.g. from TripAdvisor/Google) before launch.

const en = {
  meta: {
    title: "Private Tours of Gibraltar | Rock Tours with Local Guides",
    description:
      "Private, fully guided tours of the Rock of Gibraltar: St Michael's Cave, the Barbary macaques, the Great Siege Tunnels and Europa Point. Hotel, frontier and cruise terminal pick-up.",
  },
  nav: {
    tours: "Tours",
    highlights: "Highlights",
    why: "Why us",
    reviews: "Reviews",
    faq: "FAQ",
    book: "Book now",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Private tours · Gibraltar",
    title: "Discover the Rock with your own local guide",
    body: "Comfortable private vehicle, no crowds and a guide born and raised in Gibraltar. We pick you up from the frontier, your hotel or the cruise terminal.",
    primaryCta: "See our tours",
    whatsappCta: "Chat on WhatsApp",
    badges: ["5.0 rating from our guests", "Licensed local guides", "Free pick-up in Gibraltar"],
  },
  tours: {
    eyebrow: "Our tours",
    title: "Choose your private tour",
    body: "Every tour is private: just you and your group, with a guide and vehicle. Prices are per vehicle, not per person.",
    from: "From",
    perVehicle: "per vehicle",
    onRequest: "Price on request",
    upTo: "Up to {n} guests",
    flexible: "Flexible duration",
    hours: "{n} h",
    minutes: "{n} min",
    book: "Book this tour",
    featured: "Most popular",
    items: {
      "rock-tour": {
        title: "The Rock Tour",
        summary:
          "The essential Gibraltar tour: the Pillars of Hercules viewpoint, St Michael's Cave and the famous Barbary macaques at the Apes' Den.",
        includes: ["Nature Reserve entry", "St Michael's Cave", "Apes' Den", "Pillars of Hercules"],
      },
      "full-experience": {
        title: "Full Gibraltar Experience",
        summary:
          "Everything the Rock has to offer in one relaxed morning or afternoon, from the Skywalk to the Moorish Castle and Europa Point lighthouse.",
        includes: ["All Rock Tour stops", "Skywalk", "Great Siege Tunnels", "Moorish Castle", "Europa Point"],
      },
      "cruise-tour": {
        title: "Cruise Passenger Tour",
        summary:
          "Designed around your ship's schedule. We meet you at the terminal and guarantee you're back on board with time to spare.",
        includes: ["Terminal pick-up & drop-off", "Upper Rock highlights", "Photo stops", "Back-on-board guarantee"],
      },
      "siege-tunnels": {
        title: "History & Tunnels",
        summary:
          "Walk through 300 years of military history: the Great Siege Tunnels, WWII tunnels and the city's fortifications.",
        includes: ["Great Siege Tunnels", "World War II Tunnels", "Moorish Castle", "City walls"],
      },
      "dolphins-rock": {
        title: "Dolphins & Rock Combo",
        summary:
          "Start the day watching wild dolphins in the Bay of Gibraltar, then head up the Rock for its best viewpoints.",
        includes: ["Dolphin boat trip", "Rock Tour", "Marina pick-up", "Local tips for lunch"],
      },
      "tailor-made": {
        title: "Tailor-made Tour",
        summary:
          "Larger groups, special occasions, photography or reduced mobility — tell us what you need and we'll design it with you.",
        includes: ["Custom itinerary", "Groups up to 16", "Minibus available", "Any language on request"],
      },
    } satisfies Record<TourId, { title: string; summary: string; includes: string[] }>,
  },
  highlights: {
    eyebrow: "What you'll see",
    title: "The highlights of the Rock",
    items: [
      { title: "St Michael's Cave", body: "A cathedral of stalactites inside the Rock, home to concerts and light shows." },
      { title: "Barbary Macaques", body: "Europe's only wild monkeys, living freely on the Upper Rock." },
      { title: "Great Siege Tunnels", body: "Galleries dug by hand in the 18th century to defend the Rock." },
      { title: "Skywalk", body: "A glass platform 340 m above sea level with views of two continents." },
      { title: "Europa Point", body: "The southern tip of Gibraltar, where the Mediterranean meets the Atlantic." },
      { title: "Moorish Castle", body: "A 14th-century tower that still watches over the old town." },
    ],
  },
  why: {
    eyebrow: "Why travel with us",
    title: "A private tour, the way it should be",
    items: [
      { title: "Local, licensed guides", body: "Born in Gibraltar, officially licensed and full of stories you won't find in a guidebook." },
      { title: "Truly private", body: "No shared buses or strangers. Your group, your pace, your stops." },
      { title: "Easy pick-up", body: "Frontier, hotel, marina or cruise terminal — we'll meet you there." },
      { title: "All included", body: "Nature Reserve entrance fees and bottled water included in the price." },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Book in three simple steps",
    items: [
      { title: "Send us a message", body: "Use the form, WhatsApp or email with your date, tour and number of guests." },
      { title: "We confirm", body: "We reply quickly with availability and your pick-up time." },
      { title: "Enjoy the Rock", body: "Your guide meets you at the agreed point. Pay on the day by card or cash." },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our guests say",
    items: [
      { quote: "Our guide made the whole family laugh and learn. The monkeys were the highlight for the kids!", name: "Sarah", origin: "United Kingdom" },
      { quote: "Perfect for our cruise stop. We saw everything and were back at the ship with plenty of time.", name: "Mark & Linda", origin: "United States" },
      { quote: "Private, comfortable and very well organised. The views from the Skywalk are unforgettable.", name: "Hans", origin: "Germany" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Are entrance fees included?", a: "Yes. The Upper Rock Nature Reserve entrance, which includes St Michael's Cave and the Skywalk, is included in all Rock tours." },
      { q: "Where do you pick us up?", a: "Anywhere in Gibraltar: the frontier with Spain, your hotel, the marinas or the cruise terminal." },
      { q: "Is the price per person?", a: "No, prices are per vehicle for up to 6 guests. For larger groups, ask us for a tailor-made quote." },
      { q: "Can we visit if we're coming from Spain?", a: "Of course. Walk across the frontier from La Línea and we'll be waiting on the Gibraltar side. Remember your passport or ID." },
      { q: "Are the tours suitable for children or reduced mobility?", a: "Yes. Most stops are a short walk from the vehicle and we adapt the route to your needs. Let us know when booking." },
      { q: "What is the cancellation policy?", a: "Free cancellation up to 24 hours before the tour. Bad weather? We'll reschedule or refund you." },
    ],
  },
  booking: {
    eyebrow: "Book your tour",
    title: "Request your booking",
    body: "Fill in your details and send your request by WhatsApp or email. We'll confirm availability as soon as possible.",
    fields: {
      tour: "Tour",
      date: "Date",
      guests: "Number of guests",
      pickup: "Pick-up point",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      message: "Anything else we should know? (optional)",
    },
    pickupOptions: ["Frontier / border", "Hotel in Gibraltar", "Cruise terminal", "Marina", "Other"],
    selectPlaceholder: "Select…",
    sendWhatsapp: "Send via WhatsApp",
    sendEmail: "Send via email",
    note: "Sending a request doesn't commit you to anything. No payment is taken online.",
    errors: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      date: "Please choose a date from today onwards.",
    },
    success: "Your request is ready — just press send in WhatsApp or your email app.",
    messageIntro: "Hello! I'd like to request a private tour.",
    messageSubject: "Tour booking request",
    contactTitle: "Prefer to talk?",
    contactBody: "Message us directly — we usually reply within the hour.",
  },
  footer: {
    tagline: "Private, guided tours of the Rock of Gibraltar with local guides.",
    explore: "Explore",
    contact: "Contact",
    follow: "Follow us",
    rights: "All rights reserved.",
  },
  whatsappFloat: "Chat with us on WhatsApp",
  whatsappGreeting: "Hello! I'd like some information about your tours.",
};

export type Dictionary = typeof en;
export default en;

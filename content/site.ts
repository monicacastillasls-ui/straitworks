// Central copy source for the site. Written in English (primary market).
// To add Spanish later: create `content/site.es.ts` mirroring this shape,
// then swap the import based on a locale (e.g. a route segment or a
// simple selector) — the components below never hardcode English strings.

export const siteConfig = {
  name: "Strait Works",
  tagline: "Digital studio specializing in professional websites, Shopify stores and brand identity.",
  url: "https://straitworks.com", // TODO: replace with the real production domain
  // TODO: replace with your real contact email before launch
  contactEmail: "hello@straitworks.com",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Independent Digital Studio",
  headline: ["Digital experiences", "built for business."],
  body: "Strait Works creates modern websites, Shopify stores and visual identities designed to help businesses look professional, communicate clearly and grow online.",
  primaryCta: { label: "Start a Project", href: "#contact" },
  secondaryCta: { label: "View Our Work", href: "#work" },
};

export type Service = {
  index: string;
  title: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    index: "01",
    title: "Web Design & Development",
    description:
      "Modern, responsive websites built around your business, audience and goals.",
    features: [
      "Responsive Design",
      "Landing Pages",
      "Business Websites",
      "Contact Forms",
      "Performance",
      "SEO-ready structure",
    ],
    cta: { label: "Explore Web Design", href: "#contact" },
  },
  {
    index: "02",
    title: "Shopify E-commerce",
    description:
      "Professional Shopify stores designed to create a smooth shopping experience across every device.",
    features: [
      "Store Design",
      "Product Setup",
      "Payments",
      "Shipping",
      "Inventory",
      "Apps",
      "Responsive Commerce",
    ],
    cta: { label: "Explore Shopify", href: "#contact" },
  },
  {
    index: "03",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that help businesses look consistent, recognizable and professional.",
    features: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Logo Variations",
      "Stationery",
      "Social Media Assets",
    ],
    cta: { label: "Explore Branding", href: "#contact" },
  },
];

export type WorkProject = {
  index: string;
  title: string;
  category: string;
  description: string;
  tag: "CONCEPT PROJECT";
  type: "web" | "shopify" | "brand";
};

export const work: WorkProject[] = [
  {
    index: "01",
    title: "Modern Business Website",
    category: "Web Design & Development",
    description:
      "A clean, structured business website concept — built desktop-first and refined for mobile.",
    tag: "CONCEPT PROJECT",
    type: "web",
  },
  {
    index: "02",
    title: "Premium Shopify Store",
    category: "Shopify E-commerce",
    description:
      "A full commerce concept spanning homepage, collection, product page and cart.",
    tag: "CONCEPT PROJECT",
    type: "shopify",
  },
  {
    index: "03",
    title: "NATURÉA",
    category: "Logo & Brand Identity",
    description:
      "A complete identity concept — logo, stationery, packaging and social media presence.",
    tag: "CONCEPT PROJECT",
    type: "brand",
  },
];

export const whyUs = {
  title: ["Designed with purpose.", "Built with precision."],
  points: [
    {
      index: "01",
      title: "Tailored Solutions",
      description:
        "Every project is shaped around the business rather than a generic template.",
    },
    {
      index: "02",
      title: "Responsive by Default",
      description:
        "Experiences designed to work across desktop, tablet and mobile.",
    },
    {
      index: "03",
      title: "Clear Communication",
      description:
        "A structured process with clear expectations from start to finish.",
    },
    {
      index: "04",
      title: "Detail-Focused",
      description:
        "Visual consistency, usability and presentation matter at every stage.",
    },
  ],
};

export const process = {
  title: "A simple, clear process",
  steps: [
    {
      index: "01",
      title: "Discovery",
      description:
        "We understand the business, goals, audience and requirements.",
    },
    {
      index: "02",
      title: "Direction",
      description: "We define the visual and functional direction.",
    },
    {
      index: "03",
      title: "Design & Build",
      description: "The experience is designed and developed.",
    },
    {
      index: "04",
      title: "Review",
      description: "We refine the project based on agreed feedback.",
    },
    {
      index: "05",
      title: "Launch",
      description: "Final testing, delivery and launch preparation.",
    },
  ],
};

export const about = {
  title: "About Strait Works",
  paragraphs: [
    "Strait Works is an independent digital studio focused on creating professional digital experiences for businesses and entrepreneurs.",
    "From modern business websites and Shopify stores to complete visual identities, every project is approached with a focus on clarity, usability and strong presentation.",
    "We believe good design should not only look professional — it should make a business easier to understand, trust and use.",
  ],
};

export const faq = [
  {
    question: "What services does Strait Works provide?",
    answer:
      "Strait Works focuses on three core services: web design and development, Shopify store design and development, and brand identity design — including logos, color systems and supporting visual assets.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Strait Works works remotely with businesses and entrepreneurs internationally, with communication handled in English.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Redesign projects start with a review of your current site and goals so the new direction addresses what isn't working while preserving what already serves the business well.",
  },
  {
    question: "Can you build a Shopify store from scratch?",
    answer:
      "Yes. This includes store design, product setup, payments, shipping and inventory configuration, and app integration where needed — built to be fully responsive.",
  },
  {
    question: "Do you create complete brand identities?",
    answer:
      "Yes. A full identity project can include logo design, color palette, typography, logo variations, stationery and social media assets.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope and complexity. After the discovery stage, you'll receive a clear estimate specific to your project before any work begins.",
  },
  {
    question: "What do you need before starting a project?",
    answer:
      "Generally: a description of your business and goals, any existing brand materials, and examples of styles or sites you're drawn to. This is covered in the discovery stage.",
  },
  {
    question: "Can I request a custom project?",
    answer:
      "Yes. If your project doesn't fit neatly into one category, select \"Other\" in the contact form and describe what you need — we'll follow up to discuss the details.",
  },
];

export const contact = {
  eyebrow: "Get in touch",
  headline: "Have a project in mind?",
  body: "Tell us what you're building and let's explore how Strait Works can help.",
  cta: "Start a Project",
  serviceOptions: [
    "Web Design & Development",
    "Shopify Store",
    "Brand Identity",
    "Other",
  ],
  budgetOptions: [
    "Under €500",
    "€500–€1,000",
    "€1,000–€2,500",
    "€2,500+",
    "Not sure yet",
  ],
};

export const footer = {
  description: "Professional websites, Shopify stores and brand identities.",
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  copyright: "© 2026 Strait Works. All rights reserved.",
};

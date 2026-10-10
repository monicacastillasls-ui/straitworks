import { business } from "@/content/business";
import type { Locale } from "@/lib/i18n";

export function fill(template: string, n: number | string) {
  return template.replace("{n}", String(n));
}

export function formatPrice(amount: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB", {
    style: "currency",
    currency: business.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDuration(minutes: number, locale: Locale, labels: { hours: string; minutes: string }) {
  if (minutes < 60) return fill(labels.minutes, minutes);
  const hours = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(minutes / 60);
  return fill(labels.hours, hours);
}

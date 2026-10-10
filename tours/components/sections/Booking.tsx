"use client";

import { useEffect, useState } from "react";
import { business, mailtoLink, tours, whatsappLink, type TourId } from "@/content/business";
import type { Dictionary } from "@/content/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { SELECT_TOUR_EVENT } from "@/lib/tourSelection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

type Fields = {
  tour: string;
  date: string;
  guests: string;
  pickup: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { tour: "", date: "", guests: "2", pickup: "", name: "", email: "", phone: "", message: "" };

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

export default function Booking({ lang, t }: { lang: Locale; t: Dictionary }) {
  const b = t.booking;
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [minDate, setMinDate] = useState<string>();
  const [sent, setSent] = useState(false);

  // Set after mount so server and client markup match.
  useEffect(() => setMinDate(todayISO()), []);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<TourId>).detail;
      setFields((f) => ({ ...f, tour: id }));
      setErrors((err) => ({ ...err, tour: undefined }));
    };
    window.addEventListener(SELECT_TOUR_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_TOUR_EVENT, onSelect);
  }, []);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
    setSent(false);
  };

  function validate() {
    const next: Errors = {};
    for (const key of ["tour", "date", "guests", "pickup", "name", "email"] as const) {
      if (!fields[key].trim()) next[key] = b.errors.required;
    }
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = b.errors.email;
    if (fields.date && fields.date < todayISO()) next.date = b.errors.date;
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`booking-${Object.keys(next)[0]}`)?.focus();
      return false;
    }
    return true;
  }

  function buildMessage() {
    const tourTitle = t.tours.items[fields.tour as TourId]?.title ?? fields.tour;
    const date = new Date(`${fields.date}T12:00:00`).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const lines = [
      b.messageIntro,
      "",
      `${b.fields.tour}: ${tourTitle}`,
      `${b.fields.date}: ${date}`,
      `${b.fields.guests}: ${fields.guests}`,
      `${b.fields.pickup}: ${fields.pickup}`,
      `${b.fields.name}: ${fields.name}`,
      `${b.fields.email}: ${fields.email}`,
    ];
    if (fields.phone) lines.push(`${b.fields.phone.replace(/\s*\(.*\)/, "")}: ${fields.phone}`);
    if (fields.message) lines.push("", fields.message);
    return lines.join("\n");
  }

  function sendWhatsApp() {
    if (!validate()) return;
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  function sendEmail() {
    if (!validate()) return;
    const tourTitle = t.tours.items[fields.tour as TourId]?.title ?? "";
    window.location.href = mailtoLink(`${b.messageSubject} — ${tourTitle} (${fields.date})`, buildMessage());
    setSent(true);
  }

  return (
    <section id="booking" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={b.eyebrow} title={b.title} body={b.body} align="left" />

            <div className="mt-10 rounded-3xl bg-sea-900 p-8 text-sand-100">
              <h3 className="text-2xl font-semibold text-sand-50">{b.contactTitle}</h3>
              <p className="mt-2 text-sm">{b.contactBody}</p>
              <div className="mt-6 space-y-3">
                <a
                  href={whatsappLink(t.whatsappGreeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-whatsapp-dark px-5 py-4 font-semibold text-white transition hover:brightness-110"
                >
                  <WhatsAppIcon className="h-6 w-6" /> WhatsApp · {business.phoneDisplay}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 break-all rounded-2xl bg-white/10 px-5 py-4 font-semibold text-sand-50 transition hover:bg-white/15"
                >
                  <MailIcon className="h-6 w-6 shrink-0" /> {business.email}
                </a>
                <a
                  href={`tel:+${business.whatsappNumber}`}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 font-semibold text-sand-50 transition hover:bg-white/15"
                >
                  <PhoneIcon className="h-6 w-6" /> {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              sendWhatsApp();
            }}
            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sand-200 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="tour" label={b.fields.tour} error={errors.tour} className="sm:col-span-2">
                <select id="booking-tour" value={fields.tour} onChange={update("tour")} className={inputClass(errors.tour)} aria-invalid={!!errors.tour} aria-describedby={errors.tour ? "booking-tour-error" : undefined}>
                  <option value="">{b.selectPlaceholder}</option>
                  {tours.map((tour) => (
                    <option key={tour.id} value={tour.id}>
                      {t.tours.items[tour.id].title}
                    </option>
                  ))}
                </select>
              </Field>

              <Field id="date" label={b.fields.date} error={errors.date}>
                <input id="booking-date" type="date" min={minDate} value={fields.date} onChange={update("date")} className={inputClass(errors.date)} aria-invalid={!!errors.date} aria-describedby={errors.date ? "booking-date-error" : undefined} />
              </Field>

              <Field id="guests" label={b.fields.guests} error={errors.guests}>
                <select id="booking-guests" value={fields.guests} onChange={update("guests")} className={inputClass(errors.guests)}>
                  {Array.from({ length: 16 }, (_, i) => String(i + 1)).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </Field>

              <Field id="pickup" label={b.fields.pickup} error={errors.pickup} className="sm:col-span-2">
                <select id="booking-pickup" value={fields.pickup} onChange={update("pickup")} className={inputClass(errors.pickup)} aria-invalid={!!errors.pickup} aria-describedby={errors.pickup ? "booking-pickup-error" : undefined}>
                  <option value="">{b.selectPlaceholder}</option>
                  {b.pickupOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>

              <Field id="name" label={b.fields.name} error={errors.name} className="sm:col-span-2">
                <input id="booking-name" type="text" autoComplete="name" value={fields.name} onChange={update("name")} className={inputClass(errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "booking-name-error" : undefined} />
              </Field>

              <Field id="email" label={b.fields.email} error={errors.email}>
                <input id="booking-email" type="email" autoComplete="email" value={fields.email} onChange={update("email")} className={inputClass(errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "booking-email-error" : undefined} />
              </Field>

              <Field id="phone" label={b.fields.phone}>
                <input id="booking-phone" type="tel" autoComplete="tel" value={fields.phone} onChange={update("phone")} className={inputClass()} />
              </Field>

              <Field id="message" label={b.fields.message} className="sm:col-span-2">
                <textarea id="booking-message" rows={4} value={fields.message} onChange={update("message")} className={inputClass()} />
              </Field>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-whatsapp-dark px-6 py-4 text-sm font-semibold text-white transition hover:brightness-110">
                <WhatsAppIcon className="h-5 w-5" /> {b.sendWhatsapp}
              </button>
              <button type="button" onClick={sendEmail} className="flex items-center justify-center gap-2 rounded-full bg-sea-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-sea-800">
                <MailIcon className="h-5 w-5" /> {b.sendEmail}
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-stone-500" aria-live="polite">
              {sent ? <span className="font-medium text-sea-700">{b.success}</span> : b.note}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

function inputClass(error?: string) {
  return `mt-2 block w-full rounded-xl border bg-sand-50 px-4 py-3 text-sm text-sea-900 outline-none transition focus:border-sea-600 focus:bg-white focus:ring-2 focus:ring-sea-600/20 ${
    error ? "border-terracotta" : "border-sand-200"
  }`;
}

function Field({
  id,
  label,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`booking-${id}`} className="text-sm font-medium text-sea-900">
        {label}
      </label>
      {children}
      {error && (
        <p id={`booking-${id}-error`} className="mt-1.5 text-xs font-medium text-terracotta-dark">
          {error}
        </p>
      )}
    </div>
  );
}

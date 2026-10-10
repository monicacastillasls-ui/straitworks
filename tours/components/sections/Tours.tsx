import { tours } from "@/content/business";
import type { Dictionary } from "@/content/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { fill, formatDuration, formatPrice } from "@/lib/format";
import { TourArt } from "@/components/illustrations/Rock";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon, ClockIcon, UsersIcon } from "@/components/ui/Icons";
import BookTourButton from "./BookTourButton";

export default function Tours({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <section id="tours" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.tours.eyebrow} title={t.tours.title} body={t.tours.body} />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => {
            const copy = t.tours.items[tour.id];
            return (
              <Reveal key={tour.id} delay={(i % 3) * 0.08} className="h-full">
                <article
                  className={`flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    tour.featured ? "ring-2 ring-terracotta" : "ring-sand-200"
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* TODO: replace with a real photo for each tour. */}
                    <TourArt theme={tour.theme} className="h-full w-full" />
                    {tour.featured && (
                      <span className="absolute left-4 top-4 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-white">
                        {t.tours.featured}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium uppercase tracking-wider text-stone-500">
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4" />
                        {tour.durationMinutes
                          ? formatDuration(tour.durationMinutes, lang, t.tours)
                          : t.tours.flexible}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <UsersIcon className="h-4 w-4" />
                        {fill(t.tours.upTo, tour.maxGuests)}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold">{copy.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-500">{copy.summary}</p>

                    <ul className="mt-5 space-y-2 text-sm">
                      {copy.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-7">
                      <div className="mb-4 flex items-baseline gap-2 border-t border-sand-200 pt-5">
                        {tour.priceFrom !== null ? (
                          <>
                            <span className="text-xs uppercase tracking-wider text-stone-500">{t.tours.from}</span>
                            <span className="font-display text-3xl font-semibold text-sea-900">
                              {formatPrice(tour.priceFrom, lang)}
                            </span>
                            <span className="text-xs text-stone-500">{t.tours.perVehicle}</span>
                          </>
                        ) : (
                          <span className="font-display text-xl font-semibold text-sea-900">{t.tours.onRequest}</span>
                        )}
                      </div>
                      <BookTourButton id={tour.id} label={t.tours.book} primary={tour.featured} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

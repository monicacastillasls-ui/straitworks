import type { Dictionary } from "@/content/dictionaries/en";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/Icons";

export default function Reviews({ t }: { t: Dictionary }) {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-sand-200">
                <div className="flex text-[#E0A458]" aria-label="5/5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-sea-900">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-sea-900">{r.name}</span>
                  <span className="text-stone-500"> · {r.origin}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

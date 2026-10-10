import type { Dictionary } from "@/content/dictionaries/en";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronIcon } from "@/components/ui/Icons";

export default function FAQ({ t }: { t: Dictionary }) {
  return (
    <section id="faq" className="bg-sand-100 py-20 md:py-28">
      <Container className="max-w-4xl">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="mt-12 divide-y divide-sand-300 border-y border-sand-300">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-lg font-semibold text-sea-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronIcon className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 pr-10 text-sm leading-relaxed text-stone-500 md:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

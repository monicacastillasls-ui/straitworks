import type { Dictionary } from "@/content/dictionaries/en";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Highlights({ t }: { t: Dictionary }) {
  return (
    <section id="highlights" className="bg-sea-900 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.highlights.eyebrow} title={t.highlights.title} tone="dark" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.highlights.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className="bg-sea-900">
              <div className="h-full p-8 md:p-10">
                <span className="font-display text-4xl font-semibold text-terracotta-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-sand-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-200">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

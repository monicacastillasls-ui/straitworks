import type { Dictionary } from "@/content/dictionaries/en";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Steps({ t }: { t: Dictionary }) {
  return (
    <section className="bg-sand-100 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.steps.eyebrow} title={t.steps.title} />
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sea-900 font-display text-2xl font-semibold text-sand-50">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-stone-500">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

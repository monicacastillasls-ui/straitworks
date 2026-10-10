import type { Dictionary } from "@/content/dictionaries/en";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CarIcon, PinIcon, ShieldIcon, TicketIcon } from "@/components/ui/Icons";

const icons = [ShieldIcon, CarIcon, PinIcon, TicketIcon];

export default function WhyUs({ t }: { t: Dictionary }) {
  return (
    <section id="why" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i % icons.length] ?? ShieldIcon;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-sand-200">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-100 text-terracotta">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

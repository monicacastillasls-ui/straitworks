import type { Dictionary } from "@/content/dictionaries/en";
import { whatsappLink } from "@/content/business";
import { HeroScene } from "@/components/illustrations/Rock";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, CheckIcon, StarIcon, WhatsAppIcon } from "@/components/ui/Icons";

export default function Hero({ t }: { t: Dictionary }) {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-sea-950 pb-16 pt-28 md:items-center md:pb-24">
      {/* TODO: swap the illustration for a real photo of the Rock once the client provides one. */}
      <HeroScene className="absolute inset-0 -z-20 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sea-950/90 via-sea-950/60 to-transparent md:via-sea-950/40" />

      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand-100 backdrop-blur">
              <span className="flex text-[#F6C48E]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              {t.hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] text-sand-50 sm:text-5xl md:text-7xl">
              {t.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand-100 md:text-lg">{t.hero.body}</p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tours"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white transition hover:bg-terracotta-dark"
            >
              {t.hero.primaryCta} <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(t.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsAppIcon className="h-5 w-5" /> {t.hero.whatsappCta}
            </a>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-10 flex flex-col gap-3 text-sm text-sand-100 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {t.hero.badges.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-[#F6C48E]" /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

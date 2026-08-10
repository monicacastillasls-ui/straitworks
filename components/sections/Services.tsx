import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Link from "next/link";
import { services } from "@/content/site";

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <Container>
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Three disciplines, one cohesive result.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.08}>
              <div className="group grid grid-cols-1 gap-8 py-12 transition-colors md:grid-cols-12 md:gap-6 md:py-14">
                <div className="md:col-span-2">
                  <span className="font-display text-sm font-semibold text-electric-light">
                    {service.index}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fog-400">
                    {service.description}
                  </p>
                  <Link
                    href={service.cta.href}
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-widest text-white transition-colors group-hover:text-electric-light"
                  >
                    {service.cta.label}
                    <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                <div className="md:col-span-5">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-fog-400"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-electric-light"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { whyUs } from "@/content/site";

export default function WhyUs() {
  return (
    <section className="section-padding relative">
      <Container>
        <Reveal>
          <Eyebrow>Why Strait Works</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            {whyUs.title[0]}
            <br />
            {whyUs.title[1]}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {whyUs.points.map((point, i) => (
            <Reveal key={point.index} delay={i * 0.08} className="bg-navy-950">
              <div className="h-full p-8 transition-colors duration-300 hover:bg-navy-900 md:p-10">
                <span className="font-display text-sm font-semibold text-electric-light">
                  {point.index}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-fog-400">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

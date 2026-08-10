import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { process } from "@/content/site";

export default function Process() {
  return (
    <section id="process" className="section-padding relative bg-navy-950/40">
      <Container>
        <Reveal>
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            {process.title}
          </h2>
        </Reveal>

        <div className="mt-16">
          {process.steps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.06}>
              <div className="group grid grid-cols-1 gap-3 border-t border-white/10 py-8 last:border-b sm:grid-cols-12 sm:items-center sm:gap-6">
                <span className="font-display text-sm font-semibold text-electric-light sm:col-span-2">
                  {step.index}
                </span>
                <h3 className="font-display text-xl font-bold text-white transition-transform duration-300 ease-premium group-hover:translate-x-1 sm:col-span-4 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-fog-400 sm:col-span-6">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

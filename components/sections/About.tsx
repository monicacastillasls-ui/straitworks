import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>About the Studio</Eyebrow>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="max-w-xl text-[15px] leading-relaxed text-fog-400 md:text-base">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.15} className="h-full">
            <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
                aria-hidden="true"
              />
              <div
                className="absolute h-64 w-64 rounded-full bg-electric/20 blur-3xl"
                aria-hidden="true"
              />
              <span
                className="relative font-display text-8xl font-extrabold tracking-tightest text-white/90 md:text-9xl"
                aria-hidden="true"
              >
                SW
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

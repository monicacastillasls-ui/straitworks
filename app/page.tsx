import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <WhyUs />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import BrowserFrame from "@/components/ui/mockups/BrowserFrame";
import PhoneFrame from "@/components/ui/mockups/PhoneFrame";
import { WebDesktopScreen, WebMobileScreen } from "@/components/ui/mockups/WebsiteScreens";
import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-glow-radial"
        style={{ ["--y" as string]: "-10%" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow className="justify-center">{hero.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tightest text-white sm:text-6xl md:text-7xl"
          >
            {hero.headline[0]}
            <br />
            <span className="text-electric-light">{hero.headline[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-xl text-balance text-base leading-relaxed text-fog-400 md:text-lg"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl md:mt-28"
        >
          <div
            className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(61,107,255,0.12),transparent_65%)]"
            aria-hidden="true"
          />
          <BrowserFrame
            label="strait-works.com"
            className="mx-auto w-full animate-float"
          >
            <WebDesktopScreen />
          </BrowserFrame>

          <PhoneFrame className="absolute -bottom-14 -right-2 hidden w-40 sm:-right-6 sm:w-48 md:block lg:-right-10 lg:w-56 [animation-delay:1s] animate-float">
            <WebMobileScreen />
          </PhoneFrame>
        </motion.div>
      </Container>
    </section>
  );
}

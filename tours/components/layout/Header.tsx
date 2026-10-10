"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business, whatsappLink } from "@/content/business";
import type { Dictionary } from "@/content/dictionaries/en";
import { locales, type Locale } from "@/lib/i18n";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/ui/Icons";
import Container from "@/components/ui/Container";

export default function Header({ lang, t }: { lang: Locale; t: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#tours", label: t.nav.tours },
    { href: "#highlights", label: t.nav.highlights },
    { href: "#why", label: t.nav.why },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-sea-950/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 text-sand-50">
          <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
            <path d="M6 46 L22 28 L30 32 L44 12 L58 46 Z" fill="currentColor" />
            <path d="M6 52 H58" stroke="#C8553D" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span className="font-display text-lg font-semibold leading-none md:text-xl">
            {business.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-sand-100 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitch lang={lang} label={t.nav.language} />
          <a
            href={whatsappLink(t.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white transition hover:brightness-110 sm:flex"
            aria-label={t.whatsappFloat}
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href="#booking"
            className="hidden rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-terracotta-dark sm:inline-flex"
          >
            {t.nav.book}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-sand-50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" className="border-t border-white/10 bg-sea-950 lg:hidden" aria-label="Mobile">
          <Container className="flex flex-col py-4">
            {[...links, { href: "#booking", label: t.nav.book }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-sand-100 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}

function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  return (
    <div className="flex rounded-full border border-white/25 p-0.5 text-xs font-semibold" role="group" aria-label={label}>
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-full px-2.5 py-1.5 uppercase transition ${
            l === lang ? "bg-sand-50 text-sea-900" : "text-sand-100 hover:text-white"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

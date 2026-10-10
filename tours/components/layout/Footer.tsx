import { business, whatsappLink } from "@/content/business";
import type { Dictionary } from "@/content/dictionaries/en";
import Container from "@/components/ui/Container";
import { MailIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer({ t }: { t: Dictionary }) {
  const explore = [
    { href: "#tours", label: t.nav.tours },
    { href: "#highlights", label: t.nav.highlights },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
    { href: "#booking", label: t.nav.book },
  ];
  const social = [
    { href: business.social.instagram, label: "Instagram" },
    { href: business.social.facebook, label: "Facebook" },
    { href: business.social.tripadvisor, label: "Tripadvisor" },
  ];

  return (
    <footer className="bg-sea-950 pb-24 pt-16 text-sand-200 md:pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-sand-50">{business.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
            <p className="mt-4 text-xs text-sand-300">{business.licence}</p>
          </div>
          <FooterCol title={t.footer.explore}>
            {explore.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </li>
            ))}
          </FooterCol>
          <FooterCol title={t.footer.contact}>
            <li>
              <a href={whatsappLink(t.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <WhatsAppIcon className="h-4 w-4 shrink-0" /> {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 break-all hover:text-white">
                <MailIcon className="h-4 w-4 shrink-0" /> {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0" /> {business.address}
            </li>
          </FooterCol>
          <FooterCol title={t.footer.follow}>
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{s.label}</a>
              </li>
            ))}
          </FooterCol>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-sand-300">
          © {new Date().getFullYear()} {business.name}. {t.footer.rights}
        </p>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-50">{title}</p>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

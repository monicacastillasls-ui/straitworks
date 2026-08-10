import Link from "next/link";
import Container from "@/components/ui/Container";
import { footer, siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <Container className="flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {siteConfig.name.toUpperCase()}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-fog-500">
            {footer.description}
          </p>
          <p className="mt-4 text-sm text-fog-500">
            {/* TODO: replace with your real contact email */}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="underline decoration-fog-600 underline-offset-4 transition-colors hover:text-electric-light"
            >
              {siteConfig.contactEmail}
            </a>
            <span className="ml-2 text-[10px] uppercase tracking-widest text-fog-600">
              (placeholder)
            </span>
          </p>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3"
          aria-label="Footer"
        >
          {footer.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-fog-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="flex flex-col items-start justify-between gap-4 border-t border-white/5 py-6 text-xs text-fog-600 sm:flex-row sm:items-center">
        <span>{footer.copyright}</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </Container>
    </footer>
  );
}

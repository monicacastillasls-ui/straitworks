import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import LegalPlaceholder from "@/components/legal/LegalPlaceholder";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Strait Works uses cookies on this website.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="pb-24 pt-40 md:pb-32 md:pt-48">
      <Container className="max-w-3xl">
        <p className="mb-10 rounded-lg border border-electric/30 bg-electric/10 px-4 py-3 text-sm leading-relaxed text-electric-light">
          This page is a placeholder structure. Replace every highlighted
          field with the real cookies and tools this site actually uses
          before publishing.
        </p>

        <h1 className="font-display text-4xl font-bold tracking-tighter text-white">
          Cookie Policy
        </h1>
        <p className="mt-3 text-sm text-fog-500">
          Last updated: <LegalPlaceholder>[effective date]</LegalPlaceholder>
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-fog-400">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              1. What Are Cookies
            </h2>
            <p className="mt-3">
              Cookies are small text files placed on your device when you
              visit a website. They are commonly used to make websites work,
              or work more efficiently, as well as to provide information to
              the site owner.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              2. Cookies Used on This Site
            </h2>
            <p className="mt-3">
              At the time of writing, this site does not set any non-essential
              cookies.
            </p>
            <p className="mt-3">
              <LegalPlaceholder>
                [If you add analytics, advertising or other third-party
                tools in the future, list each cookie here: its name,
                purpose, provider and expiry.]
              </LegalPlaceholder>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              3. Managing Cookies
            </h2>
            <p className="mt-3">
              Most web browsers allow you to control cookies through their
              settings, including blocking or deleting them. Restricting
              cookies may affect the functionality of this site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              4. Changes to This Policy
            </h2>
            <p className="mt-3">
              This policy will be updated if the cookies or tools used on
              this site change.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              5. Contact
            </h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              <LegalPlaceholder>[privacy contact email]</LegalPlaceholder>.
            </p>
            <p className="mt-3 text-fog-500">
              {siteConfig.name} · {siteConfig.contactEmail}{" "}
              <span className="text-[10px] uppercase tracking-widest">
                (placeholder)
              </span>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import LegalPlaceholder from "@/components/legal/LegalPlaceholder";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Strait Works collects, uses and protects your data.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="pb-24 pt-40 md:pb-32 md:pt-48">
      <Container className="max-w-3xl">
        <p className="mb-10 rounded-lg border border-electric/30 bg-electric/10 px-4 py-3 text-sm leading-relaxed text-electric-light">
          This page is a placeholder structure. Replace every highlighted
          field with your real business and legal details — ideally with
          input from a legal professional — before publishing this site.
        </p>

        <h1 className="font-display text-4xl font-bold tracking-tighter text-white">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-fog-500">
          Last updated: <LegalPlaceholder>[effective date]</LegalPlaceholder>
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-fog-400">
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              1. Who We Are
            </h2>
            <p className="mt-3">
              {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is a digital studio
              operated by{" "}
              <LegalPlaceholder>[legal business name]</LegalPlaceholder>,
              registered at{" "}
              <LegalPlaceholder>[registered business address]</LegalPlaceholder>
              . For any privacy-related questions, you can contact us at{" "}
              <LegalPlaceholder>[privacy contact email]</LegalPlaceholder>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              When you submit the contact form on this site, we may collect
              your name, email address, company or brand name, and details
              you provide about your project. We may also collect standard
              technical information (such as browser type and general usage
              data) through basic website analytics, if enabled.
            </p>
            <p className="mt-3">
              <LegalPlaceholder>
                [Specify here exactly which analytics or third-party tools
                you use, if any, and what data they collect.]
              </LegalPlaceholder>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              Information submitted through the contact form is used solely
              to respond to your enquiry and to discuss a potential project.
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              4. Legal Basis for Processing
            </h2>
            <p className="mt-3">
              <LegalPlaceholder>
                [State the legal basis relevant to your jurisdiction, e.g.
                consent or legitimate interest under applicable data
                protection law such as the GDPR.]
              </LegalPlaceholder>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              5. Data Retention
            </h2>
            <p className="mt-3">
              <LegalPlaceholder>
                [Describe how long enquiry data is kept and how it is
                deleted.]
              </LegalPlaceholder>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              6. Your Rights
            </h2>
            <p className="mt-3">
              Depending on your location, you may have the right to access,
              correct or request deletion of your personal information.
            </p>
            <p className="mt-3">
              <LegalPlaceholder>
                [List the specific rights that apply under the laws relevant
                to your business and audience, and how a user can exercise
                them.]
              </LegalPlaceholder>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              7. Cookies
            </h2>
            <p className="mt-3">
              This site may use cookies as described in our{" "}
              <a
                href="/cookies"
                className="text-electric-light underline underline-offset-4"
              >
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              8. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. Any changes will
              be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              9. Contact
            </h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              <LegalPlaceholder>[privacy contact email]</LegalPlaceholder>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

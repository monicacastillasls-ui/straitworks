import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import Tours from "@/components/sections/Tours";
import Highlights from "@/components/sections/Highlights";
import WhyUs from "@/components/sections/WhyUs";
import Steps from "@/components/sections/Steps";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import { business } from "@/content/business";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: business.name,
    url: `${business.url}/${lang}`,
    email: business.email,
    telephone: business.phoneDisplay,
    address: business.address,
    areaServed: "Gibraltar",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero t={t} />
      <Tours lang={lang} t={t} />
      <Highlights t={t} />
      <WhyUs t={t} />
      <Steps t={t} />
      <Reviews t={t} />
      <FAQ t={t} />
      <Booking lang={lang} t={t} />
    </>
  );
}

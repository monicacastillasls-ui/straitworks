import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import BrowserFrame from "@/components/ui/mockups/BrowserFrame";
import PhoneFrame from "@/components/ui/mockups/PhoneFrame";
import { WebDesktopScreen, WebMobileScreen } from "@/components/ui/mockups/WebsiteScreens";
import {
  ShopifyHomeScreen,
  ShopifyCollectionScreen,
  ShopifyProductScreen,
  ShopifyCartScreen,
} from "@/components/ui/mockups/ShopifyScreens";
import BrandBoard from "@/components/ui/mockups/BrandBoard";
import { work } from "@/content/site";

function ConceptTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-electric-light/30 bg-electric/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-electric-light">
      Concept Project
    </span>
  );
}

function WebVisual() {
  return (
    <div className="relative">
      <BrowserFrame label="strait-works.com" className="w-full">
        <WebDesktopScreen />
      </BrowserFrame>
      <PhoneFrame className="absolute -bottom-10 -right-4 hidden w-36 sm:block md:w-44">
        <WebMobileScreen />
      </PhoneFrame>
    </div>
  );
}

function ShopifyVisual() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <BrowserFrame label="store.myshop.com">
        <ShopifyHomeScreen />
      </BrowserFrame>
      <BrowserFrame label="store.myshop.com/collections">
        <ShopifyCollectionScreen />
      </BrowserFrame>
      <BrowserFrame label="store.myshop.com/products">
        <ShopifyProductScreen />
      </BrowserFrame>
      <BrowserFrame label="store.myshop.com/cart">
        <ShopifyCartScreen />
      </BrowserFrame>
    </div>
  );
}

const visuals = {
  web: WebVisual,
  shopify: ShopifyVisual,
  brand: BrandBoard,
};

export default function Work() {
  return (
    <section id="work" className="section-padding relative bg-navy-950/40">
      <Container>
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Concept projects that show how we think.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-fog-400">
            These are conceptual studies created to demonstrate range and
            craft — not work produced for real clients.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28">
          {work.map((project, i) => {
            const Visual = visuals[project.type];
            return (
              <Reveal key={project.index} delay={i * 0.05}>
                <article>
                  <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-sm font-semibold text-electric-light">
                          {project.index}
                        </span>
                        <ConceptTag />
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm uppercase tracking-widest text-fog-500">
                        {project.category}
                      </p>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-fog-400">
                      {project.description}
                    </p>
                  </div>

                  <Visual />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

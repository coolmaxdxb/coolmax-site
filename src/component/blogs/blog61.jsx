import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
  HomeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import BlogHeroImg from "../../asset/blogimg/blog61.webp";

const linkClass =
  "font-semibold text-cyan-700 underline decoration-cyan-200 underline-offset-4 transition hover:text-cyan-950 hover:decoration-cyan-500";

const articleSections = [
  { id: "sales-gallery", label: "Sales Galleries" },
  { id: "show-apartments", label: "Show Apartments & Villas" },
  { id: "luxury-developments", label: "Luxury Developments" },
  { id: "sales-offices", label: "Property Sales Offices" },
  { id: "fragrance-selection", label: "Choosing the Right Fragrance" },
  { id: "diffuser-solutions", label: "Professional Diffuser Solutions" },
  { id: "cta", label: "Create a Memorable Experience" },
];

const paragraphs = ({ children }) => <p>{children}</p>;

export default function RealEstateScentMarketingBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Scent Marketing for Real Estate Developers | Cool Max Scent";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover how scent marketing enhances property viewings, sales galleries, and luxury show apartments. Explore professional aroma diffuser solutions by Cool Max Scent."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/scent-marketing-real-estate-developers/"
    );
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4fbfa] pt-16 font-sans text-slate-900 selection:bg-cyan-100">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute -right-32 top-0 h-[620px] w-[620px] rounded-full bg-cyan-100/70 blur-[130px]" />
        <div className="absolute bottom-0 -left-32 h-[620px] w-[620px] rounded-full bg-amber-100/50 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 lg:px-16 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-12 lg:items-center"
          >
            <div className="lg:col-span-7">
              <div className="mb-7 inline-flex items-center gap-3 border border-cyan-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-800 shadow-sm backdrop-blur">
                <SparklesIcon className="h-4 w-4 text-cyan-600" /> Real estate scent marketing
              </div>

              <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
                Scent Marketing for Real Estate Developers: Creating Memorable Property Viewing Experiences
              </h1>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                <ClockIcon className="h-4 w-4 text-cyan-600" /> 8 min read <span className="h-1 w-1 rounded-full bg-cyan-500" /> Luxury property experience
              </div>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                In the competitive real estate market, creating a memorable property viewing experience is essential for attracting potential buyers and investors. While architectural design, interior décor, and lighting play important roles, fragrance can add another dimension to the property experience.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
                Scent marketing helps real estate developers create welcoming, pleasant, and memorable environments that make property viewings more engaging.
              </p>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -bottom-8 -left-5 hidden h-40 w-40 rounded-[2rem] bg-amber-200/70 lg:block" />
              <div className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-full border-[10px] border-cyan-300/70 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-[0_35px_90px_-28px_rgba(8,145,178,0.5)] backdrop-blur-sm md:p-4">
                <div className="relative overflow-hidden rounded-[1.45rem]">
                  <div className="aspect-[16/10] w-full bg-slate-100">
                    <img
                      src={BlogHeroImg}
                      alt="Scent marketing for real estate developers"
                      className="h-full w-full object-contain transition duration-700 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200">Luxury real estate ambience</p>
                      <p className="mt-1 text-xl font-serif">A premium property viewing experience</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] backdrop-blur">PROPERTY-061</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                  <span>Luxury property branding</span>
                  <span className="text-cyan-700">UAE · Qatar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-14 lg:px-16">
          <div className="grid gap-8 border-y border-slate-200 py-10 md:grid-cols-3">
            <div>
              <p className="text-3xl font-serif text-slate-950">Welcoming</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">A fragrance that makes every property visit feel premium from the very first step.</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-slate-950">Memorable</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">A carefully selected scent helps buyers remember both the property and its identity.</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-slate-950">Tailored</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">The right fragrance can reflect a property's style, audience, and brand positioning.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 lg:grid-cols-12 lg:px-16">
          <aside className="h-fit lg:sticky lg:top-28 lg:col-span-3">
            <div className="border border-slate-200 bg-white/80 p-6 backdrop-blur-sm">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-700">Inside this guide</p>
              <nav className="space-y-1">
                {articleSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex gap-3 border-l-2 border-transparent px-3 py-2 text-sm leading-5 text-slate-500 transition hover:border-cyan-500 hover:text-cyan-800"
                  >
                    <span className="font-bold text-cyan-600">{String(index + 1).padStart(2, "0")}</span>
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="max-w-3xl space-y-14 lg:col-span-7">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              {paragraphs({ children: "First impressions are important when potential buyers walk into a property. A pleasant fragrance can help create a welcoming atmosphere in show apartments, luxury villas, sales galleries, and property showrooms." })}
              {paragraphs({ children: "A carefully selected fragrance can complement the property's interior design and overall identity. Fresh, clean scents may suit modern apartments, while sophisticated woody or floral fragrances can complement luxury villas and premium developments." })}
            </div>

            <section id="sales-gallery" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <BuildingStorefrontIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Sales gallery</span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">Sales Galleries and Reception Areas</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>The sales gallery is often the first point of contact for potential buyers. A subtle, welcoming fragrance can help establish a pleasant atmosphere while visitors explore property brochures, project models, and investment opportunities.</p>
              </div>
            </section>

            <section id="show-apartments" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <HomeIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Show apartments</span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">Show Apartments and Villas</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>Show properties allow buyers to imagine themselves living in the space. Introducing a suitable fragrance can complement the furniture, lighting, and interior styling, helping create a consistent sensory experience throughout the viewing.</p>
              </div>
            </section>

            <section id="luxury-developments" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <BuildingOffice2Icon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Luxury developments</span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">Luxury Property Developments</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>Premium residential developments can use signature fragrances to reinforce their brand identity. Carefully selected aromas can complement elegant interiors and create a distinctive atmosphere across showrooms, reception areas, and selected common spaces.</p>
              </div>
            </section>

            <section id="sales-offices" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <UserGroupIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Sales offices</span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">Property Sales Offices</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>Scent marketing can also be used in sales offices and customer lounges. A consistent fragrance helps maintain a pleasant environment for consultations, presentations, and discussions with prospective buyers.</p>
              </div>
            </section>

            <section id="fragrance-selection" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <ChartBarIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Fragrance selection</span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">Choosing the Right Fragrance for Your Property</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>Selecting the right fragrance depends on the property's design, target audience, and brand positioning.</p>
                <ul className="space-y-4 pl-6">
                  <li className="flex gap-3"><CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-600" /> <span><strong>Fresh and clean fragrances:</strong> Suitable for contemporary apartments, modern interiors, and minimalist spaces.</span></li>
                  <li className="flex gap-3"><CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-600" /> <span><strong>Woody and musky fragrances:</strong> Complement sophisticated interiors and premium residential developments.</span></li>
                  <li className="flex gap-3"><CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-600" /> <span><strong>Floral fragrances:</strong> Can create a soft, welcoming atmosphere in selected residential settings.</span></li>
                  <li className="flex gap-3"><CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-600" /> <span><strong>Citrus fragrances:</strong> Offer a fresh character that may suit reception areas, sales galleries, and contemporary properties.</span></li>
                </ul>
                <p>The fragrance should remain subtle and comfortable rather than overpowering. Testing different aromas in the actual viewing environment helps developers identify an appropriate scent.</p>
              </div>
            </section>

            <section id="diffuser-solutions" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <SparklesIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Diffuser solutions</span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">Professional Aroma Diffuser Solutions</h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>Professional aroma diffuser machines provide a convenient way to introduce fragrance into property viewing environments. Depending on the layout and ventilation system, developers can choose desktop diffusers, standalone machines, or HVAC-integrated scenting solutions.</p>
                <p>At <a href="https://www.coolmaxscent.com/" className={linkClass}>Cool Max Scent – Feel of Nature</a>, we provide professional scent marketing solutions for real estate developers, property showrooms, sales galleries, and luxury residential spaces across the UAE and Qatar.</p>
                <p>Our aroma diffuser machines and fragrance collections help businesses create consistent, welcoming environments tailored to their spaces.</p>
              </div>
            </section>

            <section id="cta" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="border-l-4 border-cyan-500 bg-white p-7 shadow-sm">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-cyan-700">Property experience enhancement</p>
                <h2 className="font-serif text-4xl leading-tight text-slate-950">Create a Memorable Property Viewing Experience</h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                  <p>Enhance your sales galleries, show apartments, and luxury developments with professional scent marketing solutions.</p>
                  <p>Make every property visit a memorable experience with professionally selected fragrances and innovative scent diffusion solutions. Create an inviting atmosphere that complements your property's design and brand identity.</p>
                  <p>Discover our <a href="https://www.coolmaxscent.com/" className={linkClass}>scent marketing solutions</a> and find the right fragrance for your property development.</p>
                </div>
              </div>
            </section>
          </article>

          <aside className="h-fit lg:sticky lg:top-28 lg:col-span-2">
            <div className="bg-slate-950 p-6 text-white">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">Key benefits</p>
              <ul className="space-y-4 text-sm leading-6 text-slate-300">
                {[ 
                  "Enhance first impressions",
                  "Strengthen brand identity",
                  "Increase buyer engagement",
                  "Create a luxury property atmosphere"
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/contact/" className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:text-cyan-300">
                Talk to an expert <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-28 lg:px-16">
          <div className="bg-cyan-700 px-8 py-14 text-white md:px-16">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-100">Create a luxurious fragrance experience</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Transform every property viewing with premium aroma diffuser solutions and signature fragrances from Cool Max Scent.
            </h2>
            <a
              href="/products/"
              className="mt-8 inline-flex items-center gap-3 bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-slate-950"
            >
              Explore Scent Solutions <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

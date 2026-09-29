import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import BlogHeroImg from "../../asset/blogimg/blog63.webp";

const sections = [
  { id: "fragrance-consistency", label: "What Is Fragrance Consistency?" },
  { id: "why-consistency", label: "Why Consistent Scent Matters" },
  { id: "standardise-scent", label: "How to Standardise Your Brand's Scent" },
  { id: "coolmax-solutions", label: "Build a Consistent Scent Identity" },
];

const brandBenefits = [
  {
    title: "Creates a Recognisable Brand Experience",
    paragraphs: [
      "Customers can associate particular smells with places and experiences. A signature fragrance can become part of your brand identity, helping customers recognise your business through scent as well as visual branding.",
      "For hotels, retail stores, restaurants, salons and corporate spaces, this can contribute to a more distinctive environment.",
    ],
  },
  {
    title: "Provides a Consistent Customer Experience",
    paragraphs: [
      "Imagine visiting two branches of the same business and experiencing completely different environments. Inconsistent fragrance intensity can affect how customers perceive the spaces.",
      "Standardising your scent profile and diffuser settings helps maintain a more consistent atmosphere across locations.",
    ],
  },
  {
    title: "Supports Professional Brand Image",
    paragraphs: [
      "A well-managed fragrance environment can make commercial spaces feel more welcoming and professionally maintained. This is particularly important for businesses where customers spend significant time inside the premises.",
      "The goal is not necessarily to make a space smell strong. Instead, the fragrance should be balanced and appropriate for the environment.",
    ],
  },
  {
    title: "Makes Multi-Branch Management Easier",
    paragraphs: ["Managing fragrance across multiple locations can become complicated without a standard process."],
  },
];

const scentGuidelines = [
  "Approved fragrance oils",
  "Diffuser models",
  "Fragrance intensity",
  "Operating schedules",
  "Maintenance",
  "Oil replacement",
  "Branch-level monitoring",
];

export default function FragranceConsistencyBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Why Fragrance Consistency Matters for Multi-Branch Businesses | Cool Max Scent";

    const setMetaContent = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMetaContent(
      "description",
      "Learn why consistent brand fragrance matters for multi-branch businesses and how standardised scent solutions create a memorable, recognisable customer experience. Contact Us!"
    );
    setMetaContent(
      "keywords",
      "fragrance consistency for multi-branch businesses, scent marketing for businesses, brand scent consistency, professional scent diffuser"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/fragrance-consistency-multi-branch-businesses/"
    );
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f8f6] pt-16 text-slate-900 selection:bg-cyan-100">
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-16 lg:px-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 border-l-2 border-cyan-600 pl-3 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-800">
              <SparklesIcon className="h-4 w-4" /> Brand scent strategy
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Why Fragrance Consistency Matters in Multi-Branch Businesses: A Guide to Standardising Your Brand's Scent
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              When customers walk into different branches of the same business, they expect a consistent experience. They recognise the brand through its logo, colours, service, music and even its environment. But one powerful branding element is often overlooked: fragrance.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              A consistent brand scent can help businesses create a familiar atmosphere across multiple locations while strengthening the overall customer experience.
            </p>
            <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              <ClockIcon className="h-4 w-4 text-cyan-700" /> 6 min read
              <span className="h-1 w-1 rounded-full bg-cyan-600" /> Multi-branch scenting
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -bottom-5 -left-5 hidden h-28 w-28 border-b-2 border-l-2 border-cyan-600 lg:block" />
            <div className="relative overflow-hidden border border-white bg-white p-2 shadow-[0_28px_70px_-30px_rgba(15,80,78,0.35)]">
              <img
                src={BlogHeroImg}
                alt="Consistent fragrance experience across multiple business branches"
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="flex items-center justify-between gap-3 px-3 py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">Brand scent consistency</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-cyan-800">One identity · Every branch</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-slate-200 bg-white/70">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-6 py-8 sm:grid-cols-3 lg:px-16">
          {[
            ["Recognisable", "Create a familiar scent experience at every location."],
            ["Standardised", "Align fragrance, diffuser settings, and maintenance."],
            ["Welcoming", "Keep every branch balanced and appropriate for its space."],
          ].map(([title, description]) => (
            <div key={title} className="border-l-2 border-cyan-600 pl-4">
              <p className="font-serif text-2xl text-slate-950">{title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-12 lg:px-16 lg:py-20">
        <aside className="h-fit lg:sticky lg:top-28 lg:col-span-3">
          <div className="border-t-2 border-cyan-700 pt-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-800">In this article</p>
            <nav aria-label="Article sections" className="space-y-1">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex gap-3 border-l border-slate-200 px-3 py-2 text-sm leading-5 text-slate-600 transition hover:border-cyan-700 hover:text-cyan-900"
                >
                  <span className="text-xs font-bold text-cyan-700">{String(index + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              ))}
            </nav>
            <a href="/contact/" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-900 transition hover:text-cyan-800">
              Talk to our team <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </aside>

        <article className="min-w-0 space-y-14 lg:col-span-6">
          <section id="fragrance-consistency" className="scroll-mt-28">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-800">The foundation</p>
            <h2 className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">What Is Fragrance Consistency?</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
              <p>Fragrance consistency means using the same carefully selected scent profile across your business locations. Whether customers visit your Dubai, Abu Dhabi or Sharjah branch, the environment should deliver a similar olfactory experience.</p>
              <p>For businesses with multiple branches, this requires more than simply purchasing the same fragrance oil. Differences in diffuser equipment, room size, ventilation, operating hours and fragrance concentration can affect how a scent is experienced.</p>
              <p>A professional scent strategy helps standardise these factors.</p>
            </div>
          </section>

          <section id="why-consistency" className="scroll-mt-28 border-t border-slate-200 pt-9">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-800">The customer experience</p>
            <h2 className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">Why Consistent Scent Matters for Your Brand</h2>
            <div className="mt-7 space-y-8">
              {brandBenefits.map((benefit, index) => (
                <section key={benefit.title}>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                    <h3 className="font-serif text-xl leading-snug text-slate-950">{index + 1}. {benefit.title}</h3>
                  </div>
                  <div className="ml-8 mt-3 space-y-4 text-base leading-7 text-slate-600">
                    {benefit.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {index === 3 && (
                      <>
                        <p>Businesses can establish guidelines for:</p>
                        <ul className="space-y-3 border-l border-cyan-200 pl-5">
                          {scentGuidelines.map((guideline) => <li key={guideline}>{guideline}</li>)}
                        </ul>
                        <p>These standards make it easier for teams to maintain a consistent experience.</p>
                      </>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="standardise-scent" className="scroll-mt-28 border-t border-slate-200 pt-9">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-800">A repeatable approach</p>
            <h2 className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">How to Standardise Your Brand's Scent</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
              <p>Start by selecting a fragrance that matches your brand personality and target audience. Next, choose suitable commercial scent diffusers based on each location's size, ventilation and requirements.</p>
              <p>Create a simple scent guideline that documents the approved fragrance, diffuser settings and maintenance schedule. Regular checks can then ensure each branch follows the same standards.</p>
              <p>For larger businesses, centralised scent management and professional commercial fragrance solutions can make maintaining consistency across multiple locations much easier.</p>
            </div>
          </section>

          <section id="coolmax-solutions" className="scroll-mt-28 border-t border-slate-200 pt-9">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-800">Cool Max Scent</p>
            <h2 className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">Build a Consistent Scent Identity With Cool Max Scent</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
              <p>Your brand experience should feel familiar wherever customers interact with your business. <a href="https://www.coolmaxscent.com/" className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-900 hover:decoration-blue-500">Cool Max Scent</a> provides professional aroma diffusers, fragrance oils and commercial scent solutions designed for businesses across the UAE.</p>
              <p>From hotels and restaurants to retail stores, offices and other commercial spaces, the right scent strategy can help create a consistent and welcoming environment across every branch.</p>
              <p>Make your brand recognisable—not just by what customers see, but by what they experience.</p>
            </div>
          </section>
        </article>

        <aside className="h-fit border-t-2 border-slate-900 pt-5 lg:sticky lg:top-28 lg:col-span-3">
          <BuildingOffice2Icon className="h-6 w-6 text-cyan-700" />
          <p className="mt-3 font-serif text-2xl leading-snug text-slate-950">One brand. A familiar experience at every branch.</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">Set clear standards for fragrance, professional scent diffusers, operating schedules, and maintenance across every location.</p>
          <a href="/contact/" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-cyan-800 transition hover:text-slate-950">
            Contact us today <ArrowRightIcon className="h-4 w-4" />
          </a>
        </aside>
      </section>

      <section className="bg-cyan-700 text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-16 lg:py-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">Cool Max Scent · Feel of Nature</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">Ready to create a consistent signature scent across all your branches?</h2>
              <div className="mt-4 max-w-2xl space-y-3 text-base leading-7 text-white/85">
                <p>Talk to Cool Max Scent today to explore professional scent diffuser and fragrance solutions for your business.</p>
                <p>Contact us today and create a memorable fragrance experience across every location.</p>
              </div>
            </div>
            <a href="/contact/" className="inline-flex w-fit items-center gap-3 border border-white/60 px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] transition hover:bg-white hover:text-cyan-800">
              Contact Us <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
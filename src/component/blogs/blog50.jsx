import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import BlogHeroImg from "../../asset/blogimg/blog50.webp";

const sections = [
  {
    id: "start-with-air-volume-not-floor-area",
    title: "Start with air volume, not floor area",
    content: [
      "Most operators size a system by square metres. That undercounts badly. A 200 sqm retail floor with a 3-metre ceiling holds 600 cubic metres of air. The same footprint in a mall atrium with a 9-metre ceiling holds 1,800. Fragrance disperses through volume, not area, so the atrium needs roughly three times the output to register the same strength at nose height.",
      "Measure length x width x ceiling height before specifying any machine.",
    ],
  },
  {
    id: "factor-in-hvac-air-changes",
    title: "Factor in HVAC air changes",
    content: [
      "In UAE commercial buildings, air conditioning runs almost continuously, and that changes the calculation. A space with six air changes per hour replaces its entire volume every ten minutes. Fragrance is being diluted and extracted as fast as it is introduced.",
      "High air-change environments such as gyms, commercial kitchens and clinics need higher output or shorter cycle intervals. Low air-change spaces like private offices and treatment rooms need noticeably less than a machine's default setting.",
    ],
  },
  {
    id: "match-intensity-to-dwell-time",
    title: "Match intensity to dwell time",
    content: [
      "The longer someone stays, the less fragrance they need. Intensity should reflect how quickly visitors move through each space.",
      "High intensity suits mall entrances, hotel drop-off areas, showroom lobbies and gym reception, where visitors pass through in seconds and the scent has to register immediately.",
      "Medium intensity suits retail floors, restaurants, banking halls and corridors, where visitors stay 10 to 40 minutes. The fragrance should be present, but not the main event.",
      "Low intensity suits spas, salons, treatment rooms, waiting areas and private offices, where occupants stay 45 minutes or longer. Anything stronger becomes fatiguing and generates complaints.",
    ],
  },
  {
    id: "calibrate-over-a-week-not-a-day",
    title: "Calibrate over a week, not a day",
    content: [
      "Set the system to roughly 40% of maximum output and leave it alone for seven days.",
      "Then collect feedback, but not from your own team. Staff working inside a scented space develop olfactory adaptation within two to three days and will consistently report the fragrance as too weak. Ask arriving visitors instead, ideally within the first minute of entry, when perception is sharpest.",
      "Adjust in small increments. Moving from 40% to 55% is a meaningful change; jumping straight to 90% almost always overshoots.",
    ],
  },
  {
    id: "review-it-seasonally",
    title: "Review it seasonally",
    content: [
      "Summer shifts the equation. Buildings run colder, doors stay shut, and humidity inside conditioned spaces drops. Cooler, drier air carries fragrance less efficiently, so a setting calibrated in January often reads as weak by July.",
      "Review intensity twice a year: once entering summer and once entering the cooler months.",
    ],
  },
  {
    id: "the-takeaway",
    title: "The takeaway",
    content: [
      "Fragrance intensity is a system setting, not a fixed specification. Volume, air changes, dwell time and season all move it. Get those four right and the same oil that felt overwhelming in a treatment room will feel exactly right across a mall floor.",
      <React.Fragment key="cool-max-link"><a href="https://www.coolmaxscent.com/">Cool Max Scent</a> surveys the space and calibrates output before handover, then reviews it after the first month in operation. <a href="https://claude.ai/contact">Contact us</a> for a site assessment anywhere in the UAE or Qatar.</React.Fragment>,
    ],
  },
];

const linkClass = "font-semibold text-blue-600 underline decoration-blue-500/40 underline-offset-4 transition hover:text-blue-500";

export default function CommercialFragranceIntensityGuideBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Right Scent Intensity for Every Commercial Space Type | Cool Max Scent";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Too strong drives customers out, too weak wastes budget. Here's how to calibrate fragrance intensity for UAE commercial spaces, room by room. Contact Us!");
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://coolmaxscent.com/blog/commercial-fragrance-intensity-guide/");
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f7fa] pt-20 font-sans text-slate-900 selection:bg-blue-100">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-10 lg:px-16 lg:pb-20 lg:pt-16">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-9 flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-blue-600"><span className="h-px w-10 bg-blue-500" /><SparklesIcon className="h-4 w-4" /> Commercial scenting / Field guide 50</motion.div>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="max-w-2xl font-serif text-4xl leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">How to Select the Right Fragrance Intensity for Different Commercial Spaces</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Most scent marketing failures are not fragrance choices - they are intensity settings. Getting intensity right is less about preference and more about four measurable variables.</p>
              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200 pt-5 text-xs font-black uppercase tracking-[0.16em] text-slate-500"><span className="flex items-center gap-2 text-blue-600"><ClockIcon className="h-4 w-4" /> 8 min read</span><span className="h-1 w-1 rounded-full bg-blue-500" /><span>UAE & Qatar</span></div>
              <a href="#start-with-air-volume-not-floor-area" className="mt-8 inline-flex items-center gap-2 bg-blue-600 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-slate-950">Explore the guide <ArrowRightIcon className="h-4 w-4" /></a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative overflow-hidden border border-slate-200 bg-slate-100 p-2 shadow-[16px_16px_0_0_rgba(37,99,235,0.12)]">
              <img src={BlogHeroImg} alt="Commercial fragrance intensity guide" className="aspect-[16/9] w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 lg:grid-cols-[250px_1fr] lg:px-16 lg:py-20">
        <nav aria-label="Article sections" className="h-fit border-l-2 border-blue-500 pl-5 lg:sticky lg:top-28">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-slate-400">Inside this guide</p>
          <div className="space-y-4">{sections.map((section, index) => <a key={section.id} href={`#${section.id}`} className="block text-sm font-semibold leading-5 text-slate-600 transition hover:text-blue-600"><span className="mr-2 font-mono text-xs text-blue-500">0{index + 1}</span>{section.title}</a>)}</div>
        </nav>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <motion.section key={section.id} id={section.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className="scroll-mt-28 border border-slate-200 bg-white p-7 shadow-[0_12px_35px_-25px_rgba(15,23,42,0.4)] md:p-10">
              <div className="mb-7 flex items-start gap-5 border-b border-slate-100 pb-6"><span className="font-mono text-4xl font-bold leading-none text-blue-500/50">0{index + 1}</span><div><div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600"><BuildingOffice2Icon className="h-4 w-4" /> Calibration point</div><h2 className="font-serif text-3xl leading-tight tracking-tight text-slate-950 md:text-4xl">{section.title}</h2></div></div>
              <div className="max-w-4xl space-y-5 pl-0 text-lg leading-8 text-slate-600 md:pl-[4.25rem]">{section.content.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="[&>a]:font-semibold [&>a]:text-blue-600 [&>a]:underline [&>a]:decoration-blue-500/40 [&>a]:underline-offset-4">{paragraph}</p>)}</div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}

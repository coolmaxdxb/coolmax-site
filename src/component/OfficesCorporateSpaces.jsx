import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import heroImage from "../asset/hero/office1.webp";
import heroImage2 from "../asset/hero/office2.webp";

export default function OfficesCorporateSpaces() {
  const whatsappNumber = "+971509282702";
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Aroma Diffuser for Corporate Office in Dubai | CoolMax Scent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Upgrade your workplace with an aroma diffuser for the corporate office in Dubai. Explore office fragrance solutions, HVAC scenting and commercial diffusers."
      );
    }
  }, []);

  const trustIndicators = [
    "Serving Businesses Across the UAE Since 2020",
    "Commercial & HVAC Scenting Specialists",
    "Premium Fragrance Solutions",
    "Professional Installation & After-Sales Support",
  ];

  const challenges = [
    "Lingering odours in reception areas, meeting rooms, and pantries can affect the office experience.",
    "A stale reception area may not reflect your company’s professional image.",
    "Standard air fresheners often fail to provide consistent fragrance across large office spaces.",
    "Inconsistent indoor environments can reduce the overall workplace experience.",
    "A fresh and inviting atmosphere helps create a more comfortable workplace for employees and visitors.",
  ];

  const solutions = [
    { title: "Reception Areas", desc: "Create a welcoming first impression for clients, visitors, and business partners." },
    { title: "Executive Cabins", desc: "Maintain a sophisticated atmosphere in leadership spaces with elegant fragrance diffusion." },
    { title: "Open Workstations", desc: "Provide employees with a consistently pleasant work environment without overpowering shared spaces." },
    { title: "Meeting Rooms", desc: "Keep conference and training spaces fresh and professional throughout the day." },
    { title: "Conference Rooms", desc: "Enhance the ambience of large conference spaces with reliable fragrance coverage." },
    { title: "Training Rooms", desc: "Create a comfortable atmosphere for seminars, workshops, and employee development sessions." },
  ];

  const recommendedDiffusers = [
    {
      title: "Medium-Sized Offices",
      subtitle: "AeroBlack Med",
      desc: "For open workspaces, administrative offices, and training rooms, our commercial aroma diffusers provide reliable fragrance coverage.",
    },
    {
      title: "Large Corporate Buildings",
      subtitle: "AeroBlack Pro",
      desc: "For offices with central air-conditioning, our HVAC-integrated scenting systems deliver consistent fragrance across multiple floors.",
    },
    {
      title: "Executive Offices & Reception Areas",
      subtitle: "NanoPillar Diffuser",
      desc: "Create a premium first impression with elegant floor-standing aroma diffusers that blend into modern office interiors.",
    },
    {
      title: "Meeting Rooms & Shared Spaces",
      subtitle: "AeroMax Pro",
      desc: "Compact wall-mounted diffusers help maintain a pleasant atmosphere in enclosed spaces while saving valuable floor space.",
    },
  ];

  const features = [
    {
      title: "Smart Fragrance Distribution",
      desc: "Engineered to provide even fragrance coverage across office spaces without overwhelming employees or visitors.",
    },
    {
      title: "Quiet Performance",
      desc: "Our diffuser systems operate quietly, making them suitable for executive offices, meeting rooms, and open workspaces where minimal disruption is essential.",
    },
    {
      title: "Flexible Installation Options",
      desc: "Choose from desktop, wall-mounted, floor-standing, or HVAC-integrated systems based on your office layout and operational needs.",
    },
    {
      title: "Premium Fragrance Compatibility",
      desc: "Compatible with high-quality fragrance oils that help maintain a consistent and professional office atmosphere.",
    },
    {
      title: "Suitable for Every Office Size",
      desc: "From compact workspaces to multi-floor corporate buildings, our solutions are scalable to match your business requirements.",
    },
    {
      title: "Reliable Commercial Performance",
      desc: "Built for continuous operation, our commercial aroma diffusers are designed to deliver dependable fragrance throughout the working day while requiring minimal maintenance.",
    },
  ];

  const comparisonRows = [
    { left: "Temporary fragrance", right: "Continuous fragrance diffusion" },
    { left: "Uneven scent coverage", right: "Consistent fragrance across office spaces" },
    { left: "Frequent replacement", right: "Long-lasting fragrance performance" },
    { left: "Basic odour masking", right: "Creates a professional office atmosphere" },
  ];

  const faqs = [
    {
      question: "How much does a commercial aroma diffuser cost in Dubai?",
      answer: "The cost depends on the size of your office, the type of diffuser, the area to be covered, and whether you need a standalone or HVAC-integrated system.",
    },
    {
      question: "Which diffuser is best for reception areas?",
      answer: "For premium reception spaces, floor-standing models are ideal, while wall-mounted or compact diffusers suit smaller areas.",
    },
    {
      question: "Can office aroma diffusers help create a better first impression for clients?",
      answer: "Absolutely. A fresh and inviting reception area can positively influence how clients and visitors perceive your company.",
    },
    {
      question: "How do I know if my office needs a standalone or HVAC scenting system?",
      answer: "The right solution depends on office size, layout, and existing air-conditioning. Standalone units work well for smaller rooms, while HVAC systems are better for multi-floor buildings.",
    },
    {
      question: "Why are more businesses investing in professional office scenting?",
      answer: "It helps create welcoming environments, strengthen brand image, improve client experiences, and maintain a fresh atmosphere throughout the workplace.",
    },
    {
      question: "What should I consider before installing an office aroma diffuser?",
      answer: "Consider your office size, coverage area, ventilation setup, fragrance intensity, and the spaces you want to fragrance the most.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      <link rel="canonical" href="https://www.coolmaxscent.com/industries/aroma-diffuser-for-corporate-office-dubai/" />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.06),_transparent_35%)]" />
      </div>

      <main className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-24 pb-20">
        <section className="grid items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-blue-700">
              <SparklesIcon className="h-4 w-4" />
              Offices & Corporate Spaces
            </div>
            <h1 className="text-4xl font-serif leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="text-blue-600">Aroma Diffuser</span> for Corporate Office in Dubai
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Transform your workplace with professional <span className="font-semibold text-slate-900">office aroma diffuser solutions</span> in Dubai. From executive cabins to large corporate offices, our commercial scenting systems create a fresh, welcoming atmosphere for employees and visitors across the UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-slate-900 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-blue-600">
                Request a Free Consultation
              </a>
              <a href={`https://wa.me/${whatsappNumber.replace('+', '')}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Get a Free Quote
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm">
                  <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-[3rem] bg-blue-50" />
            <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-4 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.3)]">
              <img src={heroImage} alt="Office Aroma Diffuser in Dubai" className="h-full w-full rounded-[2rem] object-cover" />
            </div>
          </motion.div>
        </section>

        <section className="rounded-[3rem] border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-[0_30px_70px_-25px_rgba(15,23,42,0.45)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">Create a workplace that leaves a lasting impression</p>
              <h2 className="mt-4 text-3xl font-serif tracking-tight sm:text-xl">
                A fresh, welcoming office environment enhances employee comfort, strengthens your professional image, and creates a positive first impression for clients and visitors.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                At <span className="font-semibold text-white">CoolMax Scent</span>, we provide <span className="font-semibold text-blue-200">Aroma Diffusers for Corporate Offices in Dubai</span> designed for reception areas, meeting rooms, executive cabins, and open-plan workspaces.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-lg backdrop-blur-sm">
              <img src={heroImage2} alt="Office fragrance solution in Dubai" className="h-72 w-full rounded-[1.4rem] object-fill" />
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">The challenges businesses face</p>
            <h2 className="mt-4 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Modern offices need more than traditional air fresheners to stay fresh and polished.
            </h2>
            <div className="mt-8 space-y-4">
              {challenges.map((item, index) => (
                <div key={index} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-slate-700">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-100 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">Why choose CoolMax Scent</p>
            <h2 className="mt-4 text-3xl font-serif tracking-tight sm:text-4xl">
              Purpose-built office scenting for business environments.
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { title: "Commercial Office Scenting Expertise", desc: "We specialise in aroma diffuser systems for corporate offices, business centres, reception areas, executive cabins, meeting rooms, and large commercial buildings." },
                { title: "Tailored Solutions for Every Office Size", desc: "Whether you need a compact diffuser for a meeting room or an HVAC-integrated system for a multi-floor building, we provide customised recommendations." },
                { title: "Professional Installation & Ongoing Support", desc: "Our team provides guidance from product selection through installation and after-sales support." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Recommended aroma diffusers</p>
            <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Find the right office aroma diffuser for your workspace.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {recommendedDiffusers.map((item) => (
              <div key={item.subtitle} className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <CubeTransparentIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Recommended Solution: {item.subtitle}</p>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_25px_70px_-25px_rgba(15,23,42,0.18)] md:p-12">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Where our office diffusers work</p>
              <h2 className="mt-4 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Suitable for the spaces that shape your daily work experience.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                From reception areas to executive cabins, our scenting solutions are designed to complement the way modern workplaces function every day.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {solutions.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
                  <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <BuildingOffice2Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Features of our office diffuser solutions</p>
            <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Features of Our Office Aroma Diffuser Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Our commercial aroma diffuser systems are designed to meet the demands of modern workplaces while delivering reliable fragrance performance.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {features.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex rounded-2xl bg-blue-50 p-2 text-blue-600">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-[3rem] border border-slate-100 bg-slate-50 p-8 md:p-12">
            <h2 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why invest in an <span className="text-blue-600">office aroma diffuser</span>?
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Creates a welcoming first impression",
                "Enhances the workplace atmosphere",
                "Delivers consistent fragrance throughout the office",
                "Suitable for small offices and large corporate spaces",
                "Quiet, energy-efficient, and low maintenance",
                "Multiple installation options, including HVAC systems",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
            <h2 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why professional aroma diffusers are better than traditional air fresheners
            </h2>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-900 px-6 py-4 text-sm font-black uppercase tracking-[0.25em] text-white">
                <span>Traditional Air Fresheners</span>
                <span>CoolMax Scent Office Aroma Diffusers</span>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.left} className="grid grid-cols-2 border-t border-slate-200 text-sm text-slate-700">
                  <div className="border-r border-slate-200 px-6 py-4">{row.left}</div>
                  <div className="px-6 py-4 text-slate-900">{row.right}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to know before installing an office diffuser.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                    <ChevronDownIcon className={`h-5 w-5 shrink-0 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen ? <p className="mt-4 text-md leading-7 text-slate-600">{item.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="py-8">
          <div className="rounded-[3rem] border border-blue-100 bg-blue-50 p-8 md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">Ready to create a more welcoming workplace?</p>
                <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Enhance your office environment with professional office aroma diffuser solutions from CoolMax Scent.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  From consultation and product selection to installation and ongoing support, we provide reliable <span className="font-semibold text-slate-900">Corporate Scenting Solutions UAE</span> tailored to your workplace.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/${whatsappNumber.replace('+', '')}`} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-blue-600">
                  Speak with Our Experts
                </a>
                <a href="/contact/" className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-20">
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Contact form section</p>
                <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Get a free office scenting consultation.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Looking for the right <span className="font-semibold text-slate-900">Aroma Diffuser for Corporate Office in Dubai</span>? Complete the form below and our team will recommend the best fragrance solution based on your office size, layout, and business requirements.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Full Name" />
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Company Name" />
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Email Address" />
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Phone Number" />
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Office Location" />
                  <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Office Size" />
                </div>
                <input className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Preferred Diffuser Type" />
                <textarea className="mt-4 min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Message" />
                <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-blue-600">
                  Request My Free Quote
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

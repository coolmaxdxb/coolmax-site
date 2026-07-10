import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/blogimg/blog42.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function CorporateOfficeAromaDiffuserBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Aroma Diffuser for Corporate Office in Dubai | CoolMax Scent";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore why office ambience is essential for modern workplaces and how an aroma diffuser for corporate office in Dubai supports a welcoming office."
      );
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }

    metaKeywords.setAttribute(
      "content",
      "aroma diffuser for corporate office in Dubai, office fragrance solutions Dubai, corporate scenting solutions Dubai"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/aroma-diffuser-for-corporate-office-in-dubai"
    );
  }, []);

  const sectionLinks = [
    { label: "Why ambience matters", href: "#why-office-ambience-matters" },
    { label: "What creates a professional workspace", href: "#what-creates-a-professional-office-ambience" },
    { label: "Why fragrance is part of design", href: "#why-fragrance-is-part-of-modern-office-design" },
    { label: "Choosing the right diffuser", href: "#choosing-the-right-aroma-diffuser" },
    { label: "Common mistakes to avoid", href: "#common-office-ambience-mistakes" },
  ];

  const diffuserOptions = [
    {
      title: "MistBox X – Mid-Size Commercial Diffuser",
      description:
        "Ideal for executive cabins, private meeting rooms, and boardrooms where a refined atmosphere should feel calm and professional.",
      badge: "Executive Offices",
    },
    {
      title: "AeroBlack Med – Commercial Aroma Diffuser",
      description:
        "Designed for open-plan offices and shared workspaces that need balanced scent distribution across larger teams.",
      badge: "Open-Plan Offices",
    },
    {
      title: "AirPulse 150 – Large Area Aroma Diffuser",
      description:
        "Best suited for corporate headquarters, expansive office floors, and high-traffic business environments.",
      badge: "Corporate Headquarters",
    },
    {
      title: "AeroBlack Pro – HVAC-Integrated Scent Diffuser",
      description:
        "A smart solution for multi-floor office buildings that need consistent fragrance delivery through existing air systems.",
      badge: "Multi-Floor Buildings",
    },
  ];

  const highlights = [
    "Creates a welcoming first impression for clients and visitors",
    "Supports employee comfort, focus, and workplace satisfaction",
    "Reinforces brand identity without overpowering the space",
    "Compliments lighting, cleanliness, air quality, and interior design",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_42%,_#f4f9ff_100%)] pt-16 font-sans text-slate-900 selection:bg-blue-100">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-blue-100/80 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-sky-50/70 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white/80 p-8 shadow-[0_35px_100px_-35px_rgba(59,130,246,0.35)] backdrop-blur-sm md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">
                  <SparklesIcon className="h-4 w-4" />
                  Corporate Scenting Blog
                </div>
                <h1 className="text-4xl font-serif leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  Why corporate office ambience and aroma diffusers matter more than ever in Dubai
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Offices in Dubai are no longer viewed as simple workspaces. They have become environments for collaboration, brand expression, employee wellbeing, and memorable client experiences. A professionally installed <span className="font-semibold text-slate-900">Aroma Diffuser for Corporate Office in Dubai</span> helps complete that experience with a fresh, welcoming atmosphere that feels polished and consistent.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {sectionLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-3 shadow-lg">
                <img src={BlogHeroImg} alt="Corporate office aroma diffuser in Dubai" className="h-full w-full rounded-[1.4rem] object-cover" />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-100 bg-slate-900 p-8 text-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.45)]">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">Why it matters</p>
              <h2 id="why-office-ambience-matters" className="mt-3 text-3xl font-serif tracking-tight sm:text-4xl">
                Workplaces are evolving across Dubai
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The modern workplace has undergone a remarkable transformation. Offices are no longer viewed as spaces where employees simply complete daily tasks. Today, they serve as environments that inspire collaboration, strengthen company culture, support wellbeing, and create meaningful experiences for clients and business partners.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                In Dubai, where businesses continuously invest in innovative workplaces that reflect professionalism and forward-thinking values, every detail contributes to how a company is perceived. Office ambience has therefore become a strategic investment rather than an aesthetic upgrade.
              </p>
              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Business advantage</p>
              <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Why office ambience has become a business advantage
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Creating an attractive office is no longer just about appearance. The way an office feels can influence employee satisfaction, client confidence, and even how a company is remembered after a meeting has ended. As workplace expectations continue to evolve, office ambience has become a valuable business asset.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A client’s first impression is formed long before presentations begin or contracts are discussed. The reception area, meeting rooms, and common spaces all communicate the company’s standards and professionalism. An organised, clean, and comfortable office immediately creates confidence.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Many organisations now include an <span className="font-semibold text-slate-900">Aroma Diffuser for Corporate Office in Dubai</span> as part of their ambience strategy because fragrance subtly enhances the environment without drawing attention to itself. Instead of relying on temporary air fresheners, professional scenting helps maintain a consistently pleasant atmosphere throughout the day.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <motion.div {...fadeInUp} className="rounded-[2.5rem] border border-slate-100 bg-[linear-gradient(135deg,_#ffffff_0%,_#f6fbff_50%,_#eef7ff_100%)] p-8 shadow-sm md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">What creates a professional ambience</p>
                <h2 id="what-creates-a-professional-office-ambience" className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Exceptional office ambience is created by several elements working together
                </h2>
              </div>
              <div className="space-y-4 text-lg leading-8 text-slate-600">
                <p>
                  Lighting, cleanliness, air quality, interior design, and noise management all shape how a workplace feels. Offices with access to natural daylight often feel more energetic and inviting, while thoughtfully designed artificial lighting helps reduce eye strain and improves comfort throughout the day.
                </p>
                <p>
                  A clean workplace immediately communicates professionalism. Fresh indoor air, good ventilation, and properly maintained HVAC systems contribute to healthier offices, while well-planned interior design and quiet work zones create a balanced environment where employees can focus and visitors feel welcome.
                </p>
                <p>
                  Fragrance completes the workplace experience. A professionally installed <span className="font-semibold text-slate-900">Fragrance Diffuser for Corporate Office in Dubai</span> provides consistent scent distribution that complements other aspects of workplace design rather than masking unwanted odours.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <motion.div {...fadeInUp} className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Why fragrance belongs in office design</p>
              <h2 id="why-fragrance-is-part-of-modern-office-design" className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Fragrance is no longer an optional finishing touch
              </h2>
            </div>
            <p className="mb-8 text-lg leading-8 text-slate-600">
              Fragrance is no longer considered a decorative extra. Today, it is increasingly integrated into workplace design because office ambience is experienced through multiple senses, not just what employees and visitors see. When used professionally, fragrance supports the overall atmosphere without becoming distracting.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Reception areas",
                  text: "The reception area introduces visitors to the company’s brand and workplace culture. A fresh, inviting atmosphere helps create a positive first impression from the moment someone enters the office.",
                },
                {
                  title: "Meeting rooms",
                  text: "Meeting rooms host presentations, interviews, client discussions, and important decisions. A subtle fragrance contributes to a calm and comfortable environment without overpowering the space.",
                },
                {
                  title: "Executive cabins",
                  text: "Executive offices represent leadership and professionalism. Premium interiors deserve an atmosphere that matches the space, helping client meetings feel polished and refined.",
                },
                {
                  title: "Open workspaces",
                  text: "Open-plan offices require fragrance solutions that provide even coverage across larger areas without becoming too concentrated in one location.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <BuildingOffice2Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <motion.div {...fadeInUp} className="rounded-[2.5rem] border border-slate-100 bg-slate-900 p-8 text-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.45)] md:p-12">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">Best fit for every workplace</p>
              <h2 id="choosing-the-right-aroma-diffuser" className="mt-3 text-3xl font-serif tracking-tight sm:text-4xl">
                Choosing the right aroma diffuser for different office environments
              </h2>
            </div>
            <p className="mb-8 text-lg leading-8 text-slate-300">
              Creating an inviting office ambience starts with understanding that every workplace has different requirements. The size of the office, employee strength, visitor traffic, floor layout, and ventilation all influence how fragrance should be distributed. Businesses should select an <span className="font-semibold text-white">Aroma Diffuser for Corporate Office in Dubai</span> that complements their environment while maintaining a consistent atmosphere throughout the day.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {diffuserOptions.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-blue-500/20 p-3 text-blue-200">
                    <CubeTransparentIcon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">{item.badge}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <motion.div {...fadeInUp} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Common mistakes</p>
              <h2 id="common-office-ambience-mistakes" className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Common office ambience mistakes businesses often overlook
              </h2>
              <div className="mt-8 space-y-4 text-slate-600">
                {[
                  "Relying on temporary aerosol air fresheners instead of continuous scenting",
                  "Choosing fragrances that are too strong for enclosed meeting rooms or shared workspaces",
                  "Ignoring reception areas, waiting lounges, corridors, breakout spaces, and meeting rooms",
                  "Overlooking poor air quality, stale indoor air, and neglected HVAC systems",
                  "Using inconsistent fragrance solutions across different departments and spaces",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-100 bg-[linear-gradient(135deg,_#eff6ff_0%,_#f8fbff_60%,_#eef7ff_100%)] p-8 shadow-[0_25px_65px_-30px_rgba(59,130,246,0.28)]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">
                <ShieldCheckIcon className="h-4 w-4" />
                CoolMax Scent Advantage
              </div>
              <h3 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Building better office ambience with CoolMax Scent
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Creating exceptional office ambience requires more than attractive furniture or premium interiors. It involves bringing together lighting, air quality, cleanliness, interior design, and fragrance to create a workplace that feels as professional as it looks.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                At CoolMax Scent, we help businesses create workplaces that leave a lasting impression on employees, visitors, and clients alike. With tailored scenting solutions, commercial-grade diffusers, and expert guidance, we support businesses across Dubai in creating environments people enjoy returning to.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact/" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-blue-600">
                  Contact Our Team
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a href={`https://wa.me/${whatsappNumber.replace("+", "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.3em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Get a Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

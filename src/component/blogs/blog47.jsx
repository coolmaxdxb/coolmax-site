import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  BriefcaseIcon,
  BeakerIcon,
  TrophyIcon,
  TruckIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/blogimg/blog47.webp";

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
  viewport: { once: true, margin: "-50px" },
};

const cardHover = "transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)] hover:-translate-y-1";

const textLinkClass =
  "font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-500";
const darkTextLinkClass =
  "font-semibold text-blue-300 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-200";

export default function HvacScentingSystemsDubaiBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "HVAC Scenting Systems in Dubai: Top Commercial Spaces | Cool Max Scent";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discover which Dubai commercial spaces gain the most from HVAC scenting systems, hotels, retail, offices, clinics, gyms and showrooms."
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
      "HVAC scenting systems Dubai, commercial scenting Dubai, HVAC scent diffuser UAE, scent marketing for offices Dubai, central AC fragrance system"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://coolmaxscent.com/blog/hvac-scenting-systems-dubai-commercial-spaces/"
    );
  }, []);

  const sectionLinks = [
    { label: "Hotels & Hospitality", href: "#hotels-and-hospitality" },
    { label: "Retail & Malls", href: "#retail-stores-and-shopping-malls" },
    { label: "Corporate Offices", href: "#corporate-offices-and-co-working-spaces" },
    { label: "Healthcare Clinics", href: "#healthcare-clinics-and-dental-practices" },
    { label: "Gyms & Wellness", href: "#gyms-spas-and-wellness-centres" },
    { label: "Showrooms", href: "#automotive-and-property-showrooms" },
    { label: "Is Your Space HVAC-Ready?", href: "#is-your-space-hvac-ready" },
    { label: "Get a Scenting Plan", href: "#get-a-scenting-plan-for-your-space" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_42%,_#f4f9ff_100%)] pt-16 font-sans text-slate-900 selection:bg-blue-100">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-blue-100/80 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-sky-50/70 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-50/40 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* ========== HERO SECTION ========== */}
        <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden rounded-[2.5rem] border border-blue-100/60 bg-white/80 p-8 shadow-[0_35px_100px_-35px_rgba(59,130,246,0.35)] backdrop-blur-sm md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-blue-700"
                >
                  <SparklesIcon className="h-4 w-4" />
                  HVAC Scenting & Commercial Spaces
                </motion.div>

                <h1 className="mt-6 text-3xl font-serif tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.15]">
                  Top Commercial Spaces That Benefit Most from{" "}
                  <span className="italic text-blue-600">HVAC Scenting Systems</span> in Dubai
                </h1>

                <div className="mt-8 space-y-4 text-lg leading-8 text-slate-600 font-light">
                  <p>
                    Dubai runs on air conditioning. For most of the year, commercial buildings across the emirate stay sealed while central AC circulates air through ducts almost around the clock. That infrastructure is exactly why{" "}
                    <a
                      href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      HVAC scenting systems in Dubai
                    </a>{" "}
                    work so well — a single unit connected to your air handling unit distributes an even, controlled fragrance across thousands of square feet, with no visible devices, no plug points and no staff refilling bottles in the corner of the room.
                  </p>
                  <p>
                    But not every space earns the same return. Here are the commercial environments where{" "}
                    <a
                      href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      HVAC scenting
                    </a>{" "}
                    delivers the strongest impact.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <a
                    href="#hotels-and-hospitality"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-600/20 hover:-translate-y-0.5"
                  >
                    Explore Article
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <ChatBubbleLeftRightIcon className="h-4 w-4" />
                    Talk to Expert
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-600/20 rounded-[2.5rem] blur-xl opacity-60" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-2xl">
                  <img
                    src={BlogHeroImg}
                    alt="HVAC scenting systems in Dubai for commercial spaces including hotels, retail, offices, clinics, gyms and showrooms"
                    className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========== QUICK NAVIGATION / TOC ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16"
        >
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-600">Quick Navigation</p>
            <div className="flex flex-wrap gap-2">
              {sectionLinks.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION 1: Hotels and Hospitality ========== */}
        <section id="hotels-and-hospitality" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"
              >
                <BuildingOffice2Icon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Highest-Value Scenting Zone</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              1. Hotels and Hospitality
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                A hotel lobby is the single highest-value scenting zone in Dubai. It is the first sensory impression a guest receives, it is large and open-plan, and it is already served by a powerful central AC system.
              </p>
              <p>
                A signature scent diffused through the{" "}
                <a
                  href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  HVAC line
                </a>{" "}
                carries consistently from the entrance through reception to the lounge and lift lobbies — building the kind of brand memory that guests associate with a property years later.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 2: Retail Stores and Shopping Malls ========== */}
        <section id="retail-stores-and-shopping-malls" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50 p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"
              >
                <BuildingStorefrontIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Where Scent Converts to Sales</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              2. Retail Stores and Shopping Malls
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Retail is where scent converts directly into commercial outcomes. Ambient fragrance is linked to longer dwell time, and longer dwell time means more browsing and higher basket value.
              </p>
              <p>
                For fashion, jewellery and beauty retailers in Dubai's malls,{" "}
                <a
                  href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  HVAC scenting
                </a>{" "}
                removes the practical problem of standalone diffusers competing with heavy foot traffic and strong AC airflow.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 3: Corporate Offices and Co-Working Spaces ========== */}
        <section id="corporate-offices-and-co-working-spaces" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"
              >
                <BriefcaseIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">A Low-Cost Differentiator</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              3. Corporate Offices and Co-Working Spaces
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Sealed offices with recirculated air develop a stale, closed quality by mid-afternoon.{" "}
                <a
                  href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  HVAC scenting
                </a>{" "}
                with fresh citrus, green tea or light woody profiles keeps the environment feeling clean and alert.
              </p>
              <p>
                For co-working operators and Grade A office buildings competing on tenant experience, it is a low-cost differentiator that visitors notice immediately.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 4: Healthcare Clinics and Dental Practices ========== */}
        <section id="healthcare-clinics-and-dental-practices" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"
              >
                <BeakerIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Softening the Clinical Association</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              4. Healthcare Clinics and Dental Practices
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Clinics face a specific challenge: the clinical smell of disinfectant triggers anxiety in patients before treatment even begins.
              </p>
              <p>
                A subtle, neutralising fragrance delivered through the AC system softens that association across reception and waiting areas. Dental and aesthetic clinics in Dubai increasingly treat{" "}
                <a
                  href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  scenting
                </a>{" "}
                as part of the patient comfort experience rather than a decorative extra.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 5: Gyms, Spas and Wellness Centres ========== */}
        <section id="gyms-spas-and-wellness-centres" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"
              >
                <TrophyIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Odour Control & Mood Enhancement</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              5. Gyms, Spas and Wellness Centres
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                High-humidity, high-occupancy spaces need odour control as much as branding.{" "}
                <a
                  href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  HVAC scenting
                </a>{" "}
                handles both masking and neutralising perspiration and chlorine while reinforcing an energising or calming mood, depending on whether the zone is a training floor or a treatment room.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 6: Automotive and Property Showrooms ========== */}
        <section id="automotive-and-property-showrooms" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600"
              >
                <TruckIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Selling Aspiration Through Scent</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              6. Automotive and Property Showrooms
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Showrooms sell aspiration. A premium leather, oud or clean linen profile diffused across a large open floor supports a high-value purchase decision at exactly the moment the customer is evaluating it.
              </p>
              <p>
                Since showrooms are typically vast and ducted,{" "}
                <a
                  href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  HVAC scenting
                </a>{" "}
                is far more practical than multiple standalone units.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 7: Is Your Space HVAC-Ready? ========== */}
        <section id="is-your-space-hvac-ready" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-8 text-white shadow-2xl md:p-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-400 rounded-full mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex rounded-xl bg-blue-500/20 p-3 text-blue-300"
              >
                <KeyIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">Assessing Your Premises</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-white sm:text-4xl">
              Is Your Space HVAC-Ready?
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300 font-light">
              <p>
                HVAC scenting is the right choice when your premises have a central AC system or ducted split units, an area above roughly 300 square metres, and consistent daily operating hours.
              </p>
              <p>
                Smaller boutiques, meeting rooms and reception desks are usually better served by{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={darkTextLinkClass}
                >
                  standalone diffusers
                </a>{" "}
                or a hybrid setup combining both.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                "Central AC system or ducted split units",
                "Area above roughly 300 square metres",
                "Consistent daily operating hours",
                "Large open-plan commercial zones",
                "HVAC-integrated fragrance distribution",
                "Professional scenting across multiple zones",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs transition-all duration-500 hover:border-blue-400 hover:bg-white/10 hover:-translate-y-1"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-500/20 p-2.5 text-blue-300"
                  >
                    <CheckCircleIcon className="h-5 w-5" />
                  </motion.div>
                  <span className="font-medium text-slate-200">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ========== SECTION 8: Get a Scenting Plan for Your Space ========== */}
        <section id="get-a-scenting-plan-for-your-space" className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <motion.div
              variants={fadeInLeft}
              className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-blue-500 rounded-full mb-6"
              />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Cool Max Scent Approach</p>
              <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Get a Scenting Plan for Your Space
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  <a
                    href="https://www.coolmaxscent.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    Cool Max Scent
                  </a>{" "}
                  designs and installs{" "}
                  <a
                    href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    HVAC scenting systems
                  </a>{" "}
                  across Dubai and the wider UAE, including fragrance selection, AHU integration and ongoing refill servicing.
                </p>
                <p>
                  Contact our team for a site assessment and a scent recommendation built around your brand.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="rounded-[2.5rem] border border-blue-100 bg-[linear-gradient(135deg,_#eff6ff_0%,_#f8fbff_60%,_#eef7ff_100%)] p-8 shadow-[0_25px_65px_-30px_rgba(59,130,246,0.28)] md:p-12 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_35px_80px_-25px_rgba(59,130,246,0.35)]"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-700"
                >
                  <ShieldCheckIcon className="h-4 w-4" />
                  Cool Max Scent Solutions
                </motion.div>
                <h3 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Scent Your Entire Space From a Single Unit
                </h3>
                <div className="mt-5 space-y-4 text-slate-600 leading-relaxed font-light text-base">
                  <p>
                    HVAC scenting installed across Dubai and the UAE —{" "}
                    <a
                      href="https://www.coolmaxscent.com/hvac-scenting-solutions/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      AHU integration
                    </a>
                    , fragrance selection and refill servicing handled end to end.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                >
                  Contact Our Team
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:-translate-y-0.5 shadow-xs"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  Get a Free Quote
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
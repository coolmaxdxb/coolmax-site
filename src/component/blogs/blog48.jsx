import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  MapIcon,
  ShieldCheckIcon,
  BoltIcon,
  HeartIcon,
  StarIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/blogimg/blog48.webp";

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

const cardHover =
  "transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.15)] hover:-translate-y-1";

const textLinkClass =
  "font-semibold text-blue-600 underline decoration-blue-500/40 underline-offset-4 transition hover:text-blue-500 hover:decoration-blue-400";

export default function RetailStoreAromaDiffuserDubaiBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Retail Store Aroma Diffuser Dubai | Professional Scenting | CoolMax Scent";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Improve customer experience with a Retail Store Aroma Diffuser Dubai. Explore retail fragrance systems for stores, showrooms, and commercial spaces."
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
      "Retail Store Aroma Diffuser Dubai, retail fragrance systems Dubai, retail store scent diffuser Dubai, aroma diffuser Dubai, Fragrance Machine in Dubai, Scent Diffuser Machines in UAE, large area aroma diffuser, Commercial Aroma Diffusers in UAE, Floor-Standing Aroma Diffusers in UAE"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://coolmaxscent.com/blog/retail-store-aroma-diffuser-dubai/"
    );
  }, []);

  const sectionLinks = [
    { label: "Why Retail Needs Scent", href: "#why-every-retail-store-needs-professional-scent-solutions" },
    { label: "Customers Decide More", href: "#customers-decide-more-than-they-realise" },
    { label: "Beyond Selling Products", href: "#retail-is-no-longer-just-about-selling-products" },
    { label: "Fragrance & Behaviour", href: "#how-fragrance-influences-customer-behaviour-inside-a-store" },
    { label: "Hidden Challenges", href: "#the-hidden-challenges-retailers-face-every-day" },
    { label: "Professional vs Air Fresheners", href: "#why-professional-scent-solutions-outperform-ordinary-air-fresheners" },
    { label: "Different Scenting Needs", href: "#one-store-different-spaces-different-scenting-needs" },
    { label: "Retail Branding", href: "#fragrance-is-becoming-part-of-retail-branding" },
    { label: "CoolMaxScent", href: "#creating-better-shopping-experiences-with-coolmaxscent" },
  ];

  const behaviourCards = [
    {
      icon: StarIcon,
      title: "Creates a Positive First Impression",
      text: "The first few seconds inside a store are crucial. A pleasant fragrance can immediately create a sense of comfort and professionalism, helping customers feel relaxed as they begin their shopping journey. Instead of noticing stale air or lingering odours, they are welcomed into an environment that feels fresh, clean, and carefully maintained.",
    },
    {
      icon: UserGroupIcon,
      title: "Encourages Customers to Stay Longer",
      text: "The longer customers remain inside a store, the greater the opportunity for them to discover additional products. A welcoming atmosphere makes browsing feel effortless, encouraging shoppers to move through different sections without feeling rushed.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Enhances Perceived Product Quality",
      text: "Customers naturally associate premium environments with premium products. A store that looks organised, feels comfortable, and smells pleasant often creates a stronger impression of quality and attention to detail.",
    },
    {
      icon: HeartIcon,
      title: "Strengthens Emotional Connections",
      text: "Scents have a unique connection to memory. Long after customers forget promotional displays or seasonal decorations, they often remember how a place made them feel. Creating a distinctive fragrance experience helps retailers build emotional familiarity with their brand.",
    },
  ];

  const challengeCards = [
    {
      icon: BoltIcon,
      title: "Managing High Customer Footfall",
      text: "Busy retail stores welcome hundreds or even thousands of visitors each day. Continuous customer movement means entrances, checkout areas, and popular departments experience constant traffic, making it difficult to maintain a fresh environment throughout business hours.",
    },
    {
      icon: MapIcon,
      title: "Large Open Layouts Need Consistent Coverage",
      text: "Many modern retail stores feature spacious layouts that encourage customers to move freely between different product categories. While these open designs improve visibility, they also make it more challenging to maintain a uniform environment.",
    },
    {
      icon: CubeIcon,
      title: "Everyday Odours Can Affect the Shopping Experience",
      text: "Retail spaces naturally experience a variety of unwanted odours throughout the day. Entrances exposed to outdoor air, fitting rooms, product packaging, nearby cafés, food courts, storage areas, and heavy customer traffic can all influence the indoor environment.",
    },
    {
      icon: BuildingStorefrontIcon,
      title: "Maintaining Brand Consistency Across Multiple Locations",
      text: "For retailers operating more than one branch, consistency is essential. Customers expect the same welcoming experience regardless of which location they visit. Lighting, store layouts, visual displays, and customer service are often standardised to reflect the brand.",
    },
  ];

  const productCards = [
    {
      name: "AeroBlack Med",
      tag: "Medium Retail Spaces",
      desc: "Designed for businesses that require consistent fragrance throughout the day, helping create a welcoming atmosphere without overpowering the space.",
      href: "https://www.coolmaxscent.com/commercial-aroma-diffusers/aeroblack-med-diffuser/",
    },
    {
      name: "MistBox X",
      tag: "Compact & Stronger Performance",
      desc: "Offers wider fragrance coverage with easy maintenance, making it a practical choice for stores that experience steady customer traffic.",
      href: "https://www.coolmaxscent.com/commercial-aroma-diffusers/mistbox-x-diffuser/",
    },
    {
      name: "AeroPillar Diffuser",
      tag: "Premium Retail Interiors",
      desc: "Combines elegant design with steady fragrance diffusion, making it ideal for premium retail interiors where appearance matters.",
      href: "https://www.coolmaxscent.com/floor-standing-aroma-diffusers/aeropillar-diffuser/",
    },
    {
      name: "NanoPillar Diffuser",
      tag: "Medium to Large Stores",
      desc: "Delivers efficient fragrance coverage in a sleek floor-standing design, making it suitable for medium to large stores.",
      href: "https://www.coolmaxscent.com/floor-standing-aroma-diffusers/nano-pillar-diffuser/",
    },
    {
      name: "AirPole Pro Diffuser",
      tag: "High-Footfall Retail",
      desc: "Provides dependable fragrance coverage for larger areas and extended operating hours, helping retailers maintain a comfortable shopping atmosphere throughout the day.",
      href: "https://www.coolmaxscent.com/floor-standing-aroma-diffusers/airpole-pro-diffuser/",
    },
    {
      name: "Titan Diffuser",
      tag: "Supermarkets & Department Stores",
      desc: "Delivers reliable fragrance coverage for supermarkets, department stores, and other high-footfall retail environments.",
      href: "https://www.coolmaxscent.com/floor-standing-aroma-diffusers/titan-diffuser/",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pt-16 font-sans text-slate-900 selection:bg-blue-500/30">
      {/* Background Decorations */}
     

      <div className="relative z-10">
        {/* ========== HERO SECTION ========== */}
        <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_35px_100px_-35px_rgba(59,130,246,0.15)] md:p-12"
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
                  className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-blue-600"
                >
                  <SparklesIcon className="h-4 w-4" />
                  Retail Scenting & Professional Fragrance
                </motion.div>

                <h1 className="mt-6 text-3xl font-serif tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.15]">
                  Why Every Retail Store Needs a{" "}
                  <span className="italic text-blue-600">Retail Store Aroma Diffuser Dubai</span> Solution
                </h1>

                <div className="mt-8 space-y-4 text-lg leading-8 text-slate-600 font-light">
                  <p>
                    In the competitive retail industry, attracting customers through the door is only the first step. The real challenge begins the moment they enter your store. Every detail they encounter shapes their perception of your brand, often before they have looked at a single product. While visual displays, lighting, and customer service receive significant attention, one powerful element is frequently overlooked: fragrance.
                  </p>
                  <p>
                    A thoughtfully designed scent has the ability to influence emotions, create positive first impressions, and make shopping feel more enjoyable. This is why many successful retailers are investing in a{" "}
                    <a
                      href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      Retail Store Aroma Diffuser Dubai
                    </a>{" "}
                    solution to create inviting environments that customers genuinely enjoy spending time in.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <a
                    href="#why-every-retail-store-needs-professional-scent-solutions"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-400/30 hover:-translate-y-0.5"
                  >
                    Explore Article
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-slate-700 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-600 hover:shadow-lg hover:-translate-y-0.5"
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
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-600/20 rounded-[2.5rem] blur-xl opacity-60" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl">
                  <img
                    src={BlogHeroImg}
                    alt="Retail Store Aroma Diffuser Dubai for professional retail scenting in stores, showrooms and commercial spaces"
                    className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
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
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-600 hover:shadow-sm"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION 1: Why Every Retail Store Needs Professional Scent Solutions ========== */}
        <section id="why-every-retail-store-needs-professional-scent-solutions" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 ${cardHover}`}
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div variants={fadeInLeft} className="lg:sticky lg:top-28">
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
                    className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                  >
                    <BuildingStorefrontIcon className="h-6 w-6" />
                  </motion.div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Retail Advantage</p>
                </div>
                <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Why Every Retail Store Needs Professional Scent Solutions
                </h2>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4 text-lg leading-8 text-slate-600 font-light">
                <p>
                  Whether it is a boutique, fashion showroom, electronics store, furniture gallery, or a large retail outlet, the atmosphere inside your store can influence how customers feel, how long they stay, and how they remember your brand. Professional scenting is no longer considered an added luxury. It has become a practical business strategy for retailers who want to stand out in an increasingly experience-driven market.
                </p>
                <p>
                  Unlike visual branding, fragrance works subtly in the background, becoming part of the overall experience without demanding attention. A well-planned{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    Retail Store Scent Diffuser Dubai
                  </a>{" "}
                  solution creates a consistent and carefully balanced atmosphere that supports your brand identity throughout the shopping journey.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 2: Customers Decide More Than They Realise ========== */}
        <section id="customers-decide-more-than-they-realise" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-blue-600/[0.04] p-8 md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div variants={fadeInLeft}>
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
                    className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                  >
                    <UserGroupIcon className="h-6 w-6" />
                  </motion.div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Subconscious Influence</p>
                </div>
                <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Customers Decide More Than They Realise
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
                  <p>
                    Every customer forms an opinion within moments of stepping into a retail store. Before interacting with staff or examining products, they instinctively assess the environment around them. Bright displays, organised shelves, comfortable lighting, background music, and cleanliness all contribute to that first impression.
                  </p>
                  <p>
                    Fragrance has a remarkable ability to influence emotions without interrupting the shopping journey. A pleasant scent can make a store feel cleaner, more welcoming, and more premium, while an unpleasant or inconsistent environment may encourage customers to leave sooner than intended.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4 text-lg leading-8 text-slate-600 font-light">
                <p>
                  This is where a professionally installed{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    Retail Store Scent Diffuser Dubai
                  </a>{" "}
                  becomes valuable. Rather than simply masking unwanted odours, it creates a consistent and carefully balanced atmosphere that supports your brand identity.
                </p>
                <p>
                  Retailers across Dubai are recognising that sensory experiences influence purchasing decisions just as much as product quality and visual merchandising. A professional{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    aroma diffuser Dubai
                  </a>{" "}
                  solution allows businesses to create an environment that reflects their brand values while delivering a comfortable shopping experience throughout the day.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 3: Retail Is No Longer Just About Selling Products ========== */}
        <section id="retail-is-no-longer-just-about-selling-products" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 ${cardHover}`}
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div variants={fadeInLeft} className="lg:sticky lg:top-28">
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
                    className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                  >
                    <SparklesIcon className="h-6 w-6" />
                  </motion.div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Experience-Driven Retail</p>
                </div>
                <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Retail Is No Longer Just About Selling Products
                </h2>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4 text-lg leading-8 text-slate-600 font-light">
                <p>
                  The retail industry has changed dramatically over the past decade. Customers now have the convenience of purchasing almost anything online, often with same-day or next-day delivery. As a result, physical stores are expected to offer something that online shopping cannot: memorable experiences.
                </p>
                <p>
                  Modern retail spaces are designed to encourage exploration, interaction, and emotional engagement. Customers no longer visit stores solely to buy products. They come to discover new collections, compare options, experience product quality firsthand, and enjoy an environment that reflects the brand's personality.
                </p>
                <p>
                  Professional retail fragrance systems play an important role in achieving this consistency. Unlike ordinary air fresheners that provide temporary results, commercial scenting solutions deliver controlled and even fragrance throughout commercial spaces, ensuring that every customer enjoys the same welcoming atmosphere regardless of when they visit.
                </p>
                <p>
                  As customer expectations continue to rise across Dubai's retail sector, investing in the right shopping environment is becoming as important as investing in the products themselves. Creating memorable experiences is no longer a competitive advantage alone — it is increasingly becoming an expectation for retailers who want to build lasting customer loyalty.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 4: How Fragrance Influences Customer Behaviour ========== */}
        <section id="how-fragrance-influences-customer-behaviour-inside-a-store" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-blue-600/[0.04] p-8 md:p-12"
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
                className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
              >
                <HeartIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Psychology of Scent</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              How Fragrance Influences Customer Behaviour Inside a Store
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 font-light max-w-4xl">
              Shopping is often driven by emotion as much as necessity. Customers may enter a retail store with a specific item in mind, but their overall experience can influence how long they stay, what they explore, and how they feel about the brand. While attractive displays and helpful staff play an important role, fragrance quietly shapes these moments in ways that many retailers underestimate.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid gap-6 sm:grid-cols-2"
            >
              {behaviourCards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className={`rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-50/50 hover:-translate-y-1 ${cardHover}`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                  >
                    <card.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-serif tracking-tight text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-base leading-7 text-slate-600 font-light">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ========== SECTION 5: The Hidden Challenges Retailers Face Every Day ========== */}
        <section id="the-hidden-challenges-retailers-face-every-day" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 ${cardHover}`}
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
                className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
              >
                <BoltIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Operational Realities</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              The Hidden Challenges Retailers Face Every Day
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 font-light max-w-4xl">
              Every retail environment has its own operational challenges. While product selection and customer service receive constant attention, maintaining a consistent atmosphere across the store can be equally demanding. As customer expectations continue to rise, even small environmental issues can affect the overall shopping experience.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid gap-6 sm:grid-cols-2"
            >
              {challengeCards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className={`rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-50/50 hover:-translate-y-1 ${cardHover}`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                  >
                    <card.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-serif tracking-tight text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-base leading-7 text-slate-600 font-light">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-50/60 p-6">
              <p className="text-lg leading-8 text-slate-700 font-light">
                These odours may not always be obvious to store staff who spend long hours inside the space, but first-time visitors often notice them immediately. Addressing these challenges requires more than occasional air fresheners. Many businesses now rely on{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  Fragrance Machine in Dubai
                </a>{" "}
                solutions that deliver controlled fragrance throughout the day while maintaining a comfortable atmosphere.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700 font-light">
                Professional{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  Scent Diffuser Machines in UAE
                </a>{" "}
                help retailers create a recognisable atmosphere across multiple locations, ensuring every store delivers the same level of comfort and professionalism.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ========== SECTION 6: Why Professional Scent Solutions Outperform Ordinary Air Fresheners ========== */}
        <section id="why-professional-scent-solutions-outperform-ordinary-air-fresheners" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-blue-600/[0.04] p-8 md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div variants={fadeInLeft} className="lg:sticky lg:top-28">
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
                    className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                  >
                    <ShieldCheckIcon className="h-6 w-6" />
                  </motion.div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Commercial-Grade Performance</p>
                </div>
                <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Why Professional Scent Solutions Outperform Ordinary Air Fresheners
                </h2>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4 text-lg leading-8 text-slate-600 font-light">
                <p>
                  Many retailers still rely on plug-in air fresheners or aerosol sprays to improve the in-store atmosphere. While these options provide a temporary fragrance, they are not designed for busy commercial spaces where customer traffic changes throughout the day.
                </p>
                <p>
                  Professional retail fragrance systems are built to deliver controlled and consistent fragrance distribution. Instead of releasing strong bursts of scent, they maintain a balanced atmosphere that enhances the shopping experience without becoming overwhelming. They also provide better coverage for large spaces, making them a practical solution for retailers looking to create a welcoming environment across the entire store.
                </p>
                <p>
                  For businesses with larger layouts, choosing a{" "}
                  <a
                    href="https://www.coolmaxscent.com/large-area-and-hvac-aroma-diffusers/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    large area aroma diffuser
                  </a>{" "}
                  helps maintain consistent fragrance coverage across different sections of the store. From the entrance to display areas and checkout counters, a well-planned scenting solution creates a welcoming atmosphere that supports a seamless shopping experience. The goal is not simply to make the store smell pleasant, but to create an environment that reflects the brand and leaves a lasting impression on every visitor.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 7: One Store, Different Spaces, Different Scenting Needs ========== */}
        <section id="one-store-different-spaces-different-scenting-needs" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 ${cardHover}`}
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
                className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
              >
                <CubeIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Matching the Right Diffuser</p>
            </div>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              One Store, Different Spaces, Different Scenting Needs
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 font-light max-w-4xl">
              Every retail store creates a different shopping experience, so its scenting requirements will also vary. A boutique, jewellery store, electronics showroom, furniture gallery, or supermarket all have different layouts and customer traffic. Choosing the right fragrance diffuser means selecting a solution that complements the space while delivering a consistent fragrance experience from the entrance to the checkout.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {productCards.map((product, i) => (
                <motion.a
                  key={i}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:border-blue-500/40 hover:bg-blue-50/50 hover:-translate-y-1 ${cardHover}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                    >
                      <WrenchScrewdriverIcon className="h-5 w-5" />
                    </motion.div>
                    <ArrowRightIcon className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600/80 mb-2">{product.tag}</p>
                  <h3 className="text-xl font-serif tracking-tight text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-sm leading-6 text-slate-600 font-light">{product.desc}</p>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-50/60 p-6">
              <p className="text-lg leading-8 text-slate-700 font-light">
                For boutiques and medium-sized retail environments,{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  CoolMaxScent's Commercial Aroma Diffusers in UAE
                </a>{" "}
                provide reliable and continuous scenting. Larger retail stores need fragrance to remain consistent across multiple shopping areas, where customers expect the same pleasant atmosphere wherever they browse.{" "}
                <a
                  href="https://www.coolmaxscent.com/floor-standing-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  CoolMaxScent's Floor-Standing Aroma Diffusers in UAE
                </a>{" "}
                are designed to meet these requirements.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700 font-light">
                Rather than choosing a diffuser based solely on store size, retailers should focus on selecting a solution that supports their customer experience and reinforces their brand identity. When fragrance is consistent throughout the store, it becomes a subtle yet memorable part of every customer's visit.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ========== SECTION 8: Fragrance Is Becoming Part of Retail Branding ========== */}
        <section id="fragrance-is-becoming-part-of-retail-branding" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-blue-600/[0.04] p-8 md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div variants={fadeInLeft} className="lg:sticky lg:top-28">
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
                    className="inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600"
                  >
                    <StarIcon className="h-6 w-6" />
                  </motion.div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Signature Brand Scent</p>
                </div>
                <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Fragrance Is Becoming Part of Retail Branding
                </h2>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-4 text-lg leading-8 text-slate-600 font-light">
                <p>
                  In today's competitive retail landscape, customers remember more than just the products they purchase. They remember how a store made them feel. A clean, welcoming, and thoughtfully designed environment creates a positive impression that stays with them long after they leave. This is why fragrance is becoming an important part of retail branding rather than simply an addition to the store environment.
                </p>
                <p>
                  Just as businesses carefully choose their logo, colours, lighting, and music, many are now creating a signature fragrance that reflects their brand identity. A consistent scent helps customers associate positive emotions with the shopping experience, making the brand more familiar and memorable over time. Whether they visit a boutique, a showroom, or a large retail outlet, experiencing the same pleasant fragrance strengthens brand recognition and builds customer trust.
                </p>
                <p>
                  Professional retail fragrance systems make it possible to deliver this consistency every day. Instead of using temporary fragrance solutions, retailers can create a carefully managed atmosphere that supports their brand image across different locations and customer touchpoints. As customer expectations continue to evolve, investing in a memorable sensory experience is becoming an important way for businesses to differentiate themselves in a crowded retail market.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 9: Creating Better Shopping Experiences with CoolMaxScent ========== */}
        <section id="creating-better-shopping-experiences-with-coolmaxscent" className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <motion.div
              variants={fadeInLeft}
              className={`rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 ${cardHover}`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-blue-500 rounded-full mb-6"
              />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The CoolMax Scent Approach</p>
              <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Creating Better Shopping Experiences with CoolMaxScent
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Every successful retail store is built around the customer experience. From the moment a visitor walks through the entrance until they complete their purchase, every detail contributes to how they perceive the brand. Fragrance is one of those subtle details that quietly enhances the shopping journey, helping customers feel comfortable, relaxed, and more connected to the environment.
                </p>
                <p>
                  At{" "}
                  <a
                    href="https://www.coolmaxscent.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    CoolMaxScent
                  </a>
                  , we understand that every retail space has different requirements. Whether you manage a boutique, a luxury showroom, a department store, or a large retail outlet, our professional scenting solutions are designed to help you create a consistent and memorable atmosphere. From selecting the right fragrance to recommending the most suitable diffuser, installation, and ongoing support, we work with businesses to develop scenting solutions that complement their retail environment and brand identity.
                </p>
                <p>
                  A memorable shopping experience is no longer created by products alone. It is shaped by every interaction customers have with your store, including the atmosphere they experience from the moment they enter. The right fragrance transforms an ordinary visit into one customers remember, helping strengthen brand perception and encouraging them to return.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="rounded-[2.5rem] border border-blue-500/20 bg-[linear-gradient(135deg,_rgba(59,130,246,0.08)_0%,_rgba(255,255,255,0.6)_60%,_rgba(37,99,235,0.06)_100%)] p-8 shadow-[0_25px_65px_-30px_rgba(59,130,246,0.2)] md:p-12 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_35px_80px_-25px_rgba(59,130,246,0.3)]"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600"
                >
                  <ShieldCheckIcon className="h-4 w-4" />
                  Explore CoolMax Scent Solutions
                </motion.div>
                <h3 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Discover How Professional Aroma Diffusers Transform Retail Spaces
                </h3>
                <div className="mt-5 space-y-4 text-slate-600 leading-relaxed font-light text-base">
                  <p>
                    Discover how our professional aroma diffusers and retail scenting solutions can help you create welcoming, memorable shopping environments for customers of every retail format.
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                >
                  Contact Our Team
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-slate-700 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-600 hover:shadow-lg hover:-translate-y-0.5 shadow-xs"
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
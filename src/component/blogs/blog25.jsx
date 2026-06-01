import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  CloudIcon,
  HomeIcon,
  HeartIcon,
  StarIcon,
  TrophyIcon,
  
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function DubaiHotelScentMarketingHomeFragranceBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Dubai Hotel Scent Secrets | Luxury Home Fragrance UAE";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn how UAE hotels create unforgettable scent experiences and transform your home or business with premium fragrance solutions from Cool Max Scent."
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
      "Scent diffuser, Scent marketing in Dubai, Scent diffuser for home, Scent diffuser machine"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/dubai-hotel-scent-marketing-home-fragrance-uae/"
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden pt-16">
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* ================= HERO SECTION ================= */}
        <section className="pt-20 pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                Luxury Hotel Scent Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              Why Luxury Hotels in Dubai Invest in{" "}
              <span className="text-blue-600">Scent Marketing</span> and How to
              Create the Same Experience at Home
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Learn how UAE hotels create unforgettable scent experiences and
              transform your home or business with premium fragrance solutions
              from Cool Max Scent.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                Walk into any luxury hotel and the first thing you notice isn’t
                just the design, it’s the signature scent. Powered by a
                high-quality <strong>scent diffuser</strong>, that subtle,
                refined fragrance instantly sets the mood, creating a sense of
                calm, comfort, and quiet sophistication. It welcomes you before
                a single word is spoken.
              </p>

              <p className="text-justify">
                This is the essence of{" "}
                <strong>scent marketing in Dubai</strong>, where brands compete
                to deliver unforgettable experiences. Hotels invest heavily in
                fragrance strategies because scent has a powerful psychological
                impact. It shapes first impressions, enhances perceived value,
                and builds emotional connection.
              </p>

              <p className="text-justify">
                Scent is closely tied to memory and behavior. A well-crafted
                aroma can make a space feel cleaner, more relaxing, and more
                premium, encouraging guests to stay longer and return.
              </p>

              <p className="text-justify">
                In today’s experience-driven world, scent becomes an invisible
                signature that guests remember long after they leave. The answer
                is simple: scent influences emotions, memory, and behavior more
                than any other sense.
              </p>

              {/* ================= H2: PROBLEM ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  The Problem: Why Your Space Feels “Normal” Not Premium
                </h2>

                <p className="mb-8 text-justify">
                  Many homes, offices, and even businesses struggle to create a
                  space that truly stands out. Visually, everything may look
                  perfect, but something still feels missing. The reason? Scent.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "A lack of a memorable atmosphere that leaves no lasting impression",
                    "Ordinary or inconsistent fragrance that fades too quickly",
                    "No emotional connection that makes people feel comfortable or inspired",
                    "Weak first impressions for guests, clients, or customers"
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-justify mb-6">
                  Without a consistent fragrance strategy, even the most
                  beautifully designed space can feel average. This is where a{" "}
                  <strong>scent diffuser machine</strong> makes a difference,
                  delivering a steady, high-quality aroma that transforms the
                  entire environment.
                </p>

                <p className="text-justify">
                  Whether it’s a <strong>scent diffuser for home</strong> or a
                  commercial setup, the right scent elevates perception,
                  enhances mood, and creates a premium experience that people
                  instantly notice and remember.
                </p>
              </motion.div>

              {/* ================= H2: WHY HOTELS INVEST ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Why Hotels Invest Heavily in Scent
                </h2>

                <p className="mb-8 text-justify">
                  Luxury hotels don’t use fragrance by chance, it’s a carefully
                  crafted strategy rooted in psychology, branding, and guest
                  experience.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Scent Creates Emotional Connection",
                      desc: "Fragrance has a direct pathway to emotion and memory. From the moment guests walk in, a signature scent can instantly make them feel relaxed, welcomed, and at ease, setting the tone for their entire stay."
                    },
                    {
                      title: "Builds a Luxury Brand Identity",
                      desc: "A distinctive aroma becomes part of the hotel’s identity, an invisible signature. Just like a logo or design style, it creates recognition and makes the brand unforgettable."
                    },
                    {
                      title: "Increases Customer Satisfaction & Loyalty",
                      desc: "A consistently pleasant scent enhances the overall experience. Guests are more likely to leave positive reviews, stay longer, and return simply because the environment feels better."
                    },
                    {
                      title: "Influences Behavior & Spending",
                      desc: "Scent subtly impacts decision making. A well-designed fragrance can encourage guests to linger, explore more services, and even spend more, making it a powerful marketing tool."
                    },
                    {
                      title: "Creates a Lasting First Impression",
                      desc: "Before guests notice the décor, they experience the scent. A fresh, clean, and luxurious fragrance immediately communicates quality, comfort, and attention to detail."
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-6 rounded-3xl border border-slate-100"
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-3 text-left">
                        {i + 1}. {item.title}
                      </h3>
                      <p className="text-slate-600 text-justify leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ================= H2: SOLUTION ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  The Solution: Bring Hotel Luxury to Your Space with Cool Max
                  Scent
                </h2>

                <p className="mb-8 text-justify">
                  You don’t need a five-star hotel budget to experience that
                  same sense of elegance and comfort. With Cool Max Scent, you
                  can effortlessly transform your home, office, or business into
                  a refined, premium environment that leaves a lasting
                  impression.
                </p>

                <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">
                  How Cool Max Scent Elevates Your Space
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Advanced scent diffuser machine designed for consistent, even fragrance distribution across any space",
                    "Luxury-inspired fragrances crafted to replicate the signature scents of high-end hotels",
                    "Tailored scent solutions to match the mood and identity of your home, office, or retail environment",
                    "Long-lasting aroma technology that keeps your space fresh, inviting, and memorable all day"
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start p-4 bg-blue-50 rounded-xl border border-blue-100"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-justify">
                  Whether you’re creating a calming sanctuary at home or an
                  impressive atmosphere for clients, a{" "}
                  <strong>scent diffuser for home</strong> or business use from
                  Cool Max Scent turns everyday spaces into extraordinary
                  experiences.
                </p>
              </motion.div>

              {/* ================= H2: HOTEL-LIKE HOME ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  How to Create a Hotel-Like Experience at Home
                </h2>

                <p className="mb-8 text-justify">
                  Transforming your space into a luxurious, hotel-inspired
                  environment is easier than you think when you focus on the
                  details that truly matter.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Choose a Signature Scent",
                      desc: "Select one fragrance and use it consistently throughout your space. This creates a distinct identity and builds a sense of familiarity every time you walk in."
                    },
                    {
                      title: "Use a Scent Diffuser Machine",
                      desc: "A professional scent diffuser machine ensures even, continuous fragrance distribution, giving your home that seamless, high-end feel."
                    },
                    {
                      title: "Focus on Key Areas",
                      desc: "Prioritize spaces that create the strongest impression on your entrance, living room, and bedroom. These areas define the overall experience."
                    },
                    {
                      title: "Keep It Subtle & Balanced",
                      desc: "True luxury is never overwhelming. A scent diffuser for home should deliver a soft, elegant aroma that enhances the space without overpowering it."
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-3 text-left">
                        ✔ {item.title}
                      </h3>
                      <p className="text-slate-600 text-justify leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-justify mt-8">
                  With the right approach, your home can feel just as refined,
                  welcoming, and memorable as a five-star hotel.
                </p>
              </motion.div>

              {/* ================= H2: WHY CHOOSE COOL MAX ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Why Choose Cool Max Scent?
                </h2>

                <p className="mb-8 text-justify">
                  At Cool Max Scent, we go beyond basic air freshening, we
                  deliver professional scent marketing solutions inspired by
                  luxury hotels and premium commercial spaces across the UAE.
                  Our goal is to transform everyday environments into memorable
                  sensory experiences that leave a lasting impression.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Advanced diffuser technology designed for consistent, wide-area fragrance coverage for homes, offices, retail stores, and hotels",
                    "Premium, long-lasting fragrances inspired by luxury hotel scents to create a sophisticated and welcoming atmosphere",
                    "Custom scent solutions tailored to match your brand identity or personal preference",
                    "Low maintenance and efficient systems that are easy to use, safe, and cost-effective for continuous fragrance"
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-justify">
                  Whether you're creating a relaxing home environment or
                  elevating your business ambiance in Dubai and across the UAE,
                  Cool Max Scent helps you stand out with a signature scent
                  experience that customers remember.
                </p>
              </motion.div>

              {/* ================= CONCLUSION ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">
                  Conclusion
                </h2>

                <p className="mb-6 text-justify">
                  Hotels invest thousands in{" "}
                  <strong>scent marketing in Dubai</strong> because it evokes
                  emotions, strengthens brand identity, and influences customer
                  behavior in a powerful way. A well-crafted fragrance can turn
                  an ordinary space into a memorable experience that guests
                  associate with comfort, luxury, and trust. The good news is
                  you don’t need a five-star hotel budget to achieve this.
                </p>

                <p className="text-justify">
                  With the right scent strategy, you can bring that same premium
                  atmosphere into your home or business. Cool Max Scent makes it
                  simple by offering advanced diffuser solutions and
                  luxury-inspired fragrances that elevate any space. Whether in
                  Dubai or across the UAE, creating a sophisticated, hotel-like
                  environment is now easier, more affordable, and highly
                  effective.
                </p>
              </motion.div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">
                  Hotel Scent Strategy
                </h4>

                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Signature Scent
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Use one consistent fragrance to build identity, memory,
                      and emotional recall.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Premium First Impression
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      A refined scent communicates cleanliness, comfort, and
                      quality before visual details are noticed.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Controlled Diffusion
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      A scent diffuser machine delivers consistent fragrance
                      without overpowering the space.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> Get
                    Consultation
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= BENEFITS SECTION ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 tracking-tighter text-left">
              Benefits of Hotel-Inspired <br />
              <span className="text-blue-600 italic font-light">
                Scent Marketing
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  t: "Stronger First Impression",
                  d: "A premium scent immediately makes your home or business feel more refined and welcoming.",
                  i: <StarIcon />
                },
                {
                  t: "Emotional Connection",
                  d: "Signature fragrances help people associate your space with comfort, trust, and positive memory.",
                  i: <HeartIcon />
                },
                {
                  t: "Luxury Brand Perception",
                  d: "Professional scenting elevates perceived value and creates a high-end atmosphere.",
                  i: <TrophyIcon />
                },
                {
                  t: "Better Home Ambience",
                  d: "A scent diffuser for home can turn everyday living areas into hotel-like spaces.",
                  i: <HomeIcon />
                },
                {
                  t: "Consistent Fragrance",
                  d: "A scent diffuser machine delivers steady, balanced fragrance throughout the day.",
                  i: <CloudIcon />
                },
                {
                  t: "Business Differentiation",
                  d: "Scent marketing in Dubai helps brands stand out in competitive hospitality, retail, and office environments.",
                  i: <BuildingOffice2Icon />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100"
                >
                  <div className="text-blue-600 w-10 h-10 mb-6">{item.i}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 text-left">
                    {item.t}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed text-justify">
                    {item.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BLOG IMAGE SECTION ================= */}
        <section className="py-24 px-6 lg:px-16 border-t border-slate-100 text-left">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                <img
                  src={BlogHeroImg}
                  alt="Dubai Hotel Scent Marketing and Luxury Home Fragrance UAE"
                  className="w-full h-auto rounded-[2rem] shadow-2xl mx-auto max-w-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Bring Hotel Luxury <br /> Into Your Space
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Create a premium signature scent experience for your home, office,
              hotel, retail store, or business with Cool Max Scent.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp
                Support
              </a>

              <Link
                to="/contact/"
                className="w-full sm:w-auto px-12 py-6 bg-blue-800 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3"
              >
                Contact Experts <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
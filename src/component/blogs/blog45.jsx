import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  HomeModernIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/blogimg/blog45.webp";

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

export default function LuxuryHotelGuestExperiencesBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Aroma Diffuser for Hotel in Dubai | Luxury Stays | CoolMax Scent";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Every memorable hotel stay begins with the right atmosphere. An Aroma Diffuser for Hotel in Dubai helps create lasting guest impressions."
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
      "aroma diffuser for hotel in Dubai, hotel scent diffuser, fragrance diffuser for hotel in Dubai, hotel aroma diffuser UAE, luxury hotel scenting Dubai, hospitality scent marketing Dubai"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/luxury-hotel-guest-experiences-dubai"
    );
  }, []);

  const sectionLinks = [
    { label: "Luxury & Scent", href: "#luxury-measured-by-what-guests-remember" },
    { label: "Silent Elements", href: "#silent-elements-that-shape-every-stay" },
    { label: "Hotel Branding", href: "#scent-as-part-of-modern-hotel-branding" },
    { label: "Guest Journey", href: "#following-the-guest-journey" },
    { label: "Scenting Strategy", href: "#creating-scenting-strategy-for-your-hotel" },
    { label: "What Hotels Get Right", href: "#what-luxury-hotels-get-right" },
    { label: "CoolMaxScent", href: "#the-stay-ends-the-memory-doesnt" },
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
                  Hospitality Scenting & Guest Experience
                </motion.div>

                <h1 className="mt-6 text-3xl font-serif tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.15]">
                  What Makes Luxury Hotels Unforgettable? The Role of an{" "}
                  <span className="italic text-blue-600">Aroma Diffuser</span> for Hotel in Dubai
                </h1>

                <div className="mt-8 space-y-4 text-lg leading-8 text-slate-600 font-light">
                  <h2 className="text-xl font-semibold text-slate-800 font-sans">Luxury Is Measured by What Guests Remember</h2>
                  <p>
                    Think about the last luxury hotel that truly impressed you. You may not remember the room number or every detail of the décor, but you probably remember how the hotel made you feel. The warm welcome at reception, the calming atmosphere in the lobby, the elegant interiors, and the overall ambience often leave a stronger impression than any single service.
                  </p>
                  <p>
                    Today's guests expect more than comfortable rooms and excellent hospitality. They seek experiences that feel personal, relaxing, and memorable from the moment they arrive until they check out. Every detail, no matter how subtle, contributes to that experience.
                  </p>
                  <p>
                    One of the most overlooked yet powerful elements is fragrance. A professionally selected{" "}
                    <a
                      href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      Fragrance Diffuser for Hotel in Dubai
                    </a>{" "}
                    helps create a welcoming atmosphere that complements the hotel's identity and leaves guests with a positive emotional connection long after their stay.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <a
                    href="#silent-elements-that-shape-every-stay"
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
                    alt="Luxury hotel in Dubai with professional aroma diffuser for hotel experience"
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

        {/* ========== SECTION 2: The Silent Elements ========== */}
        <section id="silent-elements-that-shape-every-stay" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Unseen Details of Luxury Hospitality</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              The Silent Elements That Shape Every Stay
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Luxury hospitality is built on countless details working together seamlessly. Guests may admire the architecture or appreciate the service, but many of the factors influencing their experience remain almost invisible.
              </p>
              <p>
                Soft lighting creates comfort. Carefully selected music sets the mood. Comfortable temperatures help guests relax. Fragrance quietly completes the experience without demanding attention.
              </p>
              <p>
                Unlike visual elements that guests consciously notice, scent works on a deeper emotional level. It creates familiarity, encourages relaxation, and contributes to a sense of comfort from the very first step inside the property.
              </p>
              <p>
                This is why many premium hotels are moving beyond traditional hotel air freshener solutions. Rather than simply masking unwanted odours, professional fragrance systems create a consistent atmosphere that reflects the hotel's personality across different guest areas.
              </p>
              <p>
                Whether welcoming international travellers, business executives, or families on holiday, maintaining a pleasant ambience throughout the property has become an essential part of delivering exceptional hospitality. As guest expectations continue to evolve, investing in a reliable{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  hotel aroma diffuser UAE
                </a>{" "}
                solution is no longer viewed as an added luxury but as part of creating a complete guest experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 3: Scent & Hotel Branding ========== */}
        <section id="scent-as-part-of-modern-hotel-branding" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Olfactory Branding & Memory</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why Scent Has Become Part of Modern Hotel Branding
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Every luxury hotel wants to be remembered long after a guest checks out. While excellent service and beautiful interiors remain important, hotels are increasingly recognising that memorable experiences are created through all five senses.
              </p>
              <p>
                This shift has made{" "}
                <a
                  href="https://www.coolmaxscent.com/scent-marketing-solutions/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  hospitality scent marketing Dubai
                </a>{" "}
                an important strategy for premium hotels looking to strengthen their brand identity. A carefully selected signature fragrance becomes part of the hotel's personality, helping guests associate a particular scent with comfort, elegance, and exceptional service.
              </p>
              <p>
                Many internationally recognised hotel brands have embraced signature fragrances because scent is closely linked to memory. Guests who experience the same welcoming fragrance throughout their stay are more likely to remember the property and recognise that scent in the future.
              </p>
              <p>
                To achieve this consistency, hotels rely on professional systems rather than ordinary fragrance products. A dedicated{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  hotel scent machine
                </a>{" "}
                delivers even fragrance distribution across guest areas, ensuring every visitor enjoys the same premium atmosphere.
              </p>
              <p>
                For luxury properties aiming to create a distinctive identity, a{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/mistbox-x-diffuser/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  hotel collection scent diffuser
                </a>{" "}
                or luxury scent diffuser allows fragrance to become an extension of the brand itself. Instead of overpowering the environment, the fragrance blends naturally with the hotel's design, service, and ambience to create a refined and memorable experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 4: Guest Journey ========== */}
        <section id="following-the-guest-journey" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Complete Guest Experience</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Following the Guest Journey
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 font-light">
              A guest's experience begins long before they unlock their room. Every interaction with the hotel contributes to the story they take home, and fragrance can quietly enhance each of those moments.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-6 md:grid-cols-2"
            >
              {[
                {
                  icon: <HomeModernIcon className="h-5 w-5" />,
                  title: "Arrival That Feels Warm and Inviting",
                  text: "The entrance is where first impressions are formed. A fresh and welcoming atmosphere immediately reassures guests that they have arrived somewhere special. Rather than relying on a basic hotel air freshener machine, many luxury properties create a subtle signature fragrance that reflects their brand from the very first step inside."
                },
                {
                  icon: <BuildingOffice2Icon className="h-5 w-5" />,
                  title: "The Lobby Sets the Tone",
                  text: "The hotel lobby is more than a waiting area. It is where guests check in, relax, meet colleagues, or simply take in their surroundings. Installing an Aroma Diffuser for Hotel Lobby helps create a calm, sophisticated environment while maintaining a consistent fragrance throughout this important space.",
                  link: { href: "https://www.coolmaxscent.com/commercial-aroma-diffusers/", label: "Aroma Diffuser for Hotel Lobby" }
                },
                {
                  icon: <CubeTransparentIcon className="h-5 w-5" />,
                  title: "Shared Spaces Matter More Than You Think",
                  text: "Corridors, executive lounges, waiting areas, and guest elevators may not always receive the same design attention as hotel rooms, but they play an important role in shaping the overall guest experience. Consistent fragrance across these shared spaces reinforces the feeling of quality and attention to detail."
                },
                {
                  icon: <HeartIcon className="h-5 w-5" />,
                  title: "Dining Becomes Part of the Experience",
                  text: "Hotel restaurants are an extension of the overall hospitality journey. While delicious cuisine remains the highlight, a pleasant atmosphere encourages guests to relax and enjoy their dining experience. A carefully managed fragrance complements the ambience without interfering with the natural aromas of freshly prepared food."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-lg hover:-translate-y-1"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="mb-3 inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {item.link ? (
                      <>
                        {item.text.split(item.link.label)[0]}
                        <a href={item.link.href} target="_blank" rel="noreferrer" className={textLinkClass}>
                          {item.link.label}
                        </a>
                        {item.text.split(item.link.label)[1]}
                      </>
                    ) : item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6"
            >
              When every part of the guest journey feels consistent, visitors leave with a lasting impression of comfort, elegance, and thoughtful hospitality. Fragrance becomes one of the many subtle details that guests may not consciously notice, but they are likely to remember long after their stay.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 5: Scenting Strategy ========== */}
        <section id="creating-scenting-strategy-for-your-hotel" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">Tailored Hospitality Solutions</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-white sm:text-4xl">
              Creating a Scenting Strategy That Fits Your Hotel
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300 font-light">
              <p>
                There is no single fragrance solution that works for every hotel. A boutique property, a luxury resort, and a business hotel all welcome guests in different ways, which means their scenting requirements are equally unique.
              </p>
              <p>
                The ideal fragrance strategy depends on several factors, including the size of the property, the layout of guest areas, daily footfall, and the atmosphere the hotel wants to create. Some hotels require consistent scenting throughout reception and lounge areas, while others focus on premium spaces where first impressions matter most.
              </p>
              <p>
                This is why professional{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={darkTextLinkClass}
                >
                  Commercial Aroma Diffusers in UAE
                </a>{" "}
                are designed to suit different hospitality environments rather than offering a one-size-fits-all approach.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-6 md:grid-cols-2"
            >
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-all duration-500 hover:border-blue-400 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="mb-3 inline-flex rounded-xl bg-blue-500/20 p-2.5 text-blue-300">
                  <BuildingOffice2Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reception & Lounge Areas</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  For hotel lobbies and reception areas where first impressions are created, the{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/aeroblack-med-diffuser/"
                    target="_blank"
                    rel="noreferrer"
                    className={darkTextLinkClass}
                  >
                    AeroBlack Med Commercial Aroma Diffuser
                  </a>{" "}
                  is well suited for hotels looking to create a refined ambience across reception areas, lounges, and dining spaces.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-all duration-500 hover:border-blue-400 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="mb-3 inline-flex rounded-xl bg-blue-500/20 p-2.5 text-blue-300">
                  <UserGroupIcon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Multiple Mid-Sized Locations</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  For properties that require flexible fragrance coverage in multiple mid-sized locations, the{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/mistbox-x-diffuser/"
                    target="_blank"
                    rel="noreferrer"
                    className={darkTextLinkClass}
                  >
                    MistBox X Mid-Size Commercial Diffuser
                  </a>{" "}
                  provides an efficient and reliable solution for creating a consistent atmosphere across various guest touchpoints.
                </p>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg leading-8 text-slate-300 font-light border-t border-white/10 pt-6"
            >
              The goal is never to make guests notice the fragrance itself. Instead, the right scenting solution quietly supports the hotel's atmosphere, strengthens its brand identity, and becomes part of the memorable experience guests take home.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 6: What Luxury Hotels Get Right ========== */}
        <section id="what-luxury-hotels-get-right" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Principles of Excellence</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              What Luxury Hotels Get Right
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Luxury hospitality is built on consistency. Guests expect the same level of comfort and attention to detail from the moment they arrive until they check out. Hotels that create lasting impressions understand that memorable experiences come from a combination of thoughtful design, personalised service, and carefully managed ambience.
              </p>
              <p>
                Rather than introducing strong or overpowering fragrances, successful hotels focus on subtle scenting that feels natural throughout the property. A consistent fragrance identity strengthens brand recognition while making every guest interaction feel more refined and welcoming.
              </p>
              <p>
                Equally important is selecting a scenting strategy that aligns with the hotel's architecture, guest profile, and operational needs. What works for a boutique hotel may not suit a business hotel or luxury resort, which is why a tailored approach often delivers the best results.
              </p>
              <p>
                This is where experienced partners such as CoolMaxScent add value. Instead of offering a one-size-fits-all solution, the focus is on understanding each hotel's environment and recommending fragrance systems that support its unique hospitality experience. The result is an atmosphere that feels intentional, elegant, and memorable for every guest.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 7: The Stay Ends. The Memory Doesn't. ========== */}
        <section id="the-stay-ends-the-memory-doesnt" className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
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
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Lasting Impression</p>
              <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                The Stay Ends. The Memory Doesn't.
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Long after guests have checked out, the memories they carry are shaped by the moments they experienced throughout their stay. Comfortable surroundings, exceptional service, elegant interiors, and a welcoming atmosphere all work together to define how a hotel is remembered.
                </p>
                <p>
                  A professionally selected{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    Scent Diffuser for Hotel in Dubai
                  </a>{" "}
                  plays an important role in creating those memorable experiences. From welcoming guests in the lobby to maintaining a consistent ambience across shared spaces, fragrance becomes part of the hotel's identity without drawing attention to itself.
                </p>
                <p>
                  As expectations continue to evolve within the hospitality industry, creating meaningful guest experiences requires more than visual appeal alone. Hotels that invest in thoughtful sensory experiences are better positioned to build stronger brand recall, encourage repeat visits, and leave a lasting impression on every guest.
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
                  CoolMax Scent Solutions
                </motion.div>
                <h3 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Elevate Your Hotel Ambience
                </h3>
                <div className="mt-5 space-y-4 text-slate-600 leading-relaxed font-light text-base">
                  <p>
                    For hotels looking to elevate their ambience through professional fragrance solutions,{" "}
                    <a
                      href="https://www.coolmaxscent.com/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      CoolMaxScent
                    </a>{" "}
                    provides expertly designed commercial scenting systems that help hospitality brands across the UAE create welcoming environments where every stay is remembered for the right reasons.
                  </p>
                  <p>
                    From boutique properties to luxury resorts, our commercial-grade{" "}
                    <a
                      href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      Aroma Diffuser for Hotel in Dubai
                    </a>{" "}
                    solutions help hotels craft the perfect sensory experience that keeps guests coming back.
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
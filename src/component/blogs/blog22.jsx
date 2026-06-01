import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  FaceSmileIcon,
  CloudIcon,
  HomeIcon,
  TruckIcon,
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SmallSpaceScentDiffuserGuideBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Small Space Scent Diffuser Guide | Choose the Best One";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discover how to choose the best scent diffuser for small spaces. Learn tips on selecting the right scent diffuser machine and aroma diffuser machine UAE."
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
      "https://coolmaxscent.com/blog/small-space-scent-diffuser-guide/"
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
                Small Space Scent Diffuser Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              Small Space Fragrance Guide: How to Choose the Perfect{" "}
              <span className="text-blue-600">Scent Diffuser</span> Every Time
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Creating the perfect atmosphere in a small space is an art, and
              scent plays a bigger role than most people realize.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                Whether it’s your bedroom, workspace, car, or bathroom, the
                right <strong>scent diffuser</strong> or{" "}
                <strong>scent diffuser machine</strong> can elevate your
                environment from ordinary to exceptional. For those looking for
                premium solutions, choosing the right{" "}
                <strong>aroma diffuser machine UAE</strong> residents trust can
                make all the difference in achieving a balanced and long-lasting
                fragrance experience.
              </p>

              <p className="text-justify">
                But here’s the challenge: small spaces amplify fragrance. The
                wrong diffuser or scent can quickly become overwhelming instead
                of inviting. This guide will help you choose the perfect{" "}
                <strong>scent diffuser</strong> with confidence, so your space
                always smells just right.
              </p>

              {/* ================= H2: UNDERSTAND YOUR SPACE ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Understand Your Space Before Choosing a Diffuser
                </h2>

                <p className="mb-8 text-justify">
                  Not all small spaces behave the same, and this is where most
                  people get it wrong. A closed bathroom will hold fragrance
                  much longer than a slightly ventilated office, while a car
                  interior can intensify scent within minutes.
                </p>

                <p className="mb-8 text-justify">
                  Before choosing a <strong>scent diffuser</strong> or{" "}
                  <strong>scent diffuser machine</strong>, take a moment to
                  evaluate how your space actually functions:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Room size: Is it very compact or slightly open?",
                    "Airflow & ventilation: Is the space sealed or does air circulate frequently?",
                    "Ceiling height & layout: Lower ceilings and tighter layouts trap scent more easily",
                    "Usage pattern: Is the space used continuously or only for short periods?"
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
                  In tightly enclosed spaces, fragrance builds up quickly and
                  lingers longer. This means you don’t need a high-output{" "}
                  <strong>aroma diffuser machine UAE</strong> homes often use
                  for larger areas. Instead, you need a diffuser that delivers
                  controlled, consistent diffusion.
                </p>

                <p className="text-justify mt-6">
                  Choosing the right intensity for your space is the first step
                  toward creating a scent experience that feels refined, not
                  overwhelming.
                </p>
              </motion.div>

              {/* ================= H2: CHOOSE THE RIGHT TYPE ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Choose the Right Type of Scent Diffuser
                </h2>

                <p className="mb-8 text-justify">
                  Not all diffusers are designed the same, and in small spaces,
                  choosing the wrong type of <strong>scent diffuser</strong> can
                  quickly lead to an overpowering experience. The goal isn’t to
                  fill the space fast, but to maintain a smooth, consistent
                  scent throughout the day.
                </p>

                <p className="mb-8 text-justify">
                  When selecting the right{" "}
                  <strong>scent diffuser machine</strong>, consider how and
                  where it will be used:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Compact Aroma Diffusers",
                      desc: "Perfect for desks, bedrooms, and small offices, offering controlled mist and even distribution.",
                      icon: <HomeIcon />
                    },
                    {
                      title: "Car Diffusers",
                      desc: "Specifically designed for tight interiors, delivering light, balanced fragrance without buildup.",
                      icon: <TruckIcon />
                    },
                    {
                      title: "Reed Diffusers",
                      desc: "Ideal for bathrooms or entryways, providing a constant, low-intensity scent without electricity.",
                      icon: <SparklesIcon />
                    },
                    {
                      title: "Portable Diffusers",
                      desc: "Flexible and convenient, allowing you to move your fragrance experience from one space to another.",
                      icon: <DevicePhoneMobileIcon />
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
                    >
                      <div className="text-blue-600 w-8 h-8 mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2 text-left">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 text-justify leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-justify">
                  If you're exploring premium solutions, many{" "}
                  <strong>aroma diffuser machine UAE</strong> options are
                  designed with adjustable intensity levels, making them ideal
                  for modern compact living.
                </p>

                <p className="text-justify mt-6">
                  Avoid large-capacity or high-output diffusers intended for big
                  rooms. In small spaces, they release too much fragrance too
                  quickly, disrupting the balance and comfort of your
                  environment.
                </p>
              </motion.div>

              {/* ================= H2: WHY COOL MAX SCENT ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Why Cool Max Scent is the Perfect Choice for Your Space?
                </h2>

                <p className="text-justify mb-6">
                  Choosing the right fragrance solution isn’t just about scent,
                  it's about quality, performance, and consistency. That’s where{" "}
                  <strong>Cool Max Scent</strong> stands out.
                </p>

                <p className="text-justify mb-6">
                  Our range of <strong>scent diffuser</strong> products is
                  designed specifically for modern lifestyles, where precision
                  and balance matter, especially in small spaces. Whether you’re
                  scenting your home, office, or car, each{" "}
                  <strong>scent diffuser machine</strong> is engineered to
                  deliver a smooth, controlled fragrance experience without
                  overwhelming your environment.
                </p>

                <p className="text-justify mb-6">
                  What sets Cool Max Scent apart is our focus on advanced
                  diffusion technology and premium-grade oils. Our systems
                  ensure even scent distribution, long-lasting performance, and
                  easy control, so you get the perfect ambiance every time.
                </p>

                <p className="text-justify mb-6">
                  For customers looking for reliable{" "}
                  <strong>aroma diffuser machine UAE</strong> solutions, Cool
                  Max Scent offers locally tailored products that suit the
                  region’s climate, space sizes, and lifestyle needs.
                </p>

                <p className="text-justify">
                  With Cool Max Scent, you’re not just adding fragrance, you’re
                  creating an experience that feels refined, welcoming, and
                  consistently exceptional.
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

                <p className="text-justify mb-6">
                  Choosing the right <strong>scent diffuser</strong> for a small
                  space comes down to balance, not intensity. By understanding
                  your space, selecting the right{" "}
                  <strong>scent diffuser machine</strong>, and using the
                  appropriate fragrance type, you can create an environment that
                  feels inviting, refined, and comfortable every day.
                </p>

                <p className="text-justify mb-6">
                  Small spaces don’t need powerful diffusion—they need smart,
                  controlled scenting. With the right approach, even the most
                  compact areas can feel luxurious and refreshing.
                </p>

                <p className="text-justify mb-6">
                  If you’re looking for a reliable{" "}
                  <strong>aroma diffuser machine UAE</strong> solution, focus on
                  quality, consistency, and performance. The right diffuser
                  doesn’t just add fragrance—it transforms how your space feels.
                </p>

                <p className="text-justify font-semibold text-slate-900">
                  Make every space count with the perfect scent experience.
                </p>
              </motion.div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">
                  Small Space Diffuser Tips
                </h4>

                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Control the Intensity
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Small rooms need low-output, consistent fragrance
                      diffusion.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Match the Space
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Bedrooms, cars, bathrooms, and desks all need different
                      scenting strategies.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Avoid Overpowering Scents
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      In compact spaces, subtle fragrance creates a premium
                      experience.
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
              Benefits of Choosing the Right <br />
              <span className="text-blue-600 italic font-light">
                Small Space Scent Diffuser
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  t: "Balanced Fragrance Experience",
                  d: "The right diffuser keeps your space fresh without becoming overpowering.",
                  i: <AdjustmentsHorizontalIcon />
                },
                {
                  t: "Better Comfort",
                  d: "A well-selected scent diffuser helps compact areas feel more welcoming.",
                  i: <FaceSmileIcon />
                },
                {
                  t: "Premium Ambiance",
                  d: "Small spaces can feel more refined, clean, and thoughtfully designed.",
                  i: <SparklesIcon />
                },
                {
                  t: "Improved Personal Space",
                  d: "Bedrooms, desks, cars, and bathrooms become more pleasant to use daily.",
                  i: <HomeIcon />
                },
                {
                  t: "Smart Scent Control",
                  d: "Adjustable scent diffuser machines help manage intensity and consistency.",
                  i: <CheckCircleIcon />
                },
                {
                  t: "Reliable Diffusion Technology",
                  d: "Advanced aroma diffuser machines provide long-lasting and even fragrance output.",
                  i: <CloudIcon />
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
                  alt="Small Space Scent Diffuser Guide"
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
              Choose the Perfect <br /> Scent Diffuser
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Explore Cool Max Scent diffuser solutions designed for compact
              spaces, modern homes, offices, cars, and personal environments.
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
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

    document.title = "Cool Max Scent Diffusers for Dubai Supermarket Stores";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Transform your supermarket atmosphere with premium scent diffusers in Dubai that improve customer experience, boost engagement, and create fresh shopping environments. Contact Us Today!"
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
      "supermarket scent diffuser Dubai, scent diffuser for supermarkets, grocery store fragrance solutions, fragrance diffusers for supermarkets"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/supermarkets-dubai-scent-diffusers-shopping-experience/"
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
                Supermarket Scent Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              How Supermarkets in Dubai Use Scent Diffusers to Improve the Shopping Experience
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Transform your supermarket atmosphere with premium scent diffusers in Dubai that improve customer experience, boost engagement, and create fresh shopping environments. Contact Us Today!
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                Dubai’s retail industry is known for innovation, luxury, and exceptional customer experiences. Today, supermarkets across the city are going beyond visual merchandising and smart layouts by using scent diffusers to create a more inviting shopping environment. From fresh bakery aromas to clean citrus fragrances, scent marketing has become an important strategy for increasing customer satisfaction and encouraging longer shopping visits.
              </p>

              <p className="text-justify">
                The growing demand for a <strong>supermarket scent diffuser Dubai</strong> solution shows how businesses are investing in sensory marketing to stand out in a competitive retail market. Modern <strong>scent diffuser for supermarkets</strong> systems are designed to create a pleasant atmosphere that influences customer mood, purchasing behavior, and overall shopping comfort.
              </p>

              {/* ================= H2: PROBLEM ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Why Supermarkets in Dubai Are Investing in Scent Diffusers
                </h2>

                <p className="mb-8 text-justify">
                  Supermarkets in Dubai are investing in scent diffusers to create a more pleasant and memorable shopping experience. Fresh fragrances help customers feel comfortable, improve store ambiance, and encourage longer visits. Scent marketing also helps supermarkets strengthen brand identity and increase customer engagement.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Creating a Better Shopping Experience: Supermarkets in Dubai use scent diffusers to create a pleasant and welcoming environment. A refreshing fragrance helps customers feel more relaxed while shopping. This encourages longer store visits and improves customer satisfaction.",
                    "Maintaining Freshness and Cleanliness: Fragrance diffusers for supermarkets help maintain a clean and fresh atmosphere. Bakery, citrus, and floral scents make different store sections more appealing. Customers often associate pleasant fragrances with hygiene and product freshness.",
                    "Increasing Customer Engagement: Scent marketing can positively influence customer mood and shopping behavior. Grocery store fragrance solutions help create enjoyable shopping experiences. This can lead to repeat visits and increased customer engagement.",
                    "Strengthening Brand Identity: Many supermarkets in Dubai use signature fragrances to stand out from competitors. A consistent scent creates a memorable brand experience for customers. It also helps build trust, comfort, and customer loyalty."
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
              </motion.div>

              {/* ================= H2: WHY HOTELS INVEST ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  How Scent Diffusers Improve the Shopping Experience
                </h2>

                <p className="mb-8 text-justify">
                  A professional <strong>scent diffuser for supermarkets</strong> does more than distribute fragrance. It creates a welcoming atmosphere that builds a positive emotional connection between customers and the shopping environment. Research in sensory marketing shows that pleasant scents can encourage shoppers to stay longer and increase the likelihood of repeat visits.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Bakery Areas",
                      desc: "Bakery areas use warm vanilla or bread aromas to enhance specific departments and trigger direct appetite appeal."
                    },
                    {
                      title: "Fresh Produce",
                      desc: "Fresh produce sections use green or citrus fragrances to convey raw agricultural crispness and dynamic energy."
                    },
                    {
                      title: "Cleaning Products",
                      desc: "Cleaning product aisles maintain crisp and fresh scents to communicate baseline sanitary hygiene styles."
                    },
                    {
                      title: "Entrance Areas",
                      desc: "Entrance areas use signature fragrances to create strong first impressions from the absolute moment shoppers step inside."
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

                <p className="text-justify mt-6">
                  These <strong>grocery store fragrance solutions</strong> are carefully selected to match the supermarket’s branding and customer expectations. Advanced scent diffusion systems also ensure even fragrance distribution without becoming overpowering.
                </p>
              </motion.div>

              {/* ================= H2: SOLUTION ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Benefits of Grocery Store Fragrance Solutions
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Encourages Longer Shopping Visits",
                      desc: "A pleasant fragrance creates a relaxing shopping atmosphere for customers. When shoppers feel comfortable inside the store, they are more likely to spend extra time browsing products and exploring different sections."
                    },
                    {
                      title: "Improves Brand Image",
                      desc: "Fresh and clean scents help supermarkets create a professional and premium image. In Dubai’s competitive retail market, customers often associate pleasant fragrances with cleanliness, quality, and better service."
                    },
                    {
                      title: "Helps Control Unwanted Odors",
                      desc: "Fragrance diffusers for supermarkets help reduce unwanted smells from seafood counters, storage areas, and crowded spaces. A balanced fragrance environment keeps the store feeling fresh throughout the day."
                    },
                    {
                      title: "Creates a Better Customer Experience",
                      desc: "Grocery store fragrance solutions enhance the overall shopping experience by making the environment more inviting and enjoyable. A consistent scent can leave a positive impression and encourage repeat customer visits."
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
              </motion.div>

              {/* ================= H2: HOTEL-LIKE HOME ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Choosing the Right Supermarket Scent Diffuser in Dubai
                </h2>

                <p className="mb-8 text-justify">
                  Selecting the right <strong>supermarket scent diffuser Dubai</strong> system depends on store size, customer traffic, and fragrance goals. Large supermarkets usually require HVAC scent diffusion systems that evenly distribute fragrance across multiple departments. Smaller grocery stores may prefer standalone commercial diffusers for targeted scenting.
                </p>

                <p className="text-justify">
                  When choosing <strong>fragrance diffusers for supermarkets</strong>, retailers should focus on fragrance quality, diffuser technology, coverage area, and maintenance support. Working with experienced scent marketing companies in Dubai ensures customized fragrance solutions that align with the supermarket’s branding and customer expectations.
                </p>
              </motion.div>

              {/* ================= H2: CONCLUSION ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">
                  Conclusion
                </h2>

                <p className="mb-6 text-justify">
                  Scent marketing is transforming the retail industry in Dubai, and supermarkets are increasingly using advanced fragrance technologies to improve customer experiences. From creating welcoming entrances to enhancing product sections, a <strong>supermarket scent diffuser Dubai</strong> solution helps businesses build stronger customer connections and encourage repeat visits.
                </p>

                <p className="text-justify">
                  Investing in high-quality <strong>scent diffusers for supermarkets</strong> systems helps retailers create a fresh, memorable, and enjoyable shopping experience. Professional <strong>grocery store fragrance solutions</strong> can improve customer engagement, strengthen brand identity, and increase sales opportunities. Contact Cool Max Scent today for customized supermarket scent solutions in Dubai.
                </p>
              </motion.div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">
                  Retail Scent Strategy
                </h4>

                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Zoned Ambiance
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Use targeted scents like fresh bread or crisp produce aromas to enhance specific shopping departments.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Odor Control
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Neutralize heavy structural smells near seafood and storage counters with pure fragrance diffusers.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      HVAC Connection
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Integrate with commercial building ventilation networks for widespread, even micro-droplet coverages.
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
              Benefits of Supermarket <br />
              <span className="text-blue-600 italic font-light">
                Scent Architecture
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  t: "Longer Store Visits",
                  d: "A pleasant fragrance creates a relaxing atmosphere that encourages customers to linger and browse more products.",
                  i: <StarIcon />
                },
                {
                  t: "Strategic Mood Lift",
                  d: "Signature grocery store fragrances elevate customer mood, driving continuous organic retail metrics.",
                  i: <HeartIcon />
                },
                {
                  t: "Premium Brand Value",
                  d: "A balanced aesthetic aroma immediately matches the sophisticated premium expectations of modern retail in Dubai.",
                  i: <TrophyIcon />
                },
                {
                  t: "Departmental Separation",
                  d: "Fragrance zones allow distinct atmospheric boundaries between general lanes and gourmet hot food centers.",
                  i: <HomeIcon />
                },
                {
                  t: "Unwanted Odor Isolation",
                  d: "Advanced commercial diffusion directly covers underlying storage, fresh meat, and loading bay odors.",
                  i: <CloudIcon />
                },
                {
                  t: "Lasting Consumer Memory",
                  d: "Keeps your supermarket environment cleanly locked into repeat customer routines long after checkout lines.",
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
                  alt="How Supermarkets in Dubai Use Scent Diffusers to Improve the Shopping Experience"
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
              Transform Your Supermarket <br /> Experience With Premium Scent Diffusers
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Contact Cool Max Scent today for customized fragrance solutions that increase customer engagement.
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
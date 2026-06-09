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
import BlogHeroImg from "../../asset/blogimg/blog28.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AromaDiffuserMachinesUAEBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Premium Essential Oils for Diffusers in Dubai | CoolMax";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Upgrade your environment with the best essential oils for diffusers in Dubai. Discover premium scents from Cool Max Scent. Contact Us Today!"
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
      "Essential Oil, Diffuser Scents, Essential Oils Dubai, Best Essential Oils for Diffusers, Scent Diffuser Oils Dubai"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/premium-essential-oils-for-diffusers-dubai/"
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
                Premium Scent Diffusers for All Spaces
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              Premium Essential Oils for Diffusers in Dubai: A Complete Guide by Cool Max Scent
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Creating a pleasant and memorable atmosphere starts with choosing the right essential oil for your diffuser. In Dubai, where luxury, comfort, and wellness are highly valued, premium diffuser scents have become an essential part of homes, offices, hotels, and commercial spaces.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                At Cool Max Scent, we specialize in providing high-quality fragrance solutions that enhance indoor environments and create lasting impressions.
              </p>

              <p className="text-justify">
                Whether you are looking to improve relaxation, boost productivity, or create a welcoming ambiance, selecting the best essential oils for diffusers can make a significant difference.
              </p>

              <p className="text-justify">
                This guide explores the benefits of <strong>Premium Essential Oils Dubai</strong> customers trust and how they can transform any space.
              </p>

              {/* ================= H2: WHY POPULAR ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Why Choose Premium Essential Oil Products from Cool Max Scent?
                </h2>

                <p className="mb-8 text-justify">
                  A <strong>premium essential oil in Dubai</strong> offers more than just a pleasant fragrance. High-quality oils provide consistent aroma diffusion, longer-lasting performance, and a more enjoyable scent experience. At Cool Max Scent, we carefully select fragrance blends designed for both residential and commercial applications.
                </p>

                 <p className="mb-8 text-justify">
                  Businesses across Dubai use diffuser scents to enhance customer experiences, while homeowners enjoy creating relaxing environments that promote well-being. The right scent can influence mood, increase comfort, and leave a lasting positive impression.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Long-lasting fragrance performance",
                    "Consistent scent distribution",
                    "Enhanced mood and relaxation",
                    "Suitable for homes and commercial spaces",
                    "High-quality ingredients and formulations"
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
                  Premium scent solutions help create an inviting atmosphere that reflects sophistication and attention to detail. Premium fragrance oils help transform any environment, whether it's a high-end residence, hospitality venue, retail space, or modern workplace. 
                </p>
              </motion.div>

              {/* ================= H2: CHOOSE RIGHT DIFFUSER ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  Best Essential Oils for Diffusers Recommended by Cool Max Scent
                </h2>

                <p className="mb-8 text-justify">
                  Choosing the best essential oils for diffusers depends on your desired atmosphere and purpose. Different scents offer unique benefits, making it important to select oils that align with your goals.
                </p>

                <p className="mb-8 text-justify">
                  Many Dubai residents prefer fragrance solutions that create a sense of luxury while supporting wellness and comfort.
                </p>


                <div className="space-y-6">
                  {[
                    {
                      title: "Lavender",
                      desc: "Promotes relaxation and stress relief."
                    },
                    {
                      title: "Eucalyptus",
                      desc: "Creates a refreshing and clean atmosphere."
                    },
                    {
                      title: "Lemongrass",
                      desc: "Provides an energizing and uplifting scent."
                    },
                    {
                      title: "Peppermint",
                      desc: "Supports focus and mental clarity."
                    },
                    {
                      title: "Citrus Blends",
                      desc: "Adds freshness and positivity to any space."
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-6 rounded-3xl border border-slate-100"
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-3 text-left">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-justify leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

                <p className="mb-8 text-justify">
                  From residential spaces to luxury hotels and professional workplaces, these diffuser scents are favored for their ability to enhance ambiance and comfort. Their versatility makes them ideal for daily use while delivering a premium fragrance experience. Selecting the right scent helps create the desired mood and enhances the comfort of everyone in the space.
                </p>

              {/* ================= H2: PLACEMENT & USAGE ================= */}
              <motion.div
                {...fadeInUp}
                className="py-12 border-t border-slate-100"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                  How Cool Max Scent Delivers Premium Scent Diffuser Oils Dubai Businesses Trust
                </h2>

                <p className="mb-8 text-justify">
                  The demand for Scent diffuser oils Dubai continues to grow as businesses recognize the impact of scent marketing and ambient fragrance solutions. At Cool Max Scent, we provide customized scenting solutions tailored to various industries, including hospitality, retail, healthcare, and corporate environments.
                </p>

                <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">
                  Customized Fragrance Solutions
                </h3>
                
                <p className="mb-8 text-justify">
                  Tailored scent experiences designed to match your brand identity and ambiance. Create a memorable environment with fragrances crafted to suit every space.
                </p>

                <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">
                  Premium-Quality Diffuser Oils
                </h3>

                <p className="mb-8 text-justify">
                  Made with high-grade ingredients for long-lasting and consistent fragrance performance. Enjoy rich, luxurious aromas that elevate comfort and leave a lasting impression.
                </p>
                
                <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">
                  Reliable Scent Diffusion Technology
                </h3>

                <p className="text-justify">
                  Advanced diffusion systems ensure even fragrance distribution across any environment. Delivering efficient, quiet, and continuous scenting for homes and commercial spaces.
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
                  Premium essential oil products have become an important part of creating luxurious and inviting environments throughout Dubai. From enhancing relaxation at home to improving customer experiences in commercial spaces, the right diffuser scents can transform any setting.
                </p>

                <p className="text-justify mb-6">
                  By choosing the best essential oils for diffusers and partnering with a trusted provider, you can enjoy long-lasting fragrance performance and exceptional results.
                </p>

                <p className="text-justify">
                  If you are looking for premium Essential oils Dubai solutions or high-quality Scent diffuser oils Dubai, contact us Cool Max Scent expert today.
                </p>
              </motion.div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">
                  Diffuser Best Practices
                </h4>

                <div className="space-y-6 mb-8">
                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Strategic Placement
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Keep the diffuser in an open area, avoid blocking airflow, and place it away from direct sunlight for optimal scent distribution.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Intensity Control
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Start with a low intensity and adjust based on room size, foot traffic, and ambient airflow to avoid overpowering the space.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-sm mb-1 text-left text-white">
                      Consistent Maintenance
                    </h5>
                    <p className="text-xs text-slate-400 text-left">
                      Clean the machine regularly, use only recommended premium fragrance oils, and check nozzles to ensure long-lasting performance.
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
              Benefits of Optimal <br />
              <span className="text-blue-600 italic font-light">
                Aroma Diffusion
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  t: "Enhanced Atmosphere",
                  d: "Instantly makes any residential or commercial space feel significantly more welcoming, relaxing, and comfortable.",
                  i: <StarIcon />
                },
                {
                  t: "Stress Reduction",
                  d: "Calming and balanced fragrances help improve relaxation and reduce ambient anxiety in high-stress environments.",
                  i: <HeartIcon />
                },
                {
                  t: "Luxury Brand Feel",
                  d: "Premium scent environments create a high-end impression for all visitors, clients, and potential customers.",
                  i: <TrophyIcon />
                },
                {
                  t: "Better Customer Experience",
                  d: "Retail stores and hospitality businesses leverage effective scent marketing to create memorable interactions.",
                  i: <BuildingOffice2Icon />
                },
                {
                  t: "Odor Elimination",
                  d: "Properly utilized diffusers neutralize unwanted smells rather than simply masking them with heavy perfumes.",
                  i: <CloudIcon />
                },
                {
                  t: "Long-Lasting Freshness",
                  d: "When maintained correctly, advanced diffuser systems provide steady, balanced fragrance throughout the entire day.",
                  i: <HomeIcon />
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
                  alt="How to Use Aroma Diffusers Effectively: A Complete Guide"
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
              Maximize Your <br /> Fragrance Experience
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Explore CoolMax premium scent diffusers for all spaces and create a refreshing atmosphere that leaves a lasting impression.
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
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  SparklesIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  HomeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  CpuChipIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/5.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AromaDiffuserMachineUAEBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Aroma Diffuser Machine UAE | Fragrance Solutions in UAE";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover the best aroma diffuser machine UAE solutions for homes, offices, hotels, and retail spaces. Explore professional fragrance solutions in UAE.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/aroma-diffuser-machine-uae-fragrance-solutions-in-uae/');
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left pt-16">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        
        {/* ================= HERO SECTION (H1) ================= */}
        <section className="pt-20 pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Lifestyle Innovation 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 uppercase">
              <Link to="/products/" className="hover:text-blue-600 transition-colors">Aroma Diffuser Machine UAE</Link>: <br />
              <span className="italic text-slate-400 font-light lowercase">How Fragrance Solutions are Transforming Modern Spaces</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
              Creating a great space is no longer only about interiors, lighting, or furniture. Today, people remember how a place feels.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                A clean, fresh, and welcoming environment can leave a stronger impression than decoration alone. This is one reason why more businesses and homeowners are searching for the right <strong><Link to="/products/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">Aroma Diffuser Machine UAE</Link></strong> solutions. From luxury hotels and offices to homes and retail stores, fragrance is becoming an important part of the overall experience.
              </p>
              <p className="text-justify">
                At the same time, demand for professional <strong><Link to="/scent-marketing-solutions/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">Fragrance Solutions in UAE</Link></strong> is growing because people want more than a temporary air freshener. They want reliable systems that create a lasting atmosphere.
              </p>

              {/* WHY FRAGRANCE MATTERS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Why Fragrance Matters in Modern Spaces</h2>
                <p className="mb-8 text-justify">
                  Walk into two similar spaces. One looks beautiful but feels plain. The other feels fresh, welcoming, and comfortable the moment you enter. What creates the difference? Often, it is scent. Fragrance can influence how people feel, creating comfort, calmness, energy, or a sense of luxury.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Creates a positive first impression",
                    "Makes spaces feel clean and inviting",
                    "Improves comfort for guests and staff",
                    "Supports brand image",
                    "Helps people remember the experience"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center text-sm bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WHAT IS AN AROMA DIFFUSER MACHINE (H2) */}
              <motion.div {...fadeInUp} className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white mt-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight relative z-10">What Is an Aroma Diffuser Machine?</h2>
                <p className="text-slate-400 mb-8 relative z-10 text-justify">
                  An aroma diffuser machine is a device designed to spread fragrance evenly through a space using advanced diffusion technology. Professional systems are built for consistency and better coverage, suitable for:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 text-center">
                   {["Homes", "Offices", "Hotels", "Retail"].map((place, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs font-black uppercase tracking-widest text-blue-400">{place}</div>
                   ))}
                </div>
              </motion.div>
            </div>

            {/* SIDEBAR WIDGET */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Dubai Fragrance Experts</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Transform your space with a custom scent strategy designed for the UAE climate and market.
                </p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-600 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-blue-700 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition-all border border-blue-500 text-center">
                    Get Site Assessment
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= BUSINESSES CHOICE (H2) ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-20 tracking-tighter">Why Businesses in UAE <br/><span className="text-blue-600 italic font-light text-7xl leading-none">Choose Aroma Diffuser Machines</span></h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Better Experience", icon: <UserGroupIcon />, desc: "Customers notice environments that feel pleasant. A balanced fragrance improves overall impressions." },
                { title: "Brand Identity", icon: <SparklesIcon />, desc: "Many brands use scent as part of their identity to help customers remember the business." },
                { title: "Employee Comfort", icon: <HomeIcon />, desc: "Offices benefit from fresh surroundings that support employee comfort and focus." },
                { title: "Consistency", icon: <ClockIcon />, desc: "Unlike manual sprays, professional machines provide steady fragrance throughout the day." }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                  <div className="text-blue-600 w-12 h-12 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-justify">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES SECTION (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp} className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tighter">How <Link to="/scent-marketing-solutions/" className="text-blue-600 hover:underline">Fragrance Solutions in UAE</Link> Help Different Industries</h2>
                <div className="space-y-6">
                  {[
                    { t: "Hotels & Hospitality", d: "Creating premium welcome experiences in lobbies and guest areas." },
                    { t: "Retail Stores", d: "Making environments more enjoyable to encourage longer dwell times." },
                    { t: "Corporate Offices", d: "Designing clean, professional surroundings for visitors and staff." },
                    { t: "Clinics & Healthcare", d: "Utilizing soft, calming scents to help reduce patient stress." }
                  ].map((ind, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0" />
                      <div>
                         <h4 className="font-bold text-slate-900 text-sm">{ind.t}</h4>
                         <p className="text-xs text-slate-500">{ind.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Hotel Scent Solution" className="w-full h-auto rounded-[2rem] shadow-2xl transform rotate-2 mx-auto" />
                </div>
              </motion.div>
           </div>
        </section>

        {/* ================= CHOOSING FACTORS & PRO VS BASIC (H2) ================= */}
        <section className="py-24 bg-slate-900 text-white px-6 lg:px-16 text-left">
           <div className="max-w-[1400px] mx-auto">
              <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl font-serif mb-12 tracking-tighter text-white">Choosing the Right System & Why Professional Matters</motion.h2>
              <div className="grid md:grid-cols-2 gap-16">
                 <motion.div {...fadeInUp}>
                    <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-widest">Selection Criteria</h3>
                    <ul className="space-y-4">
                       <li className="text-slate-300 text-sm"><strong className="text-white">Space Size:</strong> Match the solution to your square footage.</li>
                       <li className="text-slate-300 text-sm"><strong className="text-white">Control Features:</strong> Look for Bluetooth, app control, and smart scheduling.</li>
                       <li className="text-slate-300 text-sm"><strong className="text-white">Refill Capacity:</strong> Larger tanks reduce maintenance frequency.</li>
                       <li className="text-slate-300 text-sm"><strong className="text-white">Support:</strong> Ensure reliable after-sales and installation service.</li>
                    </ul>
                 </motion.div>
                 <motion.div {...fadeInUp}>
                    <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-widest">Professional vs Basic</h3>
                    <div className="grid grid-cols-1 gap-4">
                       <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                          <p className="text-blue-200 text-xs font-black uppercase mb-2">Professional Systems</p>
                          <p className="text-slate-400 text-sm">Even distribution, long-lasting performance, and full intensity control for large spaces.</p>
                       </div>
                       <div className="p-6 bg-red-900/10 rounded-2xl border border-red-500/10">
                          <p className="text-red-400 text-xs font-black uppercase mb-2">Basic Air Fresheners</p>
                          <p className="text-slate-400 text-sm">Short-lasting effects, uneven spread, and limited coverage that fades quickly.</p>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* ================= COOL MAX VALUE SECTION (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 max-w-5xl mx-auto text-left">
           <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter text-center">Why Cool Max Scent Is Trusted</h2>
              <p className="text-lg text-slate-500 font-light mb-12 text-center">
                We focus on recommending the right solution based on real needs, not one-size-fits-all products.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { t: "Quality Gear", i: <CpuChipIcon />, d: "Advanced diffusion machines for homes and offices." },
                  { t: "Expert Guidance", i: <LightBulbIcon />, d: "Personalized advice based on your unique space." },
                  { t: "Full Support", i: <ShieldCheckIcon />, d: "Ongoing maintenance and refill assistance across UAE." }
                ].map((val, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <div className="text-blue-600 w-8 h-8 mb-4">{val.i}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{val.t}</h4>
                    <p className="text-xs text-slate-500">{val.d}</p>
                  </div>
                ))}
              </div>
           </motion.div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-24 bg-white px-6 lg:px-16 border-t border-slate-100 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12 uppercase font-bold">Frequently Asked Questions</h2>
              <div className="space-y-6">
                 {[
                   { q: `What is an aroma diffuser machine?`, a: `An aroma diffuser machine spreads fragrance evenly through a space using advanced diffusion technology for consistent scent coverage.` },
                   { q: "Where can aroma diffuser machines be used?", a: "They can be used in homes, offices, hotels, clinics, retail stores, and commercial spaces." },
                   { q: "Why are fragrance solutions important for businesses?", a: "They improve customer experience, create a better atmosphere, and strengthen brand perception." },
                   { q: "How do I choose the right aroma diffuser machine in UAE?", a: "Choose based on space size, coverage area, features, refill capacity, and support service." },
                   { q: "Are professional diffuser machines better than air fresheners?", a: "Yes, they provide longer-lasting fragrance, better coverage, and more control than basic air fresheners." }
                 ].map((faq, i) => (
                   <motion.div key={i} {...fadeInUp} className="p-6 bg-slate-50 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-2">Q: {faq.q}</h4>
                      <p className="text-sm text-slate-500">A: {faq.a}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 text-center uppercase font-bold text-white">
              Elevate Your <br />Atmosphere Today
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              The right scent can change how people experience your space. Cool Max Scent is ready to help you find the best fit for your space in UAE.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
              </a>
              <Link to="/contact/" className="w-full sm:w-auto px-12 py-6 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-3">
                Request Consultation <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
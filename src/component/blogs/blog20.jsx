import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  FaceSmileIcon,

  BuildingOffice2Icon,
  CloudIcon,
  HeartIcon,
  UserGroupIcon,
 
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function MallAromaSolutionsBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "How Modern Shopping Malls in Dubai Use Aroma Diffuser Solutions Across Every Space";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how malls in Dubai use aroma diffuser solutions, HVAC scent systems, and commercial aroma diffusers to enhance customer experience.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/aroma-diffuser-solutions-in-dubai-for-shopping-malls');
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden pt-16">
      
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
              <BuildingOffice2Icon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Mall Fragrance Strategy</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              How Modern Shopping Malls in Dubai Use Different <span className="text-blue-600">Aroma Diffuser Solutions</span> Across Every Space
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              If you’ve ever walked through a luxury shopping mall in Dubai, such as Dubai Mall, Mall of the Emirates, or Nakheel Mall, the environment feels calm, premium, and welcoming. One of the biggest reasons behind that experience is fragrance.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                Today, modern malls are investing heavily in <strong><Link to="/" className="text-blue-600 font-medium underline">Aroma diffuser solutions in Dubai</Link></strong> to improve customer comfort, create brand memory, and enhance the overall shopping atmosphere. From entrances and luxury boutiques to food courts and VIP lounges, every zone inside a mall requires a different scenting strategy.
              </p>

              {/* WHY IT MATTERS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Aroma Diffuser Solutions Matter in Modern Shopping Malls</h2>
                <p className="mb-8 text-justify">
                  Modern shopping malls are designed to deliver experiences, not just shopping. A properly planned fragrance strategy helps malls improve customer mood, increase visitor engagement, and enhance luxury perception.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                     "Comfortable indoor environments",
                     "Premium ambiance & Fresh spaces",
                     "Support for brand identity",
                     "Increased visitor engagement"
                   ].map((item, i) => (
                     <div key={i} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* 1. HVAC SECTIONS (H2) */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-slate-900 text-left">1. Mall Entrance & Central Atrium</h2>
                <p className="text-justify">
                  The entrance creates the first impression. For these wide open areas, malls use professional <strong><Link to="/" className="text-blue-600 font-medium underline">Large Area & HVAC Aroma Diffuser</Link></strong> systems connected directly to existing air systems. Recommended products include the <strong><Link to="/" className="text-blue-600 font-medium">AeroBlack Pro Diffuser</Link></strong> and <strong><Link to="/" className="text-blue-600 font-medium">AirPulse 150</Link></strong>.
                </p>
              </motion.div>

              {/* 2. COMMERCIAL SECTIONS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">2. Luxury Brand Stores & Premium Retail Outlets</h2>
                <p className="text-justify">
                  Luxury stores require targeted scent control to influence buying behavior. This is where <strong><Link to="/" className="text-blue-600 font-medium underline">Commercial Aroma Diffusers</Link></strong> like the <strong><Link to="/" className="text-blue-600 font-medium">AeroBlack Med Diffuser</Link></strong> or <strong><Link to="/" className="text-blue-600 font-medium">MistBox X Diffuser</Link></strong> become essential for improved customer comfort.
                </p>
              </motion.div>

              {/* 3. WALL MOUNTED (H2) */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-slate-900 text-left">3. Food Courts & Dining Zones</h2>
                <p className="text-justify">
                  Dining zones need to manage multiple food aromas. To maintain freshness, malls install <strong><Link to="/" className="text-blue-600 font-medium underline">Wall Mounted & Ceiling Aroma Diffusers</Link></strong>. High-performance units like the <strong><Link to="/" className="text-blue-600 font-medium">CeilAir Pro Diffuser</Link></strong> and <strong><Link to="/" className="text-blue-600 font-medium">AeroMax Pro</Link></strong> manage odor balance efficiently.
                </p>
              </motion.div>

              {/* 4. DESKTOP (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">4. Small Kiosks & Customer Service Desks</h2>
                <p className="text-justify">
                  Small kiosks and concierge desks need compact fragrance solutions. <strong><Link to="/" className="text-blue-600 font-medium underline">Desktop & Small Space Aroma Diffusers</Link></strong> like the <strong><Link to="/" className="text-blue-600 font-medium">AromaDesk</Link></strong> are perfect for these enclosed areas.
                </p>
              </motion.div>

              {/* 5. FLOOR STANDING (H2) */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-slate-900 text-left">5. Mall Corridors & Waiting Lounges</h2>
                <p className="text-justify">
                  Transition spaces require aesthetics and performance. <strong><Link to="/" className="text-blue-600 font-medium underline">Floor-Standing Aroma Diffusers</Link></strong> such as the <strong><Link to="/" className="text-blue-600 font-medium">NanoPillar Diffuser</Link></strong>, <strong><Link to="/" className="text-blue-600 font-medium">AeroPillar Diffuser</Link></strong>, and <strong><Link to="/" className="text-blue-600 font-medium">Titan Diffuser</Link></strong> provide effective coverage and luxury appeal.
                </p>
              </motion.div>

            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Strategic Choice</h4>
                <p className="text-sm text-slate-300 mb-8 text-left">
                  Malls today are adopting complete <strong><Link to="/" className="text-blue-400">Mall fragrance solutions</Link></strong> to create consistent sensory experiences across multiple floors.
                </p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= BENEFITS SECTION ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 tracking-tighter text-left">Benefits of Strategic <br/><span className="text-blue-600 italic font-light">Mall Fragrance Solutions</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Better Customer Experience", d: "Creates a more relaxing and enjoyable environment for long shopping trips.", i: <FaceSmileIcon /> },
                  { t: "Stronger Brand Memory", d: "Customers remember spaces through specific signature scent associations.", i: <HeartIcon /> },
                  { t: "Increased Engagement", d: "Pleasant environments encourage longer visits and higher dwell times.", i: <AdjustmentsHorizontalIcon /> },
                  { t: "Enhanced Luxury Perception", d: "Premium fragrance improves the overall quality perception of the mall.", i: <SparklesIcon /> },
                  { t: "Strategic Scent Marketing", d: "Professional scenting strengthens commercial branding across large areas.", i: <UserGroupIcon /> },
                  { t: "Optimized Atmosphere", d: "Different zones get precisely the right scent strength they require.", i: <CloudIcon /> }
                ].map((item, i) => (
                  <motion.div key={i} {...fadeInUp} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                    <div className="text-blue-600 w-10 h-10 mb-6">{item.i}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 text-left">{item.t}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed text-justify">{item.d}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* ================= CONCLUSION (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 border-t border-slate-100 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">Conclusion</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 text-justify">
                Every section inside a modern shopping mall serves a different purpose. From powerful <strong>HVAC aroma diffuser</strong> systems in atriums to elegant units in lounges, professional fragrance planning helps malls create immersive customer experiences. Successful malls are no longer relying on basic air fresheners. They are investing in complete Mall fragrance solutions designed specifically for high-traffic environments. <strong>Cool Max</strong> helps businesses choose the right systems based on space size, customer flow, and brand goals to transform how customers experience a space.
              </p>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Mall Scent Experience" className="w-full h-auto rounded-[2rem] shadow-2xl mx-auto max-w-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Plan Your Mall <br />Scent Strategy
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Transform your commercial environment with advanced scent diffusion from Cool Max Scent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
              </a>
              <Link to="/contact/" className="w-full sm:w-auto px-12 py-6 bg-blue-800 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3">
                Get a Custom Audit <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
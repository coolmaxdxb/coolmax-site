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
  ShoppingBagIcon,
  HomeIcon,
  BuildingOffice2Icon,
  CloudIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SummerOdorControlBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Stop Summer Odors Fast with Smart Scent Solutions I Cool Max Scent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Beat summer odors in homes, offices, and malls. Discover diffuser solutions for long-lasting freshness. Contact Cool Max Scent experts today.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://coolmaxscent.com/blog/summer-odor-control-homes-offices-malls-with-cool-max-scent/');
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
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Summer Freshness Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              What’s Behind <span className="text-blue-600">Summer Odors</span> in Your Home, Office, Mall, and Supermarket?
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Summer heat makes indoor spaces smell worse because warm air and humidity help bacteria grow faster. Many regular air fresheners only hide these smells—we help you stop them.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                In homes, odors come from kitchens, trash, and bathrooms. In offices, carpets and air conditioning systems can trap bad smells. Malls and supermarkets have strong odors due to heavy foot traffic and food areas. A better solution is using diffusers with quality aroma oils, like those from <strong>Cool Max Scent</strong>, which spread fragrance evenly and last longer. This helps keep your space fresh, clean, and welcoming all day.
              </p>

              {/* WHY WORSE (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Summer Odors Get Worse in Indoor Spaces</h2>
                <p className="mb-8 text-justify">
                  Warm temperatures create the perfect breeding ground for bacteria and mold. When humidity increases, moisture gets trapped in carpets, upholstery, air ducts, and even walls, allowing odor-causing microbes to thrive.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">Key Odor Triggers This Summer:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                     "Heat intensifies smell buildup",
                     "Humidity makes odors linger longer",
                     "Poor airflow traps stale air indoors",
                     "Unclean AC systems recirculate odors",
                     "High foot traffic amplifies smells"
                   ].map((benefit, i) => (
                     <div key={i} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{benefit}</span>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* COMMON SOURCES (H2) */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-slate-900 text-left">Common Sources of Odors Across Different Spaces</h2>
                <p className="text-justify">Not all indoor environments produce odors in the same way. Each space has its own unique sources that contribute to unpleasant smells during summer.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <HomeIcon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Homes</h4>
                    <p className="text-xs text-slate-500">Kitchens, garbage areas, and damp bathrooms are major sources.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <BuildingOffice2Icon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Offices</h4>
                    <p className="text-xs text-slate-500">Furniture and carpets absorb long-term odors in meeting rooms.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <ShoppingBagIcon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Malls</h4>
                    <p className="text-xs text-slate-500">Food courts and heavy foot traffic zones intensify smells.</p>
                  </div>
                </div>
              </motion.div>

              {/* TRADITIONAL LIMITS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">Why Traditional Air Fresheners Are Not Enough</h2>
                <p className="text-justify">Many people rely on sprays, but these only mask odors instead of eliminating them. In larger environments, these solutions fail to distribute fragrance evenly and can mix with odors to create an even less pleasant experience.</p>
                <ul className="mt-6 space-y-3">
                  {["Air fresheners only mask odors temporarily", "Uneven fragrance distribution in large spaces", "Chemical sprays may affect air quality"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Odor Audit</h4>
                <p className="text-sm text-slate-300 mb-8 text-left">Contact our experts for a professional odor control evaluation for your commercial or residential space.</p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= SOLUTIONS SECTION ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 tracking-tighter text-left">How Cool Max Scent Diffusers <br/><span className="text-blue-600 italic font-light">Provide a Smarter Solution</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Advanced Atomization", d: "Releases fragrance in ultra-fine particles for even coverage.", i: <CloudIcon /> },
                  { t: "HVAC Integration", d: "Allows scent to spread through existing air systems—ideal for malls.", i: <AdjustmentsHorizontalIcon /> },
                  { t: "Smart Controls", d: "Bluetooth and App operation for easy intensity adjustment.", i: <SparklesIcon /> },
                  { t: "Low Maintenance", d: "Designed for low noise and minimal servicing requirements.", i: <CheckCircleIcon /> },
                  { t: "Residential & Commercial", d: "Versatile systems suitable for homes, offices, and vehicles.", i: <FaceSmileIcon /> },
                  { t: "Long-lasting Performance", d: "Consistent fragrance delivery even in the hottest summer months.", i: <SparklesIcon /> }
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
                Summer odors can quickly turn any indoor space into an uncomfortable environment. While traditional air fresheners provide short-term relief, they fail to solve the root problem. A more effective approach is using advanced diffuser systems that ensure consistent, long-lasting fragrance and better air quality. By choosing the right scenting solution, you can create a clean, welcoming atmosphere in any space—no matter how intense the summer heat becomes.
              </p>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Summer Scent Solution" className="w-full h-auto rounded-[2rem] shadow-2xl mx-auto max-w-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Create a Fresh <br />Experience Today
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Transform your environment into a fresh, inviting experience with Cool Max Scent experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> Contact Experts
              </a>
              <Link to="/contact/" className="w-full sm:w-auto px-12 py-6 bg-blue-800 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3">
                Book a Consultation <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
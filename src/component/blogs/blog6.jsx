import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CloudIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon 
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/hero/hero3.gif"; 

export default function HVACAreaScentBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO update
    document.title = "How Large Area & HVAC Aroma Diffusers Transform Commercial Spaces | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how Large Area & HVAC Aroma Diffusers in UAE create inviting commercial environments. Learn about HVAC scent diffusers for offices, malls & hotels.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/large-area-hvac-aroma-diffusers-commercial-spaces/');
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
              <CloudIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Industrial Precision</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8">
              How Large Area & HVAC Aroma Diffusers Transform <br />
              <span className="italic text-slate-400 font-light text-left">Commercial Spaces</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
              Have you ever walked into a building and instantly felt... different? Maybe more relaxed. More energized. More welcome. You couldn't quite put your finger on why.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              
              <div className="space-y-6">
                <p className="text-justify">
                  The decor looked normal. The music was standard. Nothing seemed unusual. But something felt off—or rather, something felt right. That feeling you couldn't explain? It was probably the air. Specifically, the scent in the air. And if the space was large—a mall, a hotel lobby, a corporate tower—chances are it came from Large Area & HVAC Aroma Diffusers in UAE.
                </p>
                <p className="text-justify">
                  Here's the thing about commercial spaces. People notice when something's wrong. Bad smells drive them away. But when things are right? They don't think about it. They just feel comfortable. They stay longer. They come back. That invisible comfort is exactly what professional scenting delivers.
                </p>
              </div>

              <div className="py-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">What Are Large Area Aroma Diffusers?</h2>
                <p className="mb-6 text-justify">
                  Let's start with the basics. Large area aroma diffusers are professional-grade machines designed to fragrance big spaces—areas that regular plug-in diffusers simply cannot handle.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                        <h4 className="text-blue-600 font-bold mb-4 text-sm uppercase flex items-center gap-2"><BoltIcon className="w-4 h-4"/> Standalone Large Area</h4>
                        <p className="text-sm">Powerful units strategically placed. Cold-air technology breaks oils into microscopic particles. One unit can fragrance up to 500 square meters.</p>
                    </div>
                    <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl">
                        <h4 className="text-blue-400 font-bold mb-4 text-sm uppercase flex items-center gap-2"><CloudIcon className="w-4 h-4"/> HVAC-Integrated</h4>
                        <p className="text-sm">Connects directly to your building's existing ventilation. Fragrance is distributed through the same ducts as your AC for complete, even coverage.</p>
                    </div>
                </div>
              </div>

              <div className="py-10 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">Why Commercial Spaces Need Professional Scenting</h2>
                <div className="space-y-6 text-justify">
                  <p><strong>The Climate Factor:</strong> For much of the year in the UAE, we spend almost all our time indoors. Air conditioning runs constantly. Without proper scenting, recirculated air becomes stale or unpleasant.</p>
                  <p><strong>The Expectation Factor:</strong> Dubai and Abu Dhabi are built on luxury. Visitors arrive with high expectations. Elite establishments don't just meet expectations—they exceed them through sensory branding.</p>
                  <p><strong>The Competition Factor:</strong> Every detail matters. A pleasant scent might not be the reason someone chooses you, but an unpleasant one will definitely be why they choose a competitor next time.</p>
                </div>
              </div>

              <div className="py-10 bg-blue-50 rounded-[3rem] p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">How HVAC Scent Diffusers Work</h2>
                <p className="text-justify mb-6">
                  HVAC scent diffusers install directly into your existing ductwork. A separate unit holds the fragrance oil and uses compressed air to atomize it into particles so small they measure in microns.
                </p>
                <p className="text-justify font-bold text-blue-900">
                  The beauty of this system is its invisibility. Visitors never see a diffuser or hear a machine; they simply experience a consistent, pleasant aroma.
                </p>
              </div>

              <div className="py-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-slate-900 uppercase font-bold">Key Benefits of HVAC Integration</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Benefit</th>
                        <th className="px-6 py-4">What It Means For You</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { b: "Even Distribution", m: "Every corner of your space receives the same fragrance intensity" },
                        { b: "Invisible Technology", m: "No equipment visible in customer areas" },
                        { b: "Centralized Control", m: "Manage your entire building's scent from one panel" },
                        { b: "Scalability", m: "Works for small offices and massive malls equally well" },
                        { b: "Consistency", m: "Same fragrance experience, every single day" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900">{row.b}</td>
                          <td className="px-6 py-4 text-slate-600">{row.m}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-10 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-slate-900">Applications Across Industries</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-serif text-blue-600 mb-3">Hotels & Hospitality</h3>
                    <p className="text-justify">The first breath a guest takes sets the tone for their entire stay. Many luxury hotels in Dubai use HVAC-integrated systems to fragrance lobbies, corridors, and meeting rooms.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-blue-600 mb-3">Corporate Offices</h3>
                    <p className="text-justify">Scent affects focus. Pleasant environments reduce stress, improve concentration, and increase overall job satisfaction.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-blue-600 mb-3">Retail Spaces & Malls</h3>
                    <p className="text-justify">The longer customers stay, the more they spend. Pleasant scents trigger positive emotional responses that make people more likely to browse and buy.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-blue-600 mb-3">Healthcare Facilities</h3>
                    <p className="text-justify">Subtle, calming fragrances can reduce patient anxiety, create a better visitor experience, and mask clinical smells.</p>
                  </div>
                </div>
              </div>

              <div className="py-16 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-white uppercase font-bold">Choosing the Right System for Your Space</h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-700 mb-10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-800 text-blue-400 uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Space Type</th>
                        <th className="px-6 py-4">Recommended Solution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {[
                        { s: "Small office (under 100 sqm)", r: "Desktop or wall-mounted diffuser" },
                        { s: "Medium office (100-500 sqm)", r: "Multiple standalone units" },
                        { s: "Large office (500+ sqm)", r: "HVAC-integrated system" },
                        { s: "Hotel lobby", r: "Floor-standing units + HVAC" },
                        { s: "Shopping mall", r: "HVAC-integrated throughout" },
                        { s: "Hospital", r: "Zoned HVAC system" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-800 transition-colors">
                          <td className="px-6 py-4 font-medium">{row.s}</td>
                          <td className="px-6 py-4 text-slate-400">{row.r}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="py-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">Why Cool Max?</h2>
                <p className="text-justify mb-6">
                  Since 2020, Cool Max has provided Large Area & HVAC Aroma Diffusers in UAE. We evaluate airflow patterns, consider your brand identity, and match technology with the right fragrance solutions.
                </p>
                <div className="p-8 border border-slate-100 rounded-3xl bg-slate-50 flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <p className="flex items-center gap-3 text-base font-medium"><WrenchScrewdriverIcon className="w-5 h-5 text-blue-600"/> Professional Installation</p>
                    <p className="flex items-center gap-3 text-base font-medium"><AdjustmentsHorizontalIcon className="w-5 h-5 text-blue-600"/> Custom System Configuration</p>
                    <p className="flex items-center gap-3 text-base font-medium"><ShieldCheckIcon className="w-5 h-5 text-blue-600"/> 24/7 Technical Support</p>
                  </div>
                </div>
              </div>

              <div className="py-16 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 uppercase">Final Thoughts</h2>
                <p className="text-justify">
                  The way your space smells matters more than most business owners realize. Large Area & HVAC Aroma Diffusers in UAE from Cool Max give you complete control over your indoor environment.
                </p>
              </div>

            </div>

            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400 relative z-10">Commercial Scenting</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10">
                  Elevate your business environment. Discover how Commercial HVAC Scenting Solutions can transform your facility.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Specialist
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all text-center">
                    Free Consultation
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">The Scent Engine</h4>
                <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img src={BlogHeroImg} alt="HVAC Diffuser Action" className="w-full h-full object-cover" />
                </div>
                <h5 className="font-serif text-lg mb-2">HVAC Integration</h5>
                <p className="text-slate-500 text-xs font-light mb-6">Invisible diffusion for malls, hotels, and office towers.</p>
                <Link to="/large-area-and-hvac-aroma-diffusers/" className="text-[10px] font-black uppercase text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                  Explore Systems <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold">
              Impressions <br />That Last
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10">
              Let us help you make first impressions that last. Call us: +971 50 928 2702 | +974 6604 3446
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-600 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> Free Site Demo
              </a>
              <Link to="/contact/" className="flex items-center justify-center gap-3 bg-blue-700 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all">
                Request Proposal <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}